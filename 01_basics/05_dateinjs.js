//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 4);
// let myCreatedDate = new Date("2023/01/14");
let myCreatedDate = new Date("10-01-2023");

// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // it removes the decimal values of output.

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getHours());

 console.log(newDate.toLocaleString('dafault', {
    weekday:"long",
 }))
