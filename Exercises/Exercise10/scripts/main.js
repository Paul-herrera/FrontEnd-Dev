// part1

var yourName= "Paul Herrera";

document.getElementById('partOne').innerHTML = yourName;

// part2

var foo= "This is not an integer";

document.getElementById('partTwo').innerHTML = foo;

// part3

var partThree = 5;

partThree += 10;

partThree *= 14;

partThree -= 25;

document.getElementById('partThree').innerHTML = partThree;

//part4

var fullName;

fullName = "fName" + " " + "lName";

document.getElementById('partFour').innerHTML = fullName;

// part5

var myHtml = "";

myHtml += "<h2>Title</h2>";

myHtml += "<p>Lorem ipsum dolor</p>";

myHtml += "<h3>Pellentesque habitant morbii</h3>";

myHtml += "<p>Morbi in sem quis dui placerat ornare.</p>";

document.getElementById('partFive').innerHTML = myHtml;

// part6

var part6Number = getRandomNumber();
var part6Result = "Below or equal to 50";
if(part6Number > 50) {
  part6Result = "Above 50";
}

document.getElementById('part6Number').innerHTML = part6Number;
document.getElementById('part6Result').innerHTML = part6Result;

/**
 *      Part 7
 */
var part7Number = getRandomNumber();
var part7Result = "Above 75";
if (part7Number < 25) {
  part7Result = 'Below 25';
} else if (part7Number >= 25 && part7Number < 50) {
  part7Result = 'Between 25 and 50';
} else if (part7Number >= 50 && part7Number < 75) {
  part7Result = 'Between 50 and 75';
}

document.getElementById('part7Number').innerHTML = part7Number;
document.getElementById('part7Result').innerHTML = part7Result;

//Bonus Challenge

var numberArray = [];

for(var i = 1; i <= 10; i++){
    numberArray.push(i);
}

for(var i = 0; i <= 10; i++){
    console.log(numberArray[i]);
}

document.getElementsByClassName("bonus")[0].style.backgroundColor = 'blue';


////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}