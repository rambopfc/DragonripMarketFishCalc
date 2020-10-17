// ==UserScript==
// @name         DragonRip Market Fish Price Calculator
// @namespace    https://dragonrip.com/game/
// @version      0.1
// @description  Calculate fish price per health
// @author       Joe
// @match        https://www.dragonrip.com/game/marketr.php?go=6*
// @run-at document-start
// @grant        none
// ==/UserScript==

var fishhp
window.addEventListener('load', function() {
    var intgold
    var fishtype
	//get all objects in the table of resources
    //due to the page having multiple items with the same ID, this workaround of getting items is needed.
    // https://stackoverflow.com/questions/3607291/javascript-and-getelementbyid-for-multiple-elements-with-the-same-id
    var itemlist = document.querySelectorAll("[id='gold']");
    Array.from(itemlist).forEach(function(element, index, array){
		//gold value
        intgold = element.textContent.replace(/[^0-9]/g, '');
        var row = element.parentElement.parentElement;
        //fish name
        fishtype = row.cells[0].children[0].getAttribute('title');
        getfishhp(fishtype);
        var costperhp = intgold / fishhp

		//checks to see if it is an item in the list and not in the players bag, then checks that it is not anything on the right side
        if (element.parentElement.nodeName == "TD" && element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className != "burbul"){
		//add the item name to the correct section, and remove some empty space around it
            var para = document.createElement("p");
            var node = document.createTextNode(costperhp.toFixed(2) +" g/hp");
            para.style.marginBottom = ".5em";
            para.appendChild(node);
            element.parentElement.appendChild(para);

        }
    }
    );




}, false);

function getfishhp(fishname) {
  switch(fishname) {
  case "Anchovy":
    fishhp = 1;
    break;
  case "Darter":
    fishhp = 2;
    break;
  case "Koi":
    fishhp = 3;
    break;
   case "Herring":
    fishhp = 4;
    break;
   case "Carp":
    fishhp = 5;
    break;
   case "Pufferfish":
    fishhp = 6;
    break;
   case "Eel":
    fishhp = 7;
    break;
   case "Trout":
    fishhp = 8;
    break;
   case "Bass":
    fishhp = 9;
    break;
   case "Cod":
    fishhp = 10;
    break;
   case "Crucian Carp Queen":
    fishhp = 13;
    break;
   case "Pike":
    fishhp = 11;
    break;
   case "Crab":
    fishhp = 12;
    break;
   case "Salmon":
    fishhp = 14;
    break;
   case "Lobster":
    fishhp = 15;
    break;
   case "Pollock":
    fishhp = 16;
    break;
   case "Tuna":
    fishhp = 17;
    break;
   case "Giant Shrimp":
    fishhp = 18;
    break;
   case "Trevally":
    fishhp = 19;
    break;
   case "Dragon Prawn":
    fishhp = 20;
    break;
   case "Dogfish Shark":
    fishhp = 21;
    break;
  default:
    fishhp = 0;
}
}
