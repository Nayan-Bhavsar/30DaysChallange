const textInput = document.getElementById("textInput");
const MAX_LENGTH = 100;

textInput.addEventListener("input", () => {
  if (textInput.value.length > MAX_LENGTH) {
    textInput.value = textInput.value.substring(0, MAX_LENGTH);
    document.getElementById("warning").innerText = "Character limit reached!";
  } else {
    document.getElementById("warning").innerText = "";
  }

  const text = textInput.value.trim();

  let words = 0;

  if (text !== "") {
    words = text.split(/\s+/).length;
  }

  document.getElementById("wordCount").innerText = `Words: ${words}`;

  document.getElementById("charCount").innerText =
    `Characters: ${textInput.value.length}`;

  document.getElementById("remaining").innerText =
    `Remaining Characters: ${MAX_LENGTH - textInput.value.length}`;
});