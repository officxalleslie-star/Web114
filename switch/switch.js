// Name: Leslie Romero
// Date: November 1, 2026

"use strict";

let favMonth = prompt("What is your favorite month?");

if (favMonth) {
    favMonth = favMonth.toLowerCase();
}

switch (favMonth) {
    case "march":
    case "april":
    case "may":
        console.log("Spring is nice with everything blooming.");
        break;
    case "june":
    case "july":
    case "august":
        console.log("You enjoy the summer months!");
        break;
    case "september":
    case "october":
    case "november":
        console.log("Fall is fun with all of the pretty colors.");
        break;
    case "december":
    case "january":
    case "february":
        console.log("You love the winter months!");
        break;
    default:
        console.log("Invalid month entered.");
        break;
}
