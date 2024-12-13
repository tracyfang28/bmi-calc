const submitBtn = document.getElementById("submit-btn");
const statsForm = document.getElementById("stats-form");
const bmiResult = document.getElementById("bmi-result");

statsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
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


