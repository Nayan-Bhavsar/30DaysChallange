function calcSI() {
        const principal = document.getElementById("principal").value;
        const rate = document.getElementById("rate").value;
        const time = document.getElementById("time").value;
        const result = document.getElementById("result");

        if (principal === "" || rate === "" || time === "") {
          result.innerText = "Please fill all fields";
          return;
        }

        const simpleInterest = (principal * rate * time) / 100;

        result.innerText = `Simple Interest = ₹${simpleInterest}`;
      }