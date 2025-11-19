const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14620.jpg"
    },
    {
        templeName: "Meridian Idaho",
        location: "Meridian, Idaho, United States",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-65841-main.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    }
];

createTempleCard(temples);

const homeLink = document.querySelector("#home")
const oldLink = document.querySelector("#old")
const newLink = document.querySelector("#new")
const largeLink = document.querySelector("#large")
const smallLink = document.querySelector("#small")

homeLink.addEventListener("click", () => {
    createTempleCard(temples)
});

oldLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const yearString = temple.dedicated.substring(0, 4);
        const yearNumber = Number(yearString);
        return yearNumber < 1900
    });
    createTempleCard(filteredTemples)
});

newLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const yearString = temple.dedicated.substring(0, 4);
        const yearNumber = Number(yearString);
        return yearNumber > 2000
    });
    createTempleCard(filteredTemples)
});

largeLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const areaString = temple.area;
        const areaNumber = Number(areaString);
        return areaNumber > 90000
    });
    createTempleCard(filteredTemples)
});

smallLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const areaString = temple.area;
        const areaNumber = Number(areaString);
        return areaNumber < 10000
    });
    createTempleCard(filteredTemples)
});


function createTempleCard(filteredTemples) {
    document.querySelector("#templeCards").innerHTML = ""
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="highlight">Location: </span>${temple.location}`;
        dedication.innerHTML = `<span class="highlight">Dedicated: </span>${temple.dedicated}`;
        area.innerHTML = `<span class="highlight">Size: </span>${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#templeCards").appendChild(card);
    });
}


