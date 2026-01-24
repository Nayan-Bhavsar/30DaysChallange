const urlInput = document.getElementById("urlInput");

urlInput.addEventListener("input", () => {
  const url = urlInput.value.trim();
  const result = document.getElementById("result");

  if (url === "") {
    result.innerText = "";
    return;
  }

  let isValid = false;

  // URL validation regex reference from stackoverflow.com
  const urlPattern =
    /(http(s)?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

  if (urlPattern.test(url)) {
    isValid = true;
  }

  if (isValid) {
    result.innerText = "Valid URL ✅";
    result.style.color = "green";
  } else {
    result.innerText = "Invalid URL ❌";
    result.style.color = "red";
  }
});