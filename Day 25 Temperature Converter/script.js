const tempInput = document.getElementById("tempInput");
const unit = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    const temperature = parseFloat(tempInput.value);

    if (isNaN(temperature)) {
        result.innerText = "Please enter a valid number ❌";
        return;
    }

    let convertedTemp = 0;

    if (unit.value === "celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        result.innerText = `${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        result.innerText = `${convertedTemp.toFixed(2)} °C`;
    }
});
