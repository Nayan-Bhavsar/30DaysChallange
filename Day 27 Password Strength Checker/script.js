const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const lengthRule = document.getElementById("lengthRule");
const upperRule = document.getElementById("upperRule");
const numberRule = document.getElementById("numberRule");
const specialRule = document.getElementById("specialRule");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) {
        strength++;
        lengthRule.classList.add("valid");
    } else {
        lengthRule.classList.remove("valid");
    }

    if (/[A-Z]/.test(password)) {
        strength++;
        upperRule.classList.add("valid");
    } else {
        upperRule.classList.remove("valid");
    }

    if (/[0-9]/.test(password)) {
        strength++;
        numberRule.classList.add("valid");
    } else {
        numberRule.classList.remove("valid");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        strength++;
        specialRule.classList.add("valid");
    } else {
        specialRule.classList.remove("valid");
    }

    if (strength === 0) {
        strengthBar.style.width = "0%";
        strengthText.innerText = "";
    }
    else if (strength <= 2) {
        strengthBar.style.width = "33%";
        strengthBar.className = "weak";
        strengthText.innerText = "Weak";
    }
    else if (strength === 3) {
        strengthBar.style.width = "66%";
        strengthBar.className = "medium";
        strengthText.innerText = "Medium";
    }
    else {
        strengthBar.style.width = "100%";
        strengthBar.className = "strong";
        strengthText.innerText = "Strong";
    }
});
