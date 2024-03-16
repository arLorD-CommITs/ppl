window.addEventListener("scroll", function(){
    let header = document.querySelector(".header"); 
    let headerContainer = document.querySelector(".container");
    header.classList.toggle("sticky", window.scrollY > 0);
    headerContainer.classList.toggle("sticky", window.scrollY > 0);
});