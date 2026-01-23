const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  // Logic For Character count
  document.getElementById("charCount").innerText = text.length;

  // Logic For Word count
  let words = 0;
  if (text !== "") {
    words = text.split(/\s+/).length;
  }
  document.getElementById("wordCount").innerText = words;

  // Logic For Sentence count
  let sentences = 0;
  if (text !== "") {
    const sentenceArray = text.split(/[.!?]+/);
    const filteredSentences = sentenceArray.filter(
      (sentence) => sentence.trim() !== "",
    );
    sentences = filteredSentences.length;
  }
  document.getElementById("sentenceCount").innerText = sentences;
});
