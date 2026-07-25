const currentYear = new Date().getFullYear();

document.querySelector("#currentYear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const temples = [
    {
        templeName:"Aba Nigeria",
        location:"Aba, Nigeria",
        dedicated:"2005, August, 7",
        area:11500,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName:"Manti Utah",
        location:"Manti, Utah, United States",
        dedicated:"1888, May, 21",
        area:74792,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName:"Payson Utah",
        location:"Payson, Utah, United States",
        dedicated:"2015, June, 7",
        area:96630,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName:"Yigo Guam",
        location:"Yigo, Guam",
        dedicated:"2020, May, 2",
        area:6861,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName:"Washington D.C.",
        location:"Kensington, Maryland, United States",
        dedicated:"1974, November, 19",
        area:156558,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName:"Lima Perú",
        location:"Lima, Perú",
        dedicated:"1986, January, 10",
        area:9600,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName:"Mexico City Mexico",
        location:"Mexico City, Mexico",
        dedicated:"1983, December, 2",
        area:116642,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName:"Rome Italy",
        location:"Rome, Italy",
        dedicated:"2019, March, 10",
        area:41010,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName:"Tokyo Japan",
        location:"Tokyo, Japan",
        dedicated:"1980, October, 27",
        area:52590,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
        templeName:"Santiago Chile",
        location:"Santiago, Chile",
        dedicated:"1983, September, 15",
        area:20831,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
    }
];

const album = document.querySelector(".album");

function displayTemples(filteredTemples) {

    album.innerHTML = "";

    filteredTemples.forEach(temple => {

        const card = document.createElement("figure");

        const caption = document.createElement("figcaption");

        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        caption.append(name, location, dedicated, area);

        card.append(caption, image);

        album.append(card);

    });

}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => displayTemples(temples));

document.querySelector("#old").addEventListener("click", () =>
    displayTemples(temples.filter(temple => Number(temple.dedicated.substring(0,4)) < 1900))
);

document.querySelector("#new").addEventListener("click", () =>
    displayTemples(temples.filter(temple => Number(temple.dedicated.substring(0,4)) > 2000))
);

document.querySelector("#large").addEventListener("click", () =>
    displayTemples(temples.filter(temple => temple.area > 90000))
);

document.querySelector("#small").addEventListener("click", () =>
    displayTemples(temples.filter(temple => temple.area < 10000))
);