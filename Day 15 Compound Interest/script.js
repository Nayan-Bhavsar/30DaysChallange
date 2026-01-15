function calculateInterest() {
  const principal = document.getElementById("principal").value;
  const rate = document.getElementById("rate").value;
  const time = document.getElementById("time").value;
  const result = document.getElementById("result");

  const interestType = document.querySelector(
    'input[name="interestType"]:checked'
  ).value;

  if (principal === "" || rate === "" || time === "") {
    result.innerText = "Please fill all fields";
    return;
  }

  let interest;

  if (interestType === "simple") {
    interest = (principal * rate * time) / 100;
    result.innerText = `Simple Interest = ₹${interest}`;
  } else {
    interest = principal * Math.pow(1 + rate / 100, time) - principal;
    result.innerText = `Compound Interest = ₹${interest.toFixed(2)}`;
  }
}
