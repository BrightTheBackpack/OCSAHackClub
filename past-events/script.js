import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
let eventTable = document.getElementById("eventsTable")
const db = getDatabase();
const events = ref(db, 'Past');
onValue(events, (snapshot) => {
  const data = snapshot.val();
  let index = 1;


  for(event in data){

     let eventMap = data[event]
    let row = eventTable.insertRow(index)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)


    if(eventMap["Link"] != null){
      cell1.innerHTML = "<a href ="+eventMap["Link"] + ">" + eventMap["FullName"] + "</a>"
    }else{
      cell1.innerText = eventMap["Title"]
    }



    cell2.innerText = eventMap["Time"]
    cell3.innerText = eventMap["Description"]


    index++


  }
  eventTable.deleteRow(index)

});


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