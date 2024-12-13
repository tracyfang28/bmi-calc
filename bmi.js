const submitBtn = document.getElementById("submit-btn");
const statsForm = document.getElementById("stats-form");
const bmiResult = document.getElementById("bmi-result");

statsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = document.getElementById("weight").value;
    if (weight > 600 || weight < 0){
        alert("Please enter a valid weight in kg between 0 and 600.");
        statsForm.reset();
        return;
    }
    const height = document.getElementById("height").value;
    if (height > 3 || height < 0){
        alert("Please enter a valid height in m between 0 and 3.");
        statsForm.reset();
        return;
    }
    const bmi = bmiCalc(weight, height).toFixed(1);
    const { type: bmiType, color } = bmiCategory(bmi);
    bmiResult.innerHTML = `Your bmi is ${bmi} which is <span style="color: ${color}; font-weight: bold;"> ${bmiType} </span>`;
})

const bmiCalc = (weight, height) => {
    return weight/(height * height);
}

const bmiCategory = (bmi) => {
    if (bmi < 18.5) {
        return { type: "underweight", color: "red" };
    } else if (bmi < 24.9) {
        return { type: "normal", color: "green" };
    } else if (bmi < 29.9) {
        return { type: "overweight", color: "orange" };
    } else {
        return { type: "obese", color: "red" };
    }
};


