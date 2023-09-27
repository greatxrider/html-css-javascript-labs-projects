/* Is this year a Leap Year? by Jeph Mari Daligdig*/

function isleap(Year){
    var div_4 = Year % 4;
    var div_100 = Year % 100;
    var div_400 = Year % 400;

    if (div_4 == 0){
        if(div_100 != 0){
            console.log("The year", Year, "is a leap year")
        }
        else{
            if(div_400 == 0){
                console.log("The year", Year, "is a leap year")
            }
            else{
                console.log("The year", Year, "is not a leap year")
            }
        }
    }
    else {
        console.log("The year", Year, "is not a leap year")
    }
}

isleap(1999);