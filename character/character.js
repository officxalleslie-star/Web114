"use strict";

// Step 4: Welcome message (includes your name and the haunted forest setting)
alert(`Welcome to the Adventure Character Creator! My name is Leslie, and your journey takes place deep within a haunted forest.`);

// Step 5: Character name
const charName = prompt(`What is your character's name?`, `Wanderer`);

// Step 6: Pet / companion
const pet = prompt(`What type of pet or companion does ${charName} have?`, `Ghost cat`);

// Step 7: Superpower
const superpower = prompt(`What superpower does ${charName} have?`, `Shadow Manipulation`);

// Step 8: Years of training & conversion
const trainingYearsText = prompt(`How many years has ${charName} been training?`, `5`);

// Convert string to a number
const trainingYears = Number(trainingYearsText);

// Log both values and their types to the console
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

// Calculate power level
const powerLevel = trainingYears * 10;
const likesFighting = confirm(`Does ${charName} like fighting monsters?\n\nClick OK for YES | Click Cancel for NO`);

// Console log for Step 9
console.log(likesFighting, typeof likesFighting);

// Step 10: Loading / preparing message
alert(`Gathering magic for ${charName}... almost ready!`);

// Step 11: Final character story
alert(`====================================
ADVENTURE CHARACTER PROFILE
====================================
Name: ${charName}
Pet: ${pet}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster Fighter? ${likesFighting ? "Yes" : "No"}

In the middle of nowhere there’s a haunted forest, ${charName} explores with their ${pet} with the rare power of ${superpower}.
====================================`);
