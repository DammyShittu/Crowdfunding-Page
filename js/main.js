const bookmarked = document.getElementById("bookmark");
const icon = document.getElementById("icon");


function getBookmark() {

    if (bookmarked.textContent === "Bookmark") {
        bookmarked.textContent = "Bookmarked"
        bookmarked.style.color = "var(--primary-color)";
        bookmarked.style.fontWeight = "bold";
        icon.style.filter = "invert(67%) sepia(57%) saturate(508%) hue-rotate(126deg) brightness(85%) contrast(74%)";
    }
    else {
        bookmarked.textContent = "Bookmark"
        bookmarked.style.color = "var(--tertiary-color)";
        bookmarked.style.fontWeight = "normal";
        icon.style.filter = "none";
  }
}


// const projectBacking = document.getElementById("projectBacking");
const modalDefault = document.getElementById("modal-default");
const overlay = document.getElementById("overlay");


function backThisProject() {
    modalDefault.style.visibility = "visible";
    overlay.style.display = "block";
    
}

function closeModal() {
    modalDefault.style.visibility = "hidden";
    overlay.style.display = "none";
    modalDefault.style.transition = "visibility 100ms ease-in";
    overlay.style.transition = "display 300ms ease-in";
}


const modalSuccess = document.getElementById("modal-success");
const textValue = document.getElementById("text");
let masterCraft = document.getElementById("mastercraft");

function showSuccess() {
    
    if (textValue.value > 200) {
        alert("Thank you for the pledge. Please note that the maximum is $200")
    } else if (textValue.value === "" || textValue.value < 25) {
        alert(" Please, enter a number between 25 and 200")
    } else {
        modalDefault.style.visibility = "hidden";
        modalDefault.style.transition = " ease-in-out";
        modalSuccess.style.visibility = "visible";
        modalSuccess.style.transition = " 100ms ease-in";
        overlay.style.display = "block";
        masterCraft.style.opacity = "0.1"

    }
   
}

function gotIt() {
    modalSuccess.style.visibility = "hidden";
    overlay.style.display = "none";
    masterCraft.style.opacity = "1"
}


const hamburger = document.getElementById("ham");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.querySelector(".menu");
const main = document.querySelector("main");


function openMenu() {
    overlay.style.zIndex = "-1";
    mobileMenu.style.display = "block";
    hamburger.style.display = "none";
    menuClose.style.display = "block";
    overlay.style.display = "block";
    main.style.opacity = "0.1";
   
}

function closeMenu() {
    mobileMenu.style.display = "none";
    hamburger.style.display = "inline-block";
    menuClose.style.display = "none";
    overlay.style.display = "none";
    main.style.opacity = "1";
    overlay.style.zIndex = "3";
}