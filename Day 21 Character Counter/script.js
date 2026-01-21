const textInput = document.getElementById("textInput");
const MAX_LENGTH = 100;

textInput.addEventListener("input", () => {
  if (textInput.value.length > MAX_LENGTH) {
    textInput.value = textInput.value.substring(0, MAX_LENGTH);
    document.getElementById("warning").innerText = "Character limit reached!";
    document.getElementById("warning").style.display = "block";
  } else {
    document.getElementById("warning").style.display = "none";
  }

  const length = textInput.value.length;

  document.getElementById("charCount").innerText = length;

  document.getElementById("remaining").innerText =MAX_LENGTH-length;
});
