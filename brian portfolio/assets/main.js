const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",

    });
});


document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-menu"); // Add a period before "burger-menu"
    const ul = document.querySelector("nav ul");

    burger.addEventListener("click", () => {
        ul.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) =>
        link.addEventListener("click", () => {
            ul.classList.remove("show");
        })
    );
});






AOS.init();



// JavaScript to handle the burger menu toggle
document.getElementById('burger-menu').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
});
