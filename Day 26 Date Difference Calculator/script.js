const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const startDateValue = startDateInput.value;
    const endDateValue = endDateInput.value;

    if (startDateValue === "" || endDateValue === "") {
        result.innerText = "Please select both dates ❌";
        result.style.color = "red";
        return;
    }

    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);

    const timeDifference = Math.abs(endDate - startDate);
    //returns difference in miliseconds,"abs" makes reverse dates allow
    
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    //turn miliseconds into days

    result.innerText = `Difference: ${dayDifference} days`;
    result.style.color = "green";
});
