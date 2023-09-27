/*Whos buying Lucn by Jeph Mari Daligdig*/

function whosPlaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    
    return randomPerson + " is going to buy lunch today!";
}

console.log(whosPlaying(["Jeph", "Mari", "Daligdig"]));