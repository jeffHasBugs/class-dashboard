# class-dashboard

A set-and-forget dashboard that displays your current and upcoming zoom classes,
controlled with a `json` file.

### Setup

The dashboard is controlled with a `json` file. The `data.json` file is requested
from a server periodically so that updates to the file will display instantly on the 
user's screen. 

An example is available at [`data.json.example`](data.json.example).

Note: Day 0 is a Sunday, day 1 Monday, day 6 Saturday, and so on. 
Meetings must be placed in the order that they start.

#### Timetable

Replace the `timetable.jpg` file with your own `timetable.jpg`.

#### Server

Because we periodically request `data.json`, a server is needed.
You can choose any service that hosts static sites for free.

Quick start: You can also drag the project folder to [https://app.netlify.com/drop](https://app.netlify.com/drop)
