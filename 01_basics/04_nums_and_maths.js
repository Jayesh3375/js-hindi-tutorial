const value = 400;

// Output => 100
console.log(value);

// Output => number
// typeof operator  used to find the Datatype of a variable.
console.log(typeof value);


// It defines that the declared value is a Number type value. 
const numberOne = new Number(100);

// Output => [Number: 100]
console.log(numberOne);

// typeof this "numberOne" variable is OBJECT.
console.log(typeof numberOne);

//++++++++++++  Using Some Methods/Properties of Number :  ++++++++++++++++



                            //toString(): =>
const balance = new Number(100);

/* toString() method is used to convert the "Number" type value into an "String" type value. */
// Output => 100 but not it is an string type value.
console.log(balance.toString());




                            //.length Propery : =>
const balanceTwo = new Number(100);

// ".length" property used to return the length of a string.
// It shows the length of the value of the variable "balanceTwo".
// Output => 3
console.log(balanceTwo.toString().length);



                            // .toFixed :=>
 const hundreds = 100;

 // .toFixed method is used to converts the number into a string.
 // and rounds the  string to a specified number of a decimals.
 // Output => 100.00 
console.log(typeof hundreds.toFixed(2));



                            // .toPrecision :=>
const otherNumber = 23.897;

// .toPrecision used to return the string value
// and it formats the number to a specified length.
//converts a number to a specified precision.
// Output => 23.9 because we want the precision of 3.
console.log(otherNumber.toPrecision(3));

// Output => 24 because we want to precision of 2.
console.log(otherNumber.toPrecision(2));

// other Example =>
const otherNumberTwo = 123.897;
//Output => 124 because we want the precision of 3.
console.log(otherNumberTwo.toPrecision(3));



                        // .toLocaleString :=>
const hundredsTwo = 100000;

/* .toLocaleString method of the Number value returns a string with the language sensitive representation of this number. */
// Output => 100,000
console.log(hundredsTwo.toLocaleString());

// Output => 1,00,000
console.log(hundredsTwo.toLocaleString('en-IN'));


// +++++++++++++++++++++ Maths +++++++++++++++++++++


// Output => Object [Math] {}
console.log(Math);

// .abs() function :=>  It returns the absolute value of a number.
//              It converts only the negetive number into a positive number.
//Output :=> 4
console.log(Math.abs(-4));

// .round function :=> It rounds of the  given number
//Output :=> 5
console.log(Math.round(5.3));

//Output :=> 6 because after the value it is grerater then 5.
console.log(Math.round(5.6));


// .ceil() :=> it round of the value into upcoming top value.
//Output :=> 5 
console.log(Math.ceil(4.6));


// .floor() :=> it round of the value into upcoming bottom value.
//Output :=> 4 
console.log(Math.floor(4.6));

//.min :=> to find the lowest value in the array.
//Output :=> 2
console.log(Math.min(4,3,6,8,2));


//.max :=> to find the highest value in the array.
//Output :=> 8
console.log(Math.max(4,3,6,8,2));


// Math.random :=> always returns the random value between 0 and 1.
// Output :=>0
// Output :=>0.542254454865461486
// Output :=>0.978464648466
// Output :=>0.61698484531684
// Output :=>1
console.log(Math.random());

 // returns the random value and multiply it with 10.
//Output :=> 9.230201648613294
console.log(Math.random()*10);


 // returns the random value and multiply it with 10 and then add 1.
 // mnimum value is 1
//Output :=> 4.230201648613294
console.log(((Math.random()*10) + 1));


// It Always retunrs value between 1 to 9.
// Output :=> 2
// Output :=> 4
// Output :=> 5
// Output :=> 9
console.log(Math.floor(Math.random()*10) + 1);

const min = 15;
const max = 30;

console.log(Math.floor(Math.random() * (max - min +1 )) + min);

/* Output :=> 
Step-1 :=> First it generates the random number between 0 to 1.
                 [" Math.random() "]


Step-2 :=>  By Above Values :=>[(max - min + 1) == 30] 
             Then it Multiplies the  random number with 30(max - min + 1).
                     [" (Math.random() * (max - min +1 ) "]


Step-3 :=>  Then it returns the floor(nearest smallest) value of the abve output value.
                [" Math.floor(Math.random() * (max - min +1 )) "]


Step-4 :=> Then it adds the value of "min" variable to the floor value of the above output.
                [" (Math.floor(Math.random() * (max - min +1 )) + min) "]


Step-5 :=> Then in Last it returns the final value to the console.
                [" console.log(Math.floor(Math.random() * (max - min +1 )) + min) "]


*/

const minOne = 10;
const maxOne = 30;

console.log(Math.floor(Math.random() * (maxOne - minOne +1 )) + minOne);
