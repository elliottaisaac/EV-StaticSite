let isMobile = false;
if(document.documentElement.clientWidth < 600) isMobile = true;

//nav scripts ------------------------------------------------------------------------------------------->
let menuOpen = false;
let burgerMenuHeight = 224;

document.querySelector("#hamburger").addEventListener("click", () => {
    let menu = document.querySelector("#hamburgerMenu");
    let nav = document.querySelector("nav");
    let navMenus = document.querySelector("#masthead");
    if(menuOpen == false){
        menu.style.opacity = "1";
        menu.style.height = `${burgerMenuHeight}px`;
        document.querySelector("#hamburger svg:nth-child(3)").style.opacity = "0";
        document.querySelector("#hamburger svg:nth-child(1)").style.transform = "rotate(45deg) translate(8px, 8px)";
        document.querySelector("#hamburger svg:nth-child(2)").style.transform = "rotate(-45deg)";
        document.querySelectorAll("#hamburgerMenu li a").forEach(link =>{
            link.style.marginLeft = "0px";
        }); 
        if(isMobile){
            document.querySelector("main").style.display = "none";
            document.querySelector("footer").style.display = "none";
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
        if(isMobile){
            document.querySelector("main").style.display = "block";
            document.querySelector("footer").style.display = "block";
        }
        menuOpen = false;
    }
});
// -------------------------------------------------------------------------------------------> nav scripts

//hubnav ------------------------------------------------------------------------------------------->
document.querySelector("#Hub1").addEventListener("mouseover", () => {
    let textDescription = document.querySelector("#hubDescriptionText");
    let hubTitle = document.querySelector("#hubTitle");
    let picture1 = document.querySelector("#mainHubPic");
    let picture2 = document.querySelector("#gallery1");
    let picture3 = document.querySelector("#gallery2");
    let picture4 = document.querySelector("#gallery3")
    hubTitle.textContent = "Back Of The Yard";
    textDescription.textContent = "The #LetUsBreathe Collective is an alliance of artists and activists organizing through a creative lens to imagine a world without prisons and police. We organize artists to love and transform themselves, their families, their communities, and their cities through radical imagination and healing. The Collective produces cultural events and direct actions that disrupt oppressive systems, amplify marginalized serve people and communities most directly harmed by mass incarceration, police violence, and systemic injustice.";
});

document.querySelector("#Hub2").addEventListener("mouseover", () => {
    let textDescription = document.querySelector("#hubDescriptionText");
    let hubTitle = document.querySelector("#hubTitle");
    let picture1 = document.querySelector("#mainHubPic");
    let picture2 = document.querySelector("#gallery1");
    let picture3 = document.querySelector("#gallery2");
    let picture4 = document.querySelector("#gallery3")
    hubTitle.textContent = "Bright Star Community Outreach";
    textDescription.textContent = "Bright Star Community Outreach Text here.";
});

document.querySelector("#Hub3").addEventListener("mouseover", () => {
    let textDescription = document.querySelector("#hubDescriptionText");
    let hubTitle = document.querySelector("#hubTitle");
    let picture1 = document.querySelector("#mainHubPic");
    let picture2 = document.querySelector("#gallery1");
    let picture3 = document.querySelector("#gallery2");
    let picture4 = document.querySelector("#gallery3")
    hubTitle.textContent = "Open Center For The Arts";
    textDescription.textContent = "Open Center For The Arts Text here.";
});

document.querySelector("#Hub4").addEventListener("mouseover", () => {
    let textDescription = document.querySelector("#hubDescriptionText");
    let hubTitle = document.querySelector("#hubTitle");
    let picture1 = document.querySelector("#mainHubPic");
    let picture2 = document.querySelector("#gallery1");
    let picture3 = document.querySelector("#gallery2");
    let picture4 = document.querySelector("#gallery3")
    hubTitle.textContent = "BBF Family Services";
    textDescription.textContent = "BBF Family Services Text here.";
});

document.querySelector("#Hub5").addEventListener("mouseover", () => {
    let textDescription = document.querySelector("#hubDescriptionText");
    let hubTitle = document.querySelector("#hubTitle");
    let picture1 = document.querySelector("#mainHubPic");
    let picture2 = document.querySelector("#gallery1");
    let picture3 = document.querySelector("#gallery2");
    let picture4 = document.querySelector("#gallery3")
    hubTitle.textContent = "Circles & Ciphers";
    textDescription.textContent = "Circles & Ciphers Text here.";
});

document.querySelector("#Hub6").addEventListener("mouseover", () => {
    let textDescription = document.querySelector("#hubDescriptionText");
    let hubTitle = document.querySelector("#hubTitle");
    let picture1 = document.querySelector("#mainHubPic");
    let picture2 = document.querySelector("#gallery1");
    let picture3 = document.querySelector("#gallery2");
    let picture4 = document.querySelector("#gallery3")
    hubTitle.textContent = "Just Art";
    textDescription.textContent = "Just Art Text here.";
});

document.querySelector("#Hub7").addEventListener("mouseover", () => {
    let textDescription = document.querySelector("#hubDescriptionText");
    let hubTitle = document.querySelector("#hubTitle");
    let picture1 = document.querySelector("#mainHubPic");
    let picture2 = document.querySelector("#gallery1");
    let picture3 = document.querySelector("#gallery2");
    let picture4 = document.querySelector("#gallery3")
    hubTitle.textContent = "Free Write Arts And Literacy Outreach";
    textDescription.textContent = "Free Write Arts And Literacy Text here.";
});
// -------------------------------------------------------------------------------------------> hubnav scripts

