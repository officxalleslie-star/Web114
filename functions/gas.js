// Name: Leslie Romero
// Date: November 12, 2026

let username = prompt("Enter your name");

while (username !== null && username.trim() === "") {
  username = prompt("Please enter a valid name");
}

if (username !== null) {
  let cleanName = username.trim();
  let gasAverage = CalcGasAvg();

  if (gasAverage === null) {
    document.getElementById("averageOutput").textContent = "No entries were made.";
    document.getElementById("countOutput").textContent = "Total gas entries: 0";
  } else {
    document.getElementById("averageOutput").textContent =
      cleanName + "'s average weekly gas bill is $" + gasAverage.toFixed(2) + ".";
  }
} else {
  alert("You hit Cancel.");
}

function CalcGasAvg() {
  let count = 0;
  let total = 0;
  let average = 0;
  let entry = parseFloat(prompt("Enter your first week's gas total (or -1 to finish):"));

  while (entry !== -1) {
    if (isNaN(entry)) {
      entry = parseFloat(prompt("Invalid input. Please enter a number for your gas total (or -1 to finish):"));
    } else {
      total = total + entry;
      count = count + 1;
      entry = parseFloat(prompt("Enter the next week's gas total (or -1 to finish):"));
    }
  }

  if (count > 0) {
    average = total / count;
  } else {
    average = 0;
  }

  document.getElementById("countOutput").textContent = "Total gas entries: " + count;

  if (count === 0) {
    return null;
  } else if (count === 1) {
    return total;
  } else {
    return average;
  }
}
