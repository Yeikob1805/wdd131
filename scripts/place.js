const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperature = 8;
const windSpeed = 12;

document.getElementById("temperature").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(temp, speed){
    return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8){
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
}
else{
    windChill.textContent = "N/A";
}