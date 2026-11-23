// Leslie Romero  - November 21, 2026

const quote = document.querySelector("#quote");
const title = document.querySelector("#title");
const buttonContainer = document.querySelector("#buttons");

const moods = {
  happy: {
    name: "Happy",
    bg: "#FFD700",
    text: "#bd26b0",
    message: "Warm smiles and the suns kisses!"
  },
  calm: {
    name: "Calm",
    bg: "#a8dadc",
    text: "#1d3557",
    message: "Take a deep breath. Everything is okay."
  },
  angry: {
    name: "Angry",
    bg: "#d90429",
    text: "#ffffff",
    message: "Take a step back and cool off."
  },
  sleepy: {
    name: "Sleepy",
    bg: "#2b2d42",
    text: "#edf2f4",
    message: "Time to rest and recharge."
  }
};

function handleMoodButtonClick(moodClick) {
  if (moodClick.target.classList.contains("mood-btn")) {
    const mood = moodClick.target.getAttribute("data-mood");
    const moodSettings = moods[mood];

    document.body.style.backgroundColor = moodSettings.bg;
    document.body.style.color = moodSettings.text;
    quote.textContent = moodSettings.message;
    title.textContent = moodSettings.name;

    console.log("Mood selected:", mood);
    console.log("Mood settings:", moodSettings);
  }
}

buttonContainer.addEventListener("click", handleMoodButtonClick);
