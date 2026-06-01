const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const audio = document.getElementById("audio");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        audio.pause();
        audio.currentTime = 0;

        audio.src = `sounds/${sounds[index]}.mp3`;
        audio.play();
    });
});

document.querySelector(".stop").addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});