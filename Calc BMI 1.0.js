var weight = parseFloat(prompt("what is you weight?"));
var height = parseFloat(prompt("what is you height?"))/100;

var bmi = weight / (height ** 2);
bmi = parseInt(bmi)
console.log(bmi);

if (bmi < 18.5) {
    alert("you are underweight: " + bmi);
} else if (bmi > 18.5) {
    alert("you are at the ideal weight: " + bmi);
} else if (bmi > 25) {
    alert("you are overweight: " + bmi);
} else if (bmi > 30) {
        alert("you have grade I obesity: " + bmi);
} else if (bmi > 35) {
    alert("you have grade II obesity: " + bmi);
} else if (bmi > 40) {
    alert("you have grade III obesity: " + bmi);
}