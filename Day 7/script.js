const quotes = [
  "Consistency beats motivation.",
  "Code today, debug tomorrow, improve forever.",
  "Lines of code today become skills tomorrow.",
  "Build logic, not excuses.",
  "Code every day, even if it's small.",
  "Learning never exhausts the mind.",
  "First, solve the problem. Then, write the code.",
  "Dream big. Start small. Act now.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  document.getElementById("quote").innerText = selectedQuote;
}
