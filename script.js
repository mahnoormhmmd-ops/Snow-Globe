const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});

const messages = [
    "You are someone's favourite person to sit next to.",
    "The thing you are building counts, even half finished.",
    "You are allowed to be a beginner for as long as you need.",
    "Someone is going to love what you make with this.",
    "Hot chocolate tastes better after a hard day. You've earned one.",
    "You ask good questions. That is the whole skill.",
    "Every champion was once a beginner. So don't feel like you are lacking behind or that you are not skilled enough."
];

