var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";

    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    else if(numberOfBottles === 0) {
    console.log("No more bottles of beer on the wall!");
    return false;
    }
        
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}