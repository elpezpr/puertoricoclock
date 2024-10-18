let currentDateTime;  // Store the current date and time fetched from the API
const timeZone = 'America/Puerto_Rico';  // Fixed timezone for Puerto Rico

// Function to fetch time from WorldTimeAPI for Puerto Rico timezone
async function fetchTime() {
    try {
        const response = await fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`);
        if (!response.ok) {
            throw new Error('Failed to fetch time');
        }
        const data = await response.json();
        currentDateTime = new Date(data.datetime);  // Set current time from the API
        updateClock();  // Initial clock update
        clearInterval(window.clockInterval);  // Clear previous intervals if any
        window.clockInterval = setInterval(incrementTime, 1000);  // Update every second
    } catch (error) {
        console.error('Error fetching time:', error);
        document.getElementById('clock').textContent = 'Error fetching time';
    }
}

// Function to increment the stored time
function incrementTime() {
    currentDateTime.setSeconds(currentDateTime.getSeconds() + 1);
    updateClock();
}

// Function to update the clock display
function updateClock() {
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Initialize the clock by fetching the time for the Puerto Rico time zone
fetchTime();
