function updateProgress() {
  const inputs = document.querySelectorAll("input");
  const progress = document.getElementById("progress");
  const percentageText = document.getElementById("percentage");
  const submitBtn = document.getElementById("submitBtn");

  let filledCount = 0;

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      filledCount++;
    }
  });

  const totalFields = inputs.length;
  const percentage = Math.round((filledCount / totalFields) * 100);

  progress.style.width = percentage + "%";
  percentageText.innerText = `${percentage}% Completed`;

  submitBtn.disabled = percentage !== 100;
}

function submitForm(event) {
  event.preventDefault();

  let isValid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const city = document.getElementById("city").value.trim();

  document.getElementById("userError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passError").innerText = "";
  document.getElementById("cityError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  if (username.length < 3) {
    document.getElementById("userError").innerText =
      "Username must be at least 3 characters";
    isValid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }

  if (city === "") {
    document.getElementById("cityError").innerText = "City is required";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").innerText =
      "Form submitted successfully!";
    event.target.reset();
    updateProgress();
  }
}