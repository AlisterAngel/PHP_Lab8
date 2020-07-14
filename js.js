//JavaScript

let first_game = document.getElementById("first");
let second_game = document.getElementById("second");
let third_game = document.getElementById("third");
let fourth_game = document.getElementById("fourth");

let body = document.getElementsByClassName("main")[0];

setTheStage(first_game);
setTheStage(second_game);
setTheStage(third_game);
setTheStage(fourth_game);

function setTheStage(set){
  for(let i = 1; 1 <= 3; i++) {
    let new_btn = document.createElement("button");
    new_btn.setAttribute("backgroundColor","white");
    new_btn.setAttribute("innerHTML","");
    new_btn.setAttribute("onclick","button_colour(this)");

    document.getElementById(set).appendChild(new_btn);
  }
}

function button_colour(elmnt) {
  switch(elmnt.style.backgroundColor) {
    case "#0ccef0":
      elmnt.setAttribute("backgroundColor","red");
      elmnt.setAttribute("innerHTML","Wing");
      elmnt.setAttribute("color","black");
      break;
    case "red":
      elmnt.setAttribute("backgroundColor","green");
      elmnt.setAttribute("innerHTML","Snow");
      elmnt.setAttribute("color","white");
      break;
    case "green":
      elmnt.setAttribute("backgroundColor","yellow");
      elmnt.setAttribute("innerHTML","Fall");
      elmnt.setAttribute("color","purple");
      break;
    default:
      elmnt.setAttribute("backgroundColor","#0ccef0");
      elmnt.setAttribute("innerHTML","Ash");
      elmnt.setAttribute("color","red");
  }
}