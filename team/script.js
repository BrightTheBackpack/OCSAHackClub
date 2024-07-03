import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2")
const db = getDatabase();
const events = ref(db, "Team");

onValue(events, (snapshot) => {
  const data = snapshot.val();
  let index = 0;
  let list = data;

  for (event in list) {
    let eventMap = list[event];
    let cell1 = row1.insertCell(index);
    let cell2 = row2.insertCell(index);
    console.log(eventMap)
    console.log(eventMap.Image)

    cell1.innerHTML = "<img src='" + eventMap.Image + "' class = 'image'></img>";

    cell2.innerHTML = "<p>"+eventMap.Name+"<br></br>"+eventMap.Role+"<br></br>"+eventMap.Bio+"</p>"

    
    
    

    index++;
  }
  row1.deleteCell(index)
  row2.deleteCell(index)
 
});


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
