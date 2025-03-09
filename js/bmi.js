function funbmi(event) {
    event.preventDefault();
    let feet = document.forms["fbmi"]["feet"];
    let inches = document.forms["fbmi"]["inches"];
    let kgs = document.forms["fbmi"]["kilograms"];

    if(feet.value<=0 || inches.value<0 ||  feet.value > 8 || inches.value >12){
        alert("Enter a valid height");
        feet.value = '';
        inches.value = '';
    }
    else if(kgs.value <= 0 || kgs.value > 1000){
        alert("Enter a valid weight");
        kgs.value = '';
    }
    else{
        if(inches.value == ''){
            inches.value = 0;
        }
        let height = (parseInt(feet.value*12) + parseInt(inches.value))*2.54/100;
        let bmi = (kgs.value / (height * height)).toFixed(1);
        // alert(bmi);
        
        let x = document.getElementById("bmipchange");
        if(bmi<18.5){
            x.innerHTML = "You're <b>underweight</b>, which can lead to serious health issues like heart disease, weakened immune system, and even <u>early death.</u>";
        }
        else if(bmi>=18.5 && bmi<25){
            x.innerHTML = "You are at a <b>healthy weight</b>. To maintain this, consider following a specific <u>exercise regimen</u> and a <u>balanced diet plan.</u>";
        }
        else if(bmi>=25 && bmi<30){
            x.innerHTML = "You're <b>overweight</b>, which can increase your risk of developing <u>serious health conditions</u> such as heart disease, diabetes, and joint problems.";
        }
        else{
            x.innerHTML = "You are <b>obese</b>, which significantly increases the risk of several types of <u>cancer</u>, including breast, colon, ovarian, and pancreatic cancer, among others.";
        }
        document.getElementById("bmiphidden").style.display="block";
    }
}





// Underweight: BMI < 18.5
// Normal weight: BMI 18.5–24.9
// Overweight: BMI 25–29.9
// Obesity: BMI ≥ 30
