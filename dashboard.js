function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function processTime(time)
{
    var now = new Date();
    now.setHours(time.slice(0, 2),
                 time.slice(2, 4),
                 time.slice(4, 6));
    return now.getTime();
}

function differenceToString(first, second)
{
    var diff = Math.abs(first - second);
    var minutes = Math.ceil(diff/1000/60);
    if (minutes <= 35)
        return `in ${minutes} minutes`;
    else 
        return ``;
}

function update_event(data) {
    var current_event = document.getElementById("current_desc");
    var next_event = document.getElementById("next_desc");

    var now = new Date().getTime();

    var links = data.httplinks;

    // events today
    data = data.schedule[new Date().getDay()];
    data = data.events;

    current_event.innerHTML = "Nothing to show.";
    next_event.innerHTML = "Nothing to show.";

    for (var i = 0; i < Object.keys(data).length; i++) {
        var session = data[i];

        var link = links[session.name];

        if (/Mobi|Android/i.test(navigator.userAgent) &&
            link.slice(0, 7) === "zoommtg")
        {
                // mobile
                link = "zoomus" + link.slice(7);
        }

        var startTime = processTime(session.startTime);
        var endTime = processTime(session.endTime);
        if (startTime < now && now < endTime) {
            current_event.innerHTML = `<strong>${session.name}</strong>` + `\n` +
                                      `<div>${session.startTime} to ${session.endTime}</div>` + `\n` +
                                      `<a class="button" rel="noreferrer" target="_blank" href="${link}">Join meeting</a>`;
        }
        // find the nearest next event
        if (now < startTime) {
            let delta = differenceToString(now, startTime);
            next_event.innerHTML = `<strong>${session.name}</strong>` + `\n` +
                                   `<div>${delta}</div>` + `\n` + 
                                   `<div>${session.startTime} to ${session.endTime}</div>` + `\n` +
                                   `<a class="button" rel="noreferrer" target="_blank" href="${link}">Join meeting</a>`;
            break;
        }
    }
}

// zooming
var modal = document.getElementById("modal");
var img = document.getElementById("timetable");
var modalImg = document.getElementById("modal-img");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

modal.onclick = function() {
    modal.style.display = "none";
    modalImg.class = "modal_content";
}

function func() {
    loadJSON("data.json",
             function(data) { 
                update_event(data); 
             },
             function(xhr) { console.log(xhr); }
            );
}

func();
var x = setInterval(func, 2500);

