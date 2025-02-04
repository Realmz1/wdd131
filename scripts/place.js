// Footer Content
document.getElementById('lastModified').textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + " °C";
    }
    return "N/A";
}

// Static values for temperature and wind speed
const temperature = 10; // Celsius
const windSpeed = 5; // km/h

// Calculate and display wind chill
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windchill').textContent = windChill;