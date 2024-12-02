
//nav
// hamburger icon , by id name 
const menuBtn = document.getElementById("menu-btn");
// looking for element with nav class 
const nav = document.querySelector(".nav");
// looking for all elements with this class
const navLinks = document.querySelectorAll(".nav__link");

// function to close the navigation 
function closeNav(){
    nav.classList.remove('active');
    menuBtn.classList.remove('fa-xmark');
}

menuBtn.addEventListener('click', function(event){
    event.stopPropagation();

    // toggle both classes 

    nav.classList.toggle('active');
    menuBtn.classList.toggle('fa-xmark');
});

// close nav when we click anywhere in the document 

document.addEventListener('click', function(evebt){
    if(nav.classList.contains('active')){
        closeNav();
    }
});

navLinks.forEach(function(link){
    link.addEventListener('click', closeNav);
})