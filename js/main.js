
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    console.log(n);

    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");

    console.log(slides);
    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

for (var i = 1; i < 4; i++) {
    document.getElementById("dots").innerHTML += `<span class="dot" onclick="currentSlide(${i})"></span>`
}

showSlides(slideIndex);
