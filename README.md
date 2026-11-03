# ❄️ Snowy Charm

> Shake the little snow globe and get a small, kind message to brighten your day.

Snowy Charm is a tiny interactive web page built with plain HTML, CSS, and JavaScript. Press the **Shake It!** button, watch the globe wobble, and get a random encouraging note.



**Live demo:** https://snowy-charm-5rck7efrp-mahnoorpro968-4242.vercel.app/

## Features

- A snow globe that shakes with a CSS keyframe animation
- A random positive message every time you press the button
- A teal and aquamarine colour scheme with a soft gradient background
- No frameworks, libraries, or build tools. Just open it and it works.

## Built with

| Language | What I used it for |
|----------|--------------------|
| **HTML5** | Page structure (header, main, footer, semantic tags) |
| **CSS3** | Flexbox layout, gradients, hover effects, and the shake animation with `@keyframes` |
| **JavaScript (vanilla)** | Button click, random message logic, and triggering the animation |

## How I made this

This was a beginner project to practise connecting HTML, CSS, and JavaScript together.

- **Tutorial or not:** [Pick one and edit: "I built this on my own, using Hackclub and Google when I got stuck." / "I followed [tutorial name/link] for the basic structure, then changed the design, colours, and messages myself."]
- **Tools:** [e.g. VS Code, Live Server, Git and GitHub, Claude for debugging help]
- **Process:**
  1. Sketched the idea: a globe, a button, and a message
  2. Wrote the HTML structure first
  3. Styled it with CSS (layout, colours, the circular globe)
  4. Added the shake animation
  5. Wrote the JavaScript to pick a random message
  6. Fixed bugs and uploaded it to GitHub
- **Help I used:** [e.g. HackClub Guide, an AI assistant to help find bugs. Being honest here is a good habit.]

## What I learned

- How to use **CSS `@keyframes`** to make something move, and how to restart an animation by adding and removing a class with JavaScript
- How **flexbox** centres things (`display: flex`, `align-items`, `justify-content`)
- How to pick a random item from an array using `Math.random()` and `Math.floor()`
- How `querySelector` and `addEventListener` connect JavaScript to the page
- That **small typos matter**: one wrong character can quietly break a style

## What I struggled with

- **Centering the button.** I didn't understand why `text-align: center` sometimes worked and sometimes didn't until I learned about `display: block` and `margin: auto`.
- **Selectors that didn't match.** I wrote `.main` in CSS when my HTML used a plain `<main>` tag, so the styles never applied. Classes (`.`) and IDs (`#`) only match what actually exists in the HTML.
- **A broken animation.** A typo (`rotate-(4deg)` instead of `rotate(4deg)`) made the shake look wrong, and it took me a while to spot.
- **Invalid CSS values.** Things like `font-weight: 3rem` and a border with no width or style fail silently, with no error message.
- **Sizing the image** so it fit inside the circular globe.


## Project structure

```
snowy-charm/
├── index.html      # Page structure
├── style.css       # Styling and shake animation
├── script.js       # Button logic and messages
├── snowglobe.png   # Snow globe image
└── README.md
```

## How it works

When you click the button, the script:

1. Adds a `shaking` class to the globe, which triggers the CSS animation
2. Removes that class after 600ms so it can be triggered again
3. Picks a random item from the `messages` array and shows it on the page

## Add your own messages

Open `script.js` and add a line to the `messages` array:

```javascript
const messages = [
    "You are someone's favourite person to sit next to.",
    "Your new message goes here.",
];
```

## Ideas for the future

- [ ] Falling snow animation inside the globe
- [ ] A sound effect when you shake it
- [ ] Avoid repeating the same message twice in a row
- [ ] A "copy message" or "share" button
- [ ] Dark mode

## Author

Made by **Mahnoor Muhammad**, with love, sweat, and tears. 😄



