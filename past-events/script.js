import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
let eventTable = document.getElementById("eventsTable");
const db = getDatabase();
const events = ref(db, "Events");
function sortObjects(object) {
  let l = [];
  let index = 0;
  for (event in object) {
    let eventobject = object[event];
    l[index] = [
      eventobject["FullName"],
      eventobject["Time"],
      eventobject["Location"],
      eventobject["Description"],
      eventobject["Link"],
      eventobject["End"]
    ];
    index++;
  }

  for (let i in l) {
    for (let j in l) {

      if (parseInt(j) <= parseInt(i)) {
        continue;
      }
      //


      if (!compareDates(l[i][1], l[j][1])) {

        let temp = l[i];
        l[i] = l[j];
        l[j] = temp;
        // console.log(l[i], l[j])

      }
    }
  }

  return l;
}
function compareDates(date1, date2) {
  // console.log(date1, date2)
  let filtered1 = date1.split(" ")[0];
  let filtered2 = date2.split(" ")[0];
  let split1 = filtered1.split("/");
  let split2 = filtered2.split("/");
  let year1 = parseInt(split1[2]);
  let year2 = parseInt(split2[2]);
  let month1 = parseInt(split1[0]);
  let month2 = parseInt(split2[0]);
  // console.log(month1, month2)
  let day1 = parseInt(split1[1]);
  let day2 = parseInt(split2[1]);
  if (year1 > year2) {
    return true;
  } else if (year1 < year2) {
    return false;
  } else if (month1 > month2) {
    return true;
  } else if (month1 < month2) {
    return false;
  } else if (day1 > day2) {
    return true;
  } else if (day1 < day2) {
    return false;
  }
}
function getDate(){
  const today = new Date();
  const yyyy = today.getFullYear().toString().substr(-2);
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = mm + '/' + dd + '/' + yyyy;
  return formattedToday
}
onValue(events, (snapshot) => {
  const data = snapshot.val();
  let index = 1;
  let list = sortObjects(data);

  for (event in list) {
    let eventMap = list[event];
   
    if(compareDates(eventMap[5], getDate())) continue
    let row = eventTable.insertRow(index);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);





    if (eventMap[4] != null) {
      cell1.innerHTML = "<a href =" + eventMap[4] + ">" + eventMap[0] + "</a>";
    } else {
      cell1.innerText = eventMap[0];
    }

  
    cell2.innerText = eventMap[1];
    cell3.innerText = eventMap[3];

    index++;
  }
  eventTable.deleteRow(index);
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
