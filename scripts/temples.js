const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function(){
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})