 function changeColor() {
        const randomnumber = Math.floor(Math.random() * 16777215);// generate random number between 0 and 16777215 for hex color
        const randomColor = "#" + randomnumber.toString(16).padStart(6, '0');// generate 6 digit hex color code
        document.body.style.backgroundColor = randomColor;
        document.getElementById("colorCode").innerText = randomColor;
      }