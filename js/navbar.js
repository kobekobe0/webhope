document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-bar ul');

    console.log(burger); // Check if burger element is found
    console.log(navList); // Check if navList element is found

    burger.addEventListener('click', function () {
        console.log("Burger clicked"); // Check if click event is being triggered
        navList.classList.toggle('show');
    });


    const navMobile = document.querySelector('.nav-mobile');

    burger.addEventListener('click', () => {
        navMobile.classList.toggle('active');
    });

    //on click on the navMobile, remove the active class
    navMobile.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });

});
