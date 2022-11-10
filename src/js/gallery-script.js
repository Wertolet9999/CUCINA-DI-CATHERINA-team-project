let slideIndexH = 1;
showSlidesH(slideIndexH);

// Next/previous controls
function plusSlidesH(n) {
  showSlidesH(slideIndexH += n);
}

// Thumbnail image controls
function currentSlideH(n) {
  showSlidesH(slideIndexH = n);
}

function showSlidesH(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesH");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexH = 1}
  if (n < 1) {slideIndexH = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexH-1].style.display = "block";
  dots[slideIndexH-1].className += " active";
}