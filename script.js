let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navitems");

menu.onclick = () => {
    menu.classList.toggle("fa-x")
    navbar.classList.toggle("open")
}

var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide: "true",
    grabSlide: "true",
    fade: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        659: {
            slidesPerView: 1,
        },
        980: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 1,
        },
    }
});