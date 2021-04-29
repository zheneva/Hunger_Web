document.addEventListener('DOMContentLoaded', () => {


    const headerBurger = document.querySelector('.header-burger');
    const hungryPeopleMenuNav = document.querySelectorAll('.hungry-people__menu-nav');

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active');
        hungryPeopleMenuNav.forEach((menu) => {
            menu.classList.toggle('active');
        })
    });
})


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },

});
