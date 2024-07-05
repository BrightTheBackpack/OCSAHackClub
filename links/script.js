//https://www.youtube.com/watch?v=KtYby2QN0kQ

console.log(window.location.pathname);

// console.log('running')
// var terminal = document.getElementById("terminals");
// console.log(terminal.value)
// terminal.innerHTML = "<textarea readonly = 'readonly'> /users/ocsa-hack> </textarea>";
// terminal.focus();

let index = 0;
let terminal = document.getElementById("terminal");
let nextTutorialCommand = "";
let isTutorial = false;
let ynindex = 0;
let filetree = [
  { path: "index.html" },
  { path: "style.css" },
  { path: "script.js" },
  { path: "links" },
  { path: "/past-events" },
  { path: "/events" },
  { path: "/assets" },
  { path: "/team" },
  { path: "/about" },
];
let links = [
  { path: "index.html" },
  { path: "style.css" },
  { path: "script.js" },
];
let pastevents = [
  { path: "index.html" },
  { path: "style.css" },
  { path: "script.js" },
];
let events = [
  { path: "index.html" },
  { path: "style.css" },
  { path: "script.js" },
];
let assets = [
  { path: "index.html" },
  { path: "style.css" },
  { path: "script.js" },
];
let team = [
  { path: "index.html" },
  { path: "style.css" },
  { path: "script.js" },
];
let about = [
  { path: "index.html" },
  { path: "style.css" },
  { path: "script.js" },
];
let newfolders = [];
let currentDirectory = "links";
function parse() {
  let textarea = document.getElementById("terminals" + index);
  let text = textarea.value;

  if (text != null) {
    textarea.innerText = text;
    textarea.disabled = true;
    split = text.split(" ");
    command = split[0];
    let lines = 2;

    index++;

    switch (command) {
      case "help":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";
            return;
          }
        }
        if (checkParams(split, 1)) {
          return;
        }
        terminal.innerHTML =
          terminal.innerHTML +
          "<p>Welcome to the Terminal! <br> Here's a list of some of the commands you can use: <br>help ---------- Get a list of commands<br>version ---------- Get the version of the terminal<br>social ---------- go to one of our social media pages. run 'social help'<br>return ---------- return to a page in the site. run 'return help'<br>tutorial ---------- command line interface tutorial</p>";

        lines = 8;
        break;
      case "version":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";
            return;
          }
        }
        if (checkParams(split, 1)) return;

        terminal.innerHTML =
          terminal.innerHTML +
          "<p>version not found becasue i dont do versions lol</p>";
        break;
      case "return":
        if (checkParams(split, 2)) return;
        console.log(split[1]);
        switch (split[1]) {
          case undefined:
            terminal.innerHTML =
              terminal.innerHTML +
              '<p id  ="red">return to a page. run "return help" for help and page list</p>';
            break;
          case "":
            terminal.innerHTML =
              terminal.innerHTML +
              '<p id  ="red">return to a page. run "return help" for help and page list</p>';
            break;
          case "help":
            if (isTutorial) {
              if (checkcmd(nextTutorialCommand, command)) {
              } else {
                terminal.innerHTML =
                  terminal.innerHTML +
                  "<p>Oops thats the wrong command! try running " +
                  nextTutorialCommand +
                  "</p>";
                terminal.innerHTML =
                  terminal.innerHTML +
                  "<br><br><p>" +
                  "ocsa-hack/" +
                  currentDirectory +
                  "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
                  index +
                  "' name = terminal autofocus rows = '1' </textarea>";
                return;
              }
            }
            lines = 8;
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Return to any of theese page by doing return page_name(caps sensitive)<br> Here's a list of some of the pages you can go to: <br>Home<br>Events<br>About<br>Past<br>Team</p>";
            break;
          case "Home":
            window.location.href = "/";
            break;
          case "Events":
            window.location.href = "/events";
            break;
          case "About":
            window.location.href = "/about";
            break;
          case "Past":
            window.location.href = "/past-events";
            break;
          case "Team":
            window.location.href = "/team";
            break;
          default:
            terminal.innerHTML =
              terminal.innerHTML +
              "<p id  ='red'>Invalid page name. Check capitilzation</p>";
        }
        break;
      case "social":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";
            return;
          }
        }
        if (checkParams(split, 2)) return;
        console.log(split[1]);
        switch (split[1]) {
          case undefined:
            terminal.innerHTML =
              terminal.innerHTML +
              '<p id  ="red">get to our social media and google classroom. run "social help" for help</p>';
            break;
          case "":
            terminal.innerHTML =
              terminal.innerHTML +
              '<p id  ="red">get to our social media and google classroom. run "social help" for help</p>';
            break;
          case "help":
            lines = 6;
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Go to any of these sites by running social site_name(caps sensitive)<br> Here's a list of some of the pages you can go to: <br>classroom<br>instagram<br>youtube</p>";
            break;
          case "classroom":
            window.location.href =
              "https://classroom.google.com/c/NjYwOTc5MDI1OTUz?cjc=qtas67h";
            break;
          case "instagram":
            window.location.href = "https://www.instagram.com/ocsa.hackclub/";
            break;
          case "youtube":
            window.location.href = "https://www.youtube.com/@OCSAHackClub";
            break;
          default:
            terminal.innerHTML =
              terminal.innerHTML +
              "<p id  ='red'>Invalid site name. Check capitilzation</p>";
        }
        break;
      case "tutorial":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";
            return;
          }
        }
        if (checkParams(split, 1)) return;
        terminal.innerHTML =
          terminal.innerHTML + "<p>Welcome to the CLI tutorial! </p>";
        terminal.innerHTML =
          terminal.innerHTML +
          "<p>Ready to get started? [Y/N]</p><textarea onkeydown = 'if(event.keyCode ==13){tutorial()}' id='terminalsyn" +
          ynindex +
          "' name = terminal autofocus rows = '1' class='noline'></textarea>";
        return;
        break;
      case "ls":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";
            return;
          }
          console.log(currentDirectory);
        }
        if (checkParams(split, 1)) return;
        if (currentDirectory != "/assets") {
          let stuff;
          console.log(currentDirectory);
          switch (currentDirectory) {
            case "":
              stuff = filetree;
              console.log(stuff);
              break;
            case "links":
              stuff = links;
              console.log(stuff);
              break;
            case "about":
              stuff = about;
              break;
            case "past-events":
              stuff = pastevents;
              break;
            case "events":
              stuff = events;
              break;
            case "team":
              stuff = team;
              break;
            case "about":
              stuff = about;
              break;
          }
          let text = "";
          for (item in stuff) {
            console.log(stuff[item].path);
            text = text.concat("", "<br>" + stuff[item].path);
            console.log(text);
          }
          terminal.innerHTML = terminal.innerHTML + "<br><p>" + text + "</p>";

          lines = stuff.length + 1;
          if (isTutorial) {
            lines = 3;
            nextTutorialCommand = "pwd";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><br><p>awesome! next command is pwd. This command shows you what directory you're in! I'd also suggest you try theese commands on the terminal on your computer!<p>";
          }
        }

        break;
      case "pwd":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";

            return;
          }
          console.log(currentDirectory);
        }
        if (checkParams(split, 1)) return;
        terminal.innerHTML =
          terminal.innerHTML + "<br><p>ocsa-hack/" + currentDirectory + "</p>";
        if (isTutorial) {
          lines = 3;
          nextTutorialCommand = "pwd";
          terminal.innerHTML =
            terminal.innerHTML +
            "<br><p>cool! next, make and remove directories(folders) using mkdir and rmdir. for example, make a folder called pictures by running mkdir pictures. since theres no folders in this directory right now, go ahead and run mkdir pictures. then do ls, and see your new folder!<p>";
        }
        break;
      case "mkdir":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";

            return;
          }
          console.log(currentDirectory);
        }
        if (checkParams(split, 2)) return;
        if (split.length < 2) {
          terminal.innerHTML =
            terminal.innerHTML + '<p id = "red">Missing Directory Name</p>';
          terminal.innerHTML =
            terminal.innerHTML +
            "<br><br><p>" +
            "ocsa-hack/" +
            currentDirectory +
            "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
            index +
            "' name = terminal autofocus rows = '1' </textarea>";
          return;
        }
        switch (currentDirectory) {
          case "":
            filetree.push({ path: split[1] });
            break;
          case "links":
            links.push({ path: split[1] });

            break;
          case "about":
            links.push({ path: split[1] });
            break;
          case "past-events":
            links.push({ path: split[1] });
            break;
          case "events":
            links.push({ path: split[1] });
            break;
          case "team":
            links.push({ path: split[1] });
            break;
          case "about":
            links.push({ path: split[1] });
            break;
        }
        break;
      case "rmdir":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";

            return;
          }
          console.log(currentDirectory);
        }
        if (checkParams(split, 2)) return;
        if (split.length < 2) {
          terminal.innerHTML =
            terminal.innerHTML + '<p id = "red">Missing Directory Name</p>';
          return;
        }

        switch (currentDirectory) {
          case "":
            filetree = filetree.filter((link) => link.path !== split[1]);
            
          case "links":
            links = links.filter((link) => link.path !== split[1]);

            break;
          case "about":
            about = about.filter((link) => link.path !== split[1]);
            break;
          case "past-events":
            pastevents = pastevents.filter((link) => link.path !== split[1]);
            break;
          case "events":
            events = events.filter((link) => link.path !== split[1]);
            break;
          case "team":
            team = team.filter((link) => link.path !== split[1]);
            break;
          case "about":
            about = about.filter((link) => link.path !== split[1]);
            break;
        }

        break;
      case "cd":
        if (isTutorial) {
          if (checkcmd(nextTutorialCommand, command)) {
          } else {
            terminal.innerHTML =
              terminal.innerHTML +
              "<p>Oops thats the wrong command! try running " +
              nextTutorialCommand +
              "</p>";
            terminal.innerHTML =
              terminal.innerHTML +
              "<br><br><p>" +
              "ocsa-hack/" +
              currentDirectory +
              "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse id='terminals" +
              index +
              "' name = terminal autofocus rows = '1' </textarea>";
            return;
          }
          console.log(currentDirectory);
        }
        if (checkParams(split, 2)) return;
        if (split.length < 2) {
          terminal.innerHTML =
            terminal.innerHTML + '<p id = "red">Missing Directory Name</p>';
          return;
        }
        let dr;
        if (split[1] == "~") {
          console.log("tilda");
          currentDirectory = "";
          terminal.innerHTML =
            terminal.innerHTML +
            "<br><p>" +
            "ocsa-hack/" +
            currentDirectory +
            "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
            index +
            "' name = terminal autofocus rows = '1' </textarea>";
          return;
        }

        switch (currentDirectory) {
          case "":
            dr = filetree.filter((link) => link.path == split[1]);
            if (dr.length > 0) {
              currentDirectory +=  split[1];
              terminal.innerHTML =
                terminal.innerHTML +
                
                "<br><p>" +
                "ocsa-hack/" +
                currentDirectory +
                "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
                index +
                "' name = terminal autofocus rows = '1' </textarea>";
              return
            }
            break;
          case "links":
            dr = links.filter((link) => link.path == split[1]);

            break;
          case "about":
            dr = about.filter((link) => link.path == split[1]);

            break;
          case "past-events":
            dr = pastevents.filter((link) => link.path == split[1]);
            break;
          case "events":
            dr = events.filter((link) => link.path == split[1]);
            break;
          case "team":
            dr = team.filter((link) => link.path == split[1]);
            break;
          case "about":
            dr = about.filter((link) => link.path == split[1]);
            break;
        }
        if (dr.length > 0) {
          if (!currentDirectory.includes(".")) {
            
            console.log(currentDirectory)
            console.log(split[1])
            currentDirectory += "/" + split[1];
            
          } else {
            terminal.innerHTML =
              terminal.innerHTML + '<p id = "red">Can not CD to a file</p>';
          }
        } else {
          terminal.innerHTML =
            terminal.innerHTML + '<p id = "red">Directory Not Found</p>';
        }

        break;
      case "clear":
        terminal.innerHTML = "";
        break;
      default:
        terminal.innerHTML =
          terminal.innerHTML + '<br><p id = "red">ERROR: COMMAND NOT FOUND</p>';
        lines = 2;
    }
    let breaks = "";
    for (let i = 0; i < lines; i++) {
      breaks = breaks.concat("<br>");
    }

    terminal.innerHTML =
      terminal.innerHTML +
      breaks +
      "<p>" +
      "ocsa-hack/" +
      currentDirectory +
      "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
      index +
      "' name = terminal autofocus rows = '1' </textarea>";
    //document.getElementById('terminals' + index).focus()
  }
}

function checkParams(split, params) {
  if (split.length > params) {
    terminal.innerHTML =
      terminal.innerHTML + '<br><p id = "red">ERROR: TOO MANY PARAMETERS.</p>';
    let lines = 2;
    let breaks = "";
    for (let i = 0; i < lines; i++) {
      breaks = breaks.concat("<br>");
    }
    console.log(breaks);

    terminal.innerHTML =
      terminal.innerHTML +
      breaks +
      "<p>" +
      "ocsa-hack/" +
      currentDirectory +
      "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
      index +
      "' name = terminal autofocus rows = '1' </textarea>";
    return true;
  }
}
function checkcmd(nextcommand, currentcommand) {
  if (nextcommand == currentcommand) {
    return true;
  }
}
//https://stackoverflow.com/questions/47768523/empty-spaces-are-ignored-by-the-innertext-property

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function typeText(text, parag) {
  var i = 0;
  let time = getRandomArbitrary(5, 50);
  var paragText = "";
  var interval = setInterval(function () {
    paragText += text[i];
    parag.innerText = paragText;
    i++;
    if (text.length == i) clearInterval(interval);
  }, time);
}

function onStart() {
  const text = [
    'welcome to the terminal! run "help" to get started ',
    "...........................................................%%#########..............................",
    "......................................%..............#################..............................",
    "......................................##########%....#################..............................",
    ".....................................###########.....#################..............................",
    ".....................................###########.....#################..............................",
    "....................................############.....#################..............................",
    "...................................############......#################..............................",
    "...................................############......#################..............................",
    ".....................................#########.......#################...***........................",
    "........................+++++.........................###############********.......................",
    ".......................++++++++++..............................#**************#.....................",
    "......................+++++++++++++*........................*******************.....................",
    ".....................+++++++++++++++++++.................***********************....................",
    "....................*++++++++++++++++++++++...............***********************...................",
    "...................*+++++++++++++++++++++++................**********************#..................",
    "..................*+++++++++++++++++++++++.................***********************..................",
    "...................+++++++++++++++++++++++..................**********************#.................",
    "..................+++++++++++++++++++++++......----.........**********************..................",
    ".................+++++++++++++++++++++++.....-------=.......***********************.................",
    ".................++++++++++++++++++++++....-----------=......***********************................",
    "...................+++++++++++++++++++*=---------------......#********************#.................",
    ".......................*++++++++++++++------------------=.....**************#.......................",
    "............................++++++++=--------------------=.....********#............................",
    "...............................+++=-----------------------......***.................................",
    "............................=------------------------------=........................................",
    "..........................-----------------------------------.......................................",
    "..........................------------------------------------......................................",
    "...........................=-----------------------------------=....................................",
    "..............................----------------------------------=...................................",
    "................................-------------------------------=....................................",
    ".................................=---------------------------=......................................",
    "...................................=------------------------........................................",
    ".....................................--------------------=..........................................",
    "........................................=---------------=...........................................",
    "...........................................------------.............................................",
    "............................................--------=...............................................",
    "..............................................=----=................................................",
    "................................................==..................................................",
  ];
  for (let i = 0; i < text.length; i++) {
    console.log(i);
    path = "start" + i;
    console.log(path);
    typeText(text[i], document.getElementById(path));
  }
  setTimeout(() => {
    terminal.innerHTML =
      terminal.innerHTML +
      "<p>" +
      "ocsa-hack/" +
      currentDirectory +
      "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
      index +
      "' name = terminal autofocus rows = '1' </textarea>";
  }, 100 * 50);
}
onStart();
let stop = false;

function tutorial() {
  let textarea = document.getElementById("terminalsyn" + ynindex);
  console.log("terminalsyn" + ynindex);
  ynindex++;
  let text = textarea.value;

  if (text != null) {
    textarea.innerText = text;
    textarea.disabled = true;
    split = text.split(" ");
    command = split[0];
    let lines = 2;

    index++;

    switch (command) {
      case "Y":
        if (checkParams(split, 1)) return;
        terminal.innerHTML =
          terminal.innerHTML +
          "<p>Awesome! Today we'll learn some basic command line commands, that can be used on your computer command line! <br> Exit the tutorial at any time by running exittutorial<br>The first command we'll be learning is the ls command. The ls command lists the files in a directory.</p>";
        nextTutorialCommand = "ls";
        lines = 4;
        isTutorial = true;
        break;
      case "y":
        if (checkParams(split, 1)) return;
        terminal.innerHTML =
          terminal.innerHTML +
          "<p>Awesome! Today we'll learn some basic command line commands, that can be used on your computer command line! </p>";
        isTutorial = true;
        break;
      case "N":
        if (checkParams(split, 1)) return;
        terminal.innerHTML =
          terminal.innerHTML + "<br><br><p>Exiting Tutorial </p>";
        stop = true;
        break;
      case "N":
        if (checkParams(split, 1)) return;
        terminal.innerHTML =
          terminal.innerHTML + "<br><br><p>Exiting Tutorial </p>";
        stop = true;
        break;

      default:
        terminal.innerHTML =
          terminal.innerHTML +
          "<br><p>Ready to get started? [Y/N]</p><textarea onkeydown = 'if(event.keyCode ==13){tutorial()}' id='terminalsyn" +
          ynindex +
          "' name = terminal autofocus rows = '1' class='noline'></textarea>";
        lines = 2;
        return;
    }
    let breaks = "";
    for (let i = 0; i < lines; i++) {
      breaks = breaks.concat("<br>");
    }

    terminal.innerHTML =
      terminal.innerHTML +
      breaks +
      "<p>" +
      "ocsa-hack/" +
      currentDirectory +
      "></p> <textarea onkeydown = 'if(event.keyCode ==13){parse()}' id='terminals" +
      index +
      "' name = terminal autofocus rows = '1' </textarea>";
    //document.getElementById('terminals' + index).focus()
  }
}
