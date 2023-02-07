// Menu

const burger = document.querySelector(".burger"),
    nav = document.querySelector(".nav"),
    body = document.body;

if (burger && nav) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("_active");
        nav.classList.toggle("_active");
        body.classList.toggle("_lock");
    });
}

// Dropdown

const filter = document.querySelector(".filter");

if (filter) {
    const items = filter.querySelectorAll(".block-filter");

    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            item.querySelector(".block-filter__dropdown").classList.toggle(
                "_active"
            );
            item.querySelector(".block-filter__icon").classList.toggle(
                "_active"
            );

            if (e.target.classList.contains("block-filter__item")) {
                item.querySelector(".block-filter__value").textContent =
                    e.target.textContent;
            }
        });
    });
}

// Swiper

const residenceSlider = new Swiper(".residence-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".residence-slider-next",
        prevEl: ".residence-slider-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        },
    },
});

const reviewsSlider = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        nextEl: ".reviews-slider-next",
        prevEl: ".reviews-slider-prev",
    },
});
