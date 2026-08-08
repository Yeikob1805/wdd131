const currentYear=document.querySelector("#currentyear");
const lastModified=document.querySelector("#lastModified");

const menuButton=document.querySelector("#menu");
const navigation=document.querySelector(".navigation");

if(currentYear){
    currentYear.textContent=new Date().getFullYear();
}

if(lastModified){
    lastModified.textContent=`Last Modified: ${document.lastModified}`;
}

if(menuButton && navigation){

    menuButton.addEventListener("click",()=>{

        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");

    });

    navigation.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            if(window.innerWidth<768){
                navigation.classList.remove("open");
                menuButton.classList.remove("open");
            }

        });

    });

}

window.addEventListener("resize",()=>{

    if(menuButton && navigation && window.innerWidth>=768){

        navigation.classList.remove("open");
        menuButton.classList.remove("open");

    }

});