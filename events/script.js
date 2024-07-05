

// import {ref,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
let eventTable = document.getElementById("eventsTable");

let eventList = [];
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


      if (compareDates(l[i][1], l[j][1])) {
   
        let temp = l[i];
        l[i] = l[j];
        l[j] = temp;
      
     
      }
    }
  }
  
  eventList.push.apply(eventList, l);

  
  return l;
}
function sortLists(array){
  let sorted =[]
  for(let i in array){
    for(let j in array){
      if(compareDates(array[j][1], array[i][1])){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
   
    
    
  }
  return(array)
}
function compareDates(date1, date2) {

  let filtered1 = date1.split(" ")[0];
  let filtered2 = date2.split(" ")[0];
  let split1 = filtered1.split("/");
  let split2 = filtered2.split("/");
  let year1 = parseInt(split1[2]);
  let year2 = parseInt(split2[2]);
  let month1 = parseInt(split1[0]);
  let month2 = parseInt(split2[0]);

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
fetch("https://express-eta-snowy.vercel.app/events").then(function (serverPromise) {
  serverPromise.json().then(function (j) {
    const data = j;
    let index = 1;
    let list = sortObjects(data);


    for (event in list) {
      let eventMap = list[event];

      if(compareDates(getDate(), eventMap[5])) continue
      let row = eventTable.insertRow(index);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);




      if (eventMap[4] != null) {
        cell1.innerHTML = "<a href =" + eventMap[4] + ">" + eventMap[0] + "</a>";
      } else {
        cell1.innerText = eventMap[0];
      }

      cell2.innerText = eventMap[2];
      cell3.innerText = eventMap[1];
      cell4.innerText = eventMap[3];

      index++;
    }
    eventTable.deleteRow(index);
  });
});

let yswsTable = document.getElementById("ysws");

fetch(
  "https://raw.githubusercontent.com/hackclub/site/main/lib/carousel.json",
).then(function (serverPromise) {
  serverPromise.json().then(function (j) {
    let index = 1;

    for (event in j) {
      let row = yswsTable.insertRow(index);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let ysws = j[event];
      if (!ysws["link"].includes("https://")) {
        ysws["link"] = "https://hackclub.com" + ysws["link"];
      }
      cell1.innerHTML =
        "<a href=" + ysws["link"] + ">" + ysws["title"] + "</a>";
      cell2.innerText = ysws["description"];

      index++;
    }

    yswsTable.deleteRow(-1);
  });
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

fetch("https://express-eta-snowy.vercel.app/hackathons").then(function (serverPromise) {
  serverPromise.json().then(function (j) {
    console.log(j)
    let calif = []
    let local = [] 
    let online = []
    let index = 0;
    let Oindex = 0

    for(let hackathon in j){
      let hack = j[hackathon]
      
      let state = hack['state']
  
      if(state != null){
        if(state.toString().includes("Calif")){
          calif[index] = hack
          index++
        }
      }else{
        online[Oindex] = hack
      }
     
    }

    for(let hackathon in calif){
      
      let location = calif[hackathon]
      let lat = location['latitude']
      let long = location['longitude']
      let distances = distance(lat, long, 33.742531564601634, -117.86626081328514)     
      if(distances < 800){
        local.push(calif[hackathon])
      }
    }
    let finalList = [[],[]]
    index = 0
    for(let hackathon in local){      
      let hack  = local[hackathon]     
      finalList[index][0] = hack["name"]
      let intialtime = hack["start"]
      let parse1 = hack["start"].split("T")
      let parse2 = parse1[0].split("-")
      let parse3 = parse2[1] + "/" + parse2[2] + "/" + parse2[0].slice(2,4)
      finalList[index][1] = parse3
      let location = ""
      if(hack['city'] != null){
        location = hack['city']
        
      }else if(hack['state'] != null){
        location = hack['state']
      }else{
        location = "Whoops! Could not get location data"
      }
      finalList[index][2] = location
      finalList[index][3] = hack["website"]
      index++
    }
    for(let hackathon in online){
      let hack = online[hackathon]
      console.log(hack["name"])
      console.log(index)
      finalList[index][0] = hack["name"]
      let parse1 = hack["start"].split("T")
      let parse2 = parse1[0].split("-")
      let parse3 = parse2[1] + "/" + parse2[2] + "/" + parse2[0]
      finalList[index][1] = parse3
      finalList[index][2] = "Online"
      finalList[index][3] = hack["website"]
    }
    eventList.push.apply(eventList, finalList);
    let sorted = sortLists(eventList)
    index = 0;
    for(let event1 in sorted){
      for(let event2 in finalList){
        let event1a = sorted[event1]
        let event2a = finalList[event2]

        if(JSON.stringify(event1a)== JSON.stringify(event2a)){        
         
          let row = eventTable.insertRow(index);
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);
          let cell4 = row.insertCell(3);
          cell1.innerHTML = "<a href =" + event2a[3] + ">" + event2a[0] + "</a>"
          cell2.innerText = event1a[2]
          cell3.innerText = event1a[1]
          cell4.innerText = "Hackathon!"
        }
      }    
      index++
    }
   
    eventTable.deleteRow(-1);
    eventTable.deleteRow(-1);
  });
});

//https://www.geodatasource.com/resources/tutorials/how-to-calculate-the-distance-between-2-locations-using-javascript/
function distance(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist;
  }
}