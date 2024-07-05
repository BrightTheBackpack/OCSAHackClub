var w = window.innerWidth;
var h = window.innerHeight;
var half = w / 4;
console.log(half);
addEventListener("resize", (event) => {});

// onresize = (event) => {
//   var w = window.innerWidth;
//   var h = window.innerHeight;
//   var half = w/3 - w/4
//   document.getElementById("headertxt").style.fontSize = half-200 + "px";};
// document.getElementById("headertxt").style.fontSize = half-200 + "px";
function darkmode() {
  console.log("test");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

let captions = [
  "Bright teaching PCB Routing",
  "Club Meeting",
  "PCB Schematic Design",
  "3 Friends learning",
];
function showSlides(n) {
  let captions = [
    "Bright teaching PCB Routing",
    "Club     Meeting",
    "PCB Schematic Design",
    "3 Friends learning",
  ];

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = captions[slideIndex - 1];
}
const icon = document.getElementById("icon");
const hamburgerToggle = document.getElementById("hamburger-toggle");
const navbar = document.getElementById("navbar");
hamburgerToggle.addEventListener("click", hamburgerClicked);

function hamburgerClicked() {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
  } else {
    navbar.classList.remove("open");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-x");
  }
}

var img = document.getElementById("down_arrow");
