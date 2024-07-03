const api='AIzaSyBgzIGPbdJ5aYGHZQHC35qzdvGbJccyKec';
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
    import { getDatabase ,ref , onValue} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: api,
  authDomain: "ocsahack.firebaseapp.com",
  projectId: "ocsahack",
  storageBucket: "ocsahack.appspot.com",
  messagingSenderId: "924752625040",
  appId: "1:924752625040:web:56409c3089469259f1c715",
  measurementId: "G-YPLE2XSHVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
const team = ref(db, "Team");

const icon = document.getElementById("icon")
const hamburgerToggle = document.getElementById("hamburger-toggle")
const navbar = document.getElementById("navbar")

hamburgerToggle.addEventListener("click",hamburgerClicked)
const scroll = document.getElementById("scroll-text")
setInterval(()=>{
  fetch('https://jamsapi.hackclub.dev/openai/chat/completions', {
    method: 'POST', //GET, POST, PUT, DELETE
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 0JFM0X0SOE3TVG5Y8PMTE09NB6EXF8CRARD77SF3V2DJDQDXLJOV5X20UCJYM3KU'
    },
    //NOT needed with GET request
    body: JSON.stringify(
      {
        'model': 'gpt-3.5-turbo',
        'messages': [
          {
            'role': 'user',
            'content': `Give me a good coding or learning inspirational quote.`
          }
        ],
      }
    )
  })
    .then(result => result.json())
    .then(response => {
      console.log(response.choices[0].message.content)
 
    
        console.log('test')
        
        document.getElementById('id').remove()

      
      
      scroll.innerHTML = scroll.innerHTML + "<p id = 'id'>" + response.choices[0].message.content + "</p>"
    })

 

}, 10000)
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
fetch('https://jamsapi.hackclub.dev/openai/chat/completions', {
  method: 'POST', //GET, POST, PUT, DELETE
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 0JFM0X0SOE3TVG5Y8PMTE09NB6EXF8CRARD77SF3V2DJDQDXLJOV5X20UCJYM3KU'
  },
  //NOT needed with GET request
  body: JSON.stringify(
    {
      'model': 'gpt-3.5-turbo',
      'messages': [
        {
          'role': 'user',
          'content': `Give me a good coding inspirational quote.`
        }
      ],
    }
  )
})
  .then(result => result.json())
  .then(response => {
    console.log(response.choices[0].message.content)
    scroll.innerHTML = scroll.innerHTML + "<p id= 'id'>" + response.choices[0].message.content + "</p>"
  })



onValue(team, (snapshot) => {
  const data = snapshot.val();
  let index = 1;
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  console.log(vw)
  let x= 7.5
  console.log(vw)
  let str = '-'
  for(let i = 0; i<vw/x; i++){
 
    str = str.concat('-')
    
  }
  console.log(str)

  for (event in data) {
    
      scroll.innerHTML = scroll.innerHTML + '<p>' + data[event].Name + ' ' + str +'   ' + data[event].Role +'</p> <br>'


  }
 
});