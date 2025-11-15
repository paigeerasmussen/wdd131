const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

let temperature = 49;
let windSpeed = 4;
let windChillValue = 0;

if (temperature <= 50 && windSpeed > 3) {
    calculateWindChill = (temperature, windSpeed) =>
        35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
    windChillValue = calculateWindChill(temperature, windSpeed).toFixed(2) + "°F";
}
else {
    windChillValue = "N/A"
}

document.getElementById('windChillValue').textContent = windChillValue