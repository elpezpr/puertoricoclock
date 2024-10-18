# Puerto Rico Digital Clock
A simple web application that displays the current time for Puerto Rico using data from the WorldTimeAPI.

## Overview
**Purpose**: Provides users with the real-time clock of Puerto Rico, automatically fetching and updating the time every second.

**Design**: Uses the 'Roboto' font from Google Fonts and a clean, minimalist design with a centered layout. The clock is displayed in a modern, user-friendly interface with soft colors.

**Functionality**: Fetches the current time from the WorldTimeAPI for the 'America/Puerto_Rico' timezone and updates the clock every second using asynchronous JavaScript.

## Test the App
You can test the clock directly on CodePen using the following link:  
[Live Demo](https://codepen.io/elpezpr/pen/OJKgRpJ)

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Google Fonts**
- **WorldTimeAPI**

## Project Structure
- **index.html**: Contains the HTML structure of the application.
- **styles.css**: Includes all the styling for the clock and layout.
- **script.js**: Handles fetching the current time, updating the DOM, and keeping the clock synchronized.

## Notes
- The project uses the WorldTimeAPI to fetch real-time data for the Puerto Rico timezone.
- It updates the clock every second using JavaScript's `setInterval` method.
- Error handling is implemented to display an error message if the time cannot be fetched.
- The design is responsive, centering the content both vertically and horizontally.

## Credits
- **Time API**: [WorldTimeAPI](http://worldtimeapi.org/)
- **Font**: Roboto by Google Fonts
