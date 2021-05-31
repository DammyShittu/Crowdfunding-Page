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
    overlay.style.opacity = "10%";
    modalDefault.style.transition = "visibility 500ms ease-in";
        overlay.style.transition = "opacity 350ms ease-in";
    
}

function closeModal() {
    modalDefault.style.visibility = "hidden";
    overlay.style.opacity = "100%";
    modalDefault.style.transition = "visibility 100ms ease-in";
    overlay.style.transition = "opacity 300ms ease-in";
}

let changeBorderColor = document.querySelector(".bamboo");
let selectedPledge = document.querySelector(".selectedPledge");
let radioSelect = document.querySelector('input[name="pledge"]:checked');
let radioClick = document.getElementById("pledge");


function clickBorder() {
    if (radioSelect) {
        radioClick.parentNode.style.color = "red";
    }
}