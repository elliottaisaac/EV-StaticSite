let isMobile = false;
if(document.documentElement.clientWidth < 600) isMobile = true;

//nav scripts ------------------------------------------------------------------------------------------->
let menuOpen = false;
document.querySelector("#hamburger").addEventListener("click", () => {
    let menu = document.querySelector("#hamburgerMenu");
    let nav = document.querySelector("nav");
    let navMenus = document.querySelector("#masthead");
    if(menuOpen == false){
        menu.style.opacity = "1";
        menu.style.height = "200px";
        document.querySelector("#hamburger svg:nth-child(3)").style.opacity = "0";
        document.querySelector("#hamburger svg:nth-child(1)").style.transform = "rotate(45deg) translate(8px, 8px)";
        document.querySelector("#hamburger svg:nth-child(2)").style.transform = "rotate(-45deg)";
        document.querySelectorAll("#hamburgerMenu li a").forEach(link =>{
            link.style.marginLeft = "0px";
        }); 
        if(isMobile){
            document.querySelector("main").style.display = "none";
            menu.style.border = "none";
            menu.style.height = "100vh";
        }
        menuOpen = true;
    }
    else if(menuOpen == true){
        menu.style.opacity = "0";
        menu.style.height = "0px";
        document.querySelector("#hamburger svg:nth-child(3)").style.opacity = "1";
        document.querySelector("#hamburger svg:nth-child(2)").style.transform = "unset";
        document.querySelector("#hamburger svg:nth-child(1)").style.transform = "unset";
        document.querySelector("main").style.display = "block";
        document.querySelectorAll("#hamburgerMenu li a").forEach(link =>{
            link.style.marginLeft = "-300px";
        }); 
        menuOpen = false;
    }
});
// -------------------------------------------------------------------------------------------> nav scripts


