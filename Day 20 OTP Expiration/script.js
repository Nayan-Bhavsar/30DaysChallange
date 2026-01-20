let generatedOTP = null;
let timeLeft = 60;
let timerInterval = null;

function generateOTP() {
  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("otpBox").innerText = generatedOTP;

  timeLeft = 60;
  document.getElementById("timer").innerText = `OTP expires in ${timeLeft}s`;
  document.getElementById("message").innerText = "";
  document.getElementById("userOtp").value = "";
  document.getElementById("verifyBtn").disabled = false;

  clearInterval(timerInterval);//Clear Old TimerInterval

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `OTP expires in ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      generatedOTP = null;
      document.getElementById("timer").innerText = "Time Finished, OTP expired ❌";
      document.getElementById("verifyBtn").disabled = true;
    }
  }, 1000);//end of setInterval
}

function verifyOTP() {
  const userOtp = document.getElementById("userOtp").value;
  const message = document.getElementById("message");

  if (!generatedOTP) {
    message.innerText = "OTP has not generated";
    message.className = "message error";
    return;
  }

  if (Number(userOtp) === generatedOTP) {
    message.innerText = "OTP Verified Successfully ✅";
    message.className = "message success";
    clearInterval(timerInterval);
    document.getElementById("verifyBtn").disabled = true;
  } else {
    message.innerText = "Invalid OTP ❌";
    message.className = "message error";
  }
}