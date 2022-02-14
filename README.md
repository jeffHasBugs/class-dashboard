# class-dashboard

A set-and-forget dashboard that displays your current and upcoming zoom classes,
controlled with a `json` file.

## Setup

The dashboard is controlled by the `data.json` file. When set up correctly, the `data.json` 
file is requested from a server periodically such that changes to the file takes effect
immediately.

An example of `data.json` is available at [`data.json.example`](data.json.example).
The dashboard needs a `data.json` file to function.

Day 0 is a Sunday, day 1 Monday, day 6 Saturday, and so on.

Meetings must be placed in the order that they start.

**Important**: Once you are finish writing your `data.json` file, paste it into a json validator:
https://jsonchecker.com/ to ensure the your file is valid and free of errors.

#### Timetable

Replace the blank `timetable.jpg` file with your own `timetable.jpg`. This is optional.

#### Server

With `data.json` and `timetable.jpg` ready, you now have a fully functional dashboard.

Because browsers don't allow us to make `XMLHTTPRequest`s (updating the timetable live) 
without a server, the easiest method would be to drag the entire project folder to 

[https://app.netlify.com/drop](https://app.netlify.com/drop).

