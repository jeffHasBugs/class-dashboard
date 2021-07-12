# class-dashboard

A set-and-forget dashboard that displays your current and upcoming zoom classes,
controlled with a `json` file.

### Setup

The dashboard is controlled with a `json` file. The `data.json` file is requested
from a server periodically so that updates to the file will display instantly on the 
user's screen. 

#### data.json
An example is available at `data.json.example`.

```
"schedule":[
    {
        "day":0,
        "events":[
        
        ]
    },
    {
        "day":1,
        "events":[
            {
                "name":"Meeting1",
                "startTime":"093000",
                "endTime":"103000"
            },
            {
                "name":"Meeting2",
                "startTime":"110000",
                "endTime":"123000"
            }
        ]
    },
    ...
]
```
and
```
"httplinks": {
    "Meeting1":"[Your meeting link here]",
    "Meeting2":"https://zoom.us/j/5000000000?pwd=00000",
    "Meeting3":"https://zoom.us/j/5000000000?pwd=00000",
    "Meeting4":"https://zoom.us/j/5000000000?pwd=00000"
}
```
Day 0 is a Sunday, day 1 Monday, day 6 Saturday, and so on.  
If there is no meeting for the day, leave `events` blank.

Meeting links are retrieved from the same `data.json` file.
The names in the `events` clause must match names in the `httplinks` clause.

#### Timetable

A timetable can be shown. Replace the `timetable.jpg` file with your own `timetable.jpg`.

#### Server

Any service that can host your HTML, CSS, and JS.
When you're done, you can drag the project folder to [https://app.netlify.com/drop](https://app.netlify.com/drop).
