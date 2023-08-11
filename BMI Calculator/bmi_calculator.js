/*BMI Calculator*/ 

function calculatebmi(weight, height){
    var bmi = weight/(height*height);
    return bmi; 
}

function message(bmi){
    message = "";
    if (bmi < 18.5){
        message = "You are underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        message = "You are normal";
    }
    else if (bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
    }
    else if (bmi >= 30){
        message = "You are obese";
    }
    else{
        message = "Invalid input";
    }
    return console.log(message);
}

console.log("Your BMI is: " + calculatebmi(74, 28));
message(calculatebmi(74, 28));