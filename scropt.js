document.addEventListener('DOMContentLoaded', () => {


    const headerBurger = document.querySelector('.header-burger');
    const hungryPeopleMenuNav = document.querySelectorAll('.hungry-people__menu-nav');

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active');
        hungryPeopleMenuNav.forEach((menu) => {
            menu.classList.toggle('active');
        })
    });



    //smooth scrolling

    const scrollLlinks = document.querySelectorAll('a.hungry-people__link');

        for (let i = 0; i < scrollLlinks.length; i++) {
            
            scrollLlinks[i].addEventListener('click', (event) =>{
                event.preventDefault(); 
                hungryPeopleMenuNav.forEach((menu) => {
                    menu.classList.remove('active');
                })
                const id = scrollLlinks[i].getAttribute('href')
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            })
        }
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
