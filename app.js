// Importing all elements

const homeBtn = document.querySelector("#home-button")
const workBtn = document.querySelector("#work-button")
const contactBtn = document.querySelector("#contact-button")

const homeSection = document.querySelector(".home")
const contactSection = document.querySelector(".contact")

// Function calls right at the Start

hideHome()
hideContact()




// Defining Functions

function hideHome(){
    homeSection.style.display = "none"
}

function hideContact(){
    contactSection.style.display = "none"
}

function showHome(){
    console.log("Home")
    hideContact()
    homeSection.style.display = "block"
}

function showContact(){
    console.log("Contact")
    hideHome()
    contactSection.style.display = "block"
}


// Function calls and Programming

homeBtn.addEventListener("click", showHome());

// contactBtn.addEventListener("click", showContact());