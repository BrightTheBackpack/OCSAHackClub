import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
let eventTable = document.getElementById("eventsTable")
const db = getDatabase();
const events = ref(db, 'Events');
function sortObjects(object){
  let l = []
  let index = 0
  for(event in object){
    let eventobject = object[event]
    l[index] = [eventobject["FullName"],eventobject["Time"],eventobject["Location"],eventobject["Description"],eventobject["Link"]]
    index++
  }
 
  for(let i in l){
    for(let j in l){
      console.log(j,i)
      if(parseInt(j)<=parseInt(i)){
        continue
      }
      // 
      console.log(l[i][1], l[j][1])
      
      if(compareDates(l[i][1], l[j][1])){
        console.log(l[i][1], l[j][1])
        let temp = l[i]
        l[i] = l[j]
        l[j] = temp
        // console.log(l[i], l[j])
        console.log(i,j,l)
      }
    }
  }
   

  return l
}
function compareDates(date1, date2){
  // console.log(date1, date2)
  let filtered1 = date1.split(" ")[0]
  let filtered2 = date2.split(" ")[0]
  let split1 = filtered1.split("/")
  let split2 = filtered2.split("/")
  let year1 = split1[2]
  let year2 = split2[2] 
  let month1 = split1[0]
  let month2 = split2[0]
  // console.log(month1, month2)
  let day1 = split1[1]
  let day2 = split2[1]
  if(year1>year2){
    return true
  }else if(year1<year2){
    return false
  }else if(month1>month2){
    return true
  }else if(month1<month2){
    return false
  }else if(day1>day2){
    return true
  }else if(day1<day2){
    return false
  }
  
  
  
}
onValue(events, (snapshot) => {
  const data = snapshot.val();
  let index = 1;
  let list = sortObjects(data)
  

  for(event in list){
  
    let eventMap = list[event]
    let row = eventTable.insertRow(index)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    
    if(eventMap["Link"] != null){
      cell1.innerHTML = "<a href ="+eventMap[4] + ">" + eventMap[0] + "</a>"
    }else{
      cell1.innerText = eventMap[0]
    }
    
    
    cell2.innerText = eventMap[1]
    cell3.innerText = eventMap[2]
    cell4.innerText = eventMap[3]

    
    index++
   
    
  }
  eventTable.deleteRow(index)

});
let yswsTable = document.getElementById("ysws")

fetch("https://raw.githubusercontent.com/hackclub/site/main/lib/carousel.json")
.then(function(serverPromise){ 
  serverPromise.json()
    .then(function(j) { 
      let index=0
      
      for(event in j){
        let row = yswsTable.insertRow(index)
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let ysws=j[event]
        if(!ysws["link"].includes("https://")){
          ysws['link'] = "https://hackclub.com" + ysws['link']
        }
        cell1.innerHTML ="<a href=" + ysws["link"]+ ">" +ysws["title"] + "</a>"
        cell2.innerText = ysws["description"]

        index++
        
      }
    
      yswsTable.deleteRow(index)
      
    })
   
})



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