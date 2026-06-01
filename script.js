//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop"];

let currentAudio = null;

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sounds[index]}.mp3`);
    console.log(`clicked sound is sounds/${sounds[index]}.mp3`)
    currentAudio.play();
  });
});

document.querySelector(".stop").addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
