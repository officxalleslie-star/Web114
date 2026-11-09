// Name: Leslie Romero
// Date: November 8, 2026

let maxCrates = prompt("Enter number of crates:");

for (let i = 1; i <= maxCrates; i++) {
  if (i % 5 === 0) {
    document.write("Crate " + i + ": Handle with care<br>");
  } else if (i % 2 === 0) {
    document.write("Crate " + i + ": Load crate<br>");
  } else {
    document.write("Crate " + i + ": Inspect crate<br>");
  }
}

document.write("<br>Total crates scanned: " + maxCrates);
