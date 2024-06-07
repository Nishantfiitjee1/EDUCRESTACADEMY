var customSlides = document.querySelectorAll(".custom-slide");
var customDots = document.querySelectorAll(".custom-dot");
var customIndex = 0;

function customPrevSlide(n) {
    customIndex += n;
    changeCustomSlide();
}

function customNextSlide(n) {
    customIndex += n;
    changeCustomSlide();
}

function changeCustomSlide() {
    if (customIndex > customSlides.length - 1)
        customIndex = 0;

    if (customIndex < 0)
        customIndex = customSlides.length - 1;

    for (let i = 0; i < customSlides.length; i++) {
        customSlides[i].style.opacity = 0;
        customSlides[i].style.display = "none";
        customDots[i].classList.remove("active");
    }

    customSlides[customIndex].style.display = "block";
    customSlides[customIndex].style.opacity = 1;
    customDots[customIndex].classList.add("active");
}

function autoChangeSlide() {
    customIndex++;
    changeCustomSlide();
    setTimeout(autoChangeSlide, 3000); // Change slide every 3 seconds (adjust as needed)
}

autoChangeSlide(); // Start auto slideshow
