const icon = document.getElementById("icon")
const hamburgerToggle = document.getElementById("hamburger-toggle")
const navbar = document.getElementById("navbar")
hamburgerToggle.addEventListener("click",hamburgerClicked)

function hamburgerClicked(){

  if(!navbar.classList.contains("open")){
    navbar.classList.add('open')
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-x")
  }else{
  navbar.classList.remove('open')
  icon.classList.add("fa-bars")
  icon.classList.remove("fa-x")
  }
}