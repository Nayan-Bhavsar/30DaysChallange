function saveToLocalStorage(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms").checked;

  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.innerText = "";
  successMsg.innerText = "";

  const errors = [];

  if (username === "") {
    errors.push("Username is required");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    errors.push("Email is required");
  } else if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address");
  }

  if (password === "") {
    errors.push("Password is required");
  } else if (password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  if (!gender) {
    errors.push("Please select your gender");
  }

  if (!terms) {
    errors.push("You must agree to the terms & conditions");
  }

  if (errors.length > 0) {
    errorMsg.innerHTML = errors.join("<br>");
    successMsg.innerText = "";
  }

  const userData = {
    username,
    email,
    password,
    gender: gender.value,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  successMsg.innerText = "Data saved to localStorage ✅";
  event.target.reset();
}