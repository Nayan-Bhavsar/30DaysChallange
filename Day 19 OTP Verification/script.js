let generatedOTP = null;

function generateOTP() {
  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("otpBox").innerText = generatedOTP;
  document.getElementById("message").innerText = "";
  document.getElementById("userOtp").value = "";
}

function verifyOTP() {
  const userOtp = document.getElementById("userOtp").value;
  const message = document.getElementById("message");

  if (!generatedOTP) {
    message.innerText = "Please generate OTP first";
    message.className = "message error";
    return;
  }

  if (userOtp === "") {
    message.innerText = "Please enter OTP";
    message.className = "message error";
    return;
  }

  if (Number(userOtp) === generatedOTP) {
    message.innerText = "OTP Verified Successfully ✅";
    message.className = "message success";
  } else {
    message.innerText = "Invalid OTP ❌";
    message.className = "message error";
  }
}