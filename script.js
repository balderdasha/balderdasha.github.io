const quotes = Object.freeze([
  "Do or do not, there is no try.",
  "It's not my fault.",
  "I find your lack of faith disturbing."
]);

function update() {
  document.getElementById("quote").innerHTML =
    quotes[Math.floor(Math.random() * quotes.length)];
}
