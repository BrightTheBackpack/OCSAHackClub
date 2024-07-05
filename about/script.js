
const icon = document.getElementById("icon");
const hamburgerToggle = document.getElementById("hamburger-toggle");
const navbar = document.getElementById("navbar");

hamburgerToggle.addEventListener("click", hamburgerClicked);
const scroll = document.getElementById("scroll-text");

setInterval(() => {
  fetch(
    "https://express-eta-snowy.vercel.app/ai",
  )
    .then((result) => result.text())
    .then((response) => {
      console.log(response);

      document.getElementById("id").remove();

      scroll.innerHTML = scroll.innerHTML + "<p id = 'id'>" + response + "</p>";
    });
}, 10000);
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
fetch("https://express-eta-snowy.vercel.app/ai")
  .then((result) => result.text())
  .then((response) => {
    console.log('called')
    console.log(response);
    scroll.innerHTML =
      scroll.innerHTML +
      "<p id= 'id'>" +
      response +
      "</p>";
  });
fetch("https://express-eta-snowy.vercel.app/team").then(function (serverPromise) {
  serverPromise.json().then(function (j) {
      const data = j;
    console.log(j)
      let index = 1;
      let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
      );
      console.log(vw);
      let x = 7.5;
      console.log(vw);
      let str = "-";
      for (let i = 0; i < vw / x; i++) {
        str = str.concat("-");
      }
      console.log(str);

      for (event in data) {
        scroll.innerHTML =
          scroll.innerHTML +
          "<p>" +
          data[event].Name +
          " " +
          str +
          "   " +
          data[event].Role +
          "</p> <br>";
    }

  });
});

// onValue(team, (snapshot) => {
//   const data = snapshot.val();
//   let index = 1;
//   let vw = Math.max(
//     document.documentElement.clientWidth || 0,
//     window.innerWidth || 0,
//   );
//   console.log(vw);
//   let x = 7.5;
//   console.log(vw);
//   let str = "-";
//   for (let i = 0; i < vw / x; i++) {
//     str = str.concat("-");
//   }
//   console.log(str);

//   for (event in data) {
//     scroll.innerHTML =
//       scroll.innerHTML +
//       "<p>" +
//       data[event].Name +
//       " " +
//       str +
//       "   " +
//       data[event].Role +
//       "</p> <br>";
//   }
// });
