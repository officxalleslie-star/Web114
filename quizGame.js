"use strict";
// Name: Leslie Romero 
// Date: October 23, 2026

 /* PLANNING / PSEUDOCODE
1. Initialize score = 0

Question 1: What is 5 + 3?
   - Variable name: sumResult
   - Correct answer: 8
   - How I'll validate and check the answer: Convert with Number(), check strict equality (=== 8)
   Question 2: What is 10 - 4?
   - Variable name: differenceResult
   - Correct answer: 6
   - How I'll validate and check the answer: Convert with Number(), check strict equality (=== 6)
   Question 3: What is 4 * 3?
   - Variable name: productResult
   - Correct answer: 12
   - How I'll validate and check the answer: Convert with Number(), check strict equality (=== 12)
   Question 4: What is 20 / 5?
   - Variable name: quotientResult
   - Correct answer: 4
   - How I'll validate and check the answer: Convert with Number(), check strict equality (=== 4)
   Question 5: What are Leslie's two favorite colors?
   - Variable name: favoriteColorsResponse
   - Correct answer: "pink and red" (or "red and pink")
   - How I'll validate and check the answer: Check for Cancel/null, empty string, use .trim() and .toLowerCase()
   Math: How will I calculate the percentage?
   - percentage = (score / 5) * 100
   Final feedback logic (if / else if / else):
   - Display customized message based on total performance
   - Special console.log if score === 3
   */
  
   //1. Initialize score 
   let score = 0;

   // Question 1
   const sumResult = Number(prompt("Question 1: What is 5 + 3?"));
   if (sumResult ===8) {
   alert("Correct!");
   score = score + 1;
} else {
   alert("Incorrect. The correct answer is 8.");
}
// Question 2
const differenceResult = Number(prompt("Question 2: What is 10 - 4?"));
if (differenceResult === 6) {
    alert("Correct!");
    score = score + 1;
} else {
    alert("Incorrect. The correct answer is 6.");
}

// Question 3
const productResult = Number(prompt("Question 3: What is 4 * 3?"));
if (productResult === 12) {
    alert("Correct!");
    score = score + 1;
} else {
    alert("Incorrect. The correct answer is 12.");
}
// Question 4
const quotientResult = Number(prompt("Question 4: What is 20 / 5?"));
if (quotientResult === 4) {
    alert("Correct!");
    score = score + 1;
} else {
    alert("Incorrect. The correct answer is 4.");
}

// Question 5 
const favoriteColorsResponse = prompt("Question 5: What are Leslie's two favorite colors?");
// Step A: Handle clicking "Cancel" (returns null) or clicking "OK" with no text
if (favoriteColorsResponse === null || favoriteColorsResponse.trim() === "") {
    alert("You cancelled or left the question blank! Incorrect.");
} else {
    // Step B: Clean the user input using .trim() and .toLowerCase()
    const cleanedColors = favoriteColorsResponse.trim().toLowerCase();

    // Step C: Check if input includes both "pink" and "red"
    if (cleanedColors.includes("pink") && cleanedColors.includes("red")) {
        alert("Correct! Pink and Red are Leslie's favorite colors!");
        score = score + 1;
    } else {
        alert("Incorrect. Leslie's favorite colors are Pink and Red.");
    }
}
// Calculate percentage using math
const percentage = (score / 5) * 100;
// Special requirement: If score was 3 out of 5, log a special message in the console
if (score === 3) {
    console.log("Special Message: Nice job! You got exactly 3 out of 5!");
}

// Final feedback using if / else if / else
if (score === 5) {
    alert("Perfect score! You scored " + score + " out of 5 (" + percentage + "%). Outstanding!");
} else if (score >= 3) {
    alert("Good job! You scored " + score + " out of 5 (" + percentage + "%). Passed!");
} else {
    alert("Keep practicing! You scored " + score + " out of 5 (" + percentage + "%). Try again!");
}