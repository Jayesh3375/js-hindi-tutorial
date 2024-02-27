// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Thor","Blackwidow"]
// console.log(myArr[4]);
// console.log(myHeros[2]);

//Array Methods

// .push() => Add value to a array.
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);

// .pop() => removes the last value from the array. 
// myArr.pop();
// console.log(myArr);

// .unshift => insert a element to the start of an array.
// myArr.unshift(10)
// console.log(myArr);

// .shift() => removes an element from the starting of an array and return it ( when an array is empty then it returns undefind) 
// myArr.shift() 
// console.log(myArr);

// includes() => It determines ki array ke under defined value hai ki nahi or ise true ya false mai return krega.
// console.log(myArr.includes(4));


//.indexof() => It returns the index of the defined value of an array and if the value is not present in the array then it returns -1 as output.
// console.log(myArr.indexOf(4));


// join() => Add All the elements of an array into an string and it converts the type of an array into string and seprate the elements by specified seprator .

// const newArr = myArr.join()
// console.log(myArr); //output =>[0, 1, 2, 3, 4, 5]
// console.log(typeof myArr);  // output => object
// console.log(newArr);  // output => 0,1,2,3,4,5
// console.log(typeof newArr);  //output => string.

//slice and splice =>

const Arr = [0, 1, 2, 3, 4, 5, 6]
// console.log(Arr);  // output => [0, 1, 2, 3, 4, 5, 6]

console.log("A ", Arr); //output => A  [0, 1, 2, 3, 4, 5, 6]


// slice() => It returns a copy of an array from defined starting index but exclude the defind ending index.
 const newArr = myArr.slice(2, 5);
 console.log(newArr); //output => [ 2, 3, 4 ] here 5 is not include in output
 console.log("B ", myArr); // ouutput after the perform operation of slice() => B  [ 0, 1, 2, 3, 4, 5 ]

// splice => It removes element from an array and return an array from defined starting index but also "include" the defined ending index. and original array will be manipulate.
 const newArr2 = myArr.splice(2, 5);
 console.log(newArr2); //output => [2, 3, 4, 5] 
 console.log("C ", myArr);  //output after the perform operation of splice() => C [0, 1]
 