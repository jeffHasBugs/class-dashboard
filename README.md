# class-dashboard

A set-and-forget dashboard that displays your current and upcoming zoom classes,
controlled with a `json` file.

### Setup

The dashboard is controlled by the `data.json` file. The `data.json` file is requested
from a server periodically. Changes to the file will display instantly for the user. 

An example is available at [`data.json.example`](data.json.example).

Day 0 is a Sunday, day 1 Monday, day 6 Saturday, and so on.

Meetings must be placed in the order that they start.

#### Timetable

Replace the blank `timetable.jpg` file with your own `timetable.jpg`.

#### Server

Quick start: drag the project folder to [https://app.netlify.com/drop](https://app.netlify.com/drop)
