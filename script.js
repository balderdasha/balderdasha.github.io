const quotes = Object.freeze([
  "I love you.",
  "I miss you.",
]);

function update() {
  document.getElementById("quote").innerHTML =
    quotes[Math.floor(Math.random() * quotes.length)];
}
