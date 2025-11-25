const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

let temperature = 49;
let windSpeed = 4;
let windChillValue = 0;

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
}

if (temperature <= 50 && windSpeed > 3) {
    windChillValue = calculateWindChill(temperature, windSpeed).toFixed(2) + "°F";
}
else {
    windChillValue = "N/A"
}

document.getElementById('windChillValue').textContent = windChillValue

function handleResize() {
    if (window.innerWidth < 500) {
        const smallImage = document.getElementById('smallImage');
        const headerSection = document.querySelector('header');
        headerSection.appendChild(smallImage);
    }
    if (window.innerWidth >= 500) {
        const smallImage = document.getElementById('smallImage');
        const mainSection = document.querySelector('main');
        mainSection.appendChild(smallImage);
    }
}

window.addEventListener('resize', handleResize);