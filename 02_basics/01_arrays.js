// array 

const myArray = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","naagraj","gopal"]
const myArray2 = new Array(1,2,3,4,5)


// console.log(myArray[2])

//array methods
// myArray.push(6)
// myArray.push(7)
//myArray.pop() //pops the last element

// myArray.unshift(9)
// myArray.shift(9)

// console.log(myArray.includes(0));
// console.log(myArray.indexOf(3));

const newArray = myArray.join()

// console.log(myArray);
// console.log(typeof newArray);

// slice and splice

// console.log("A",myArray);

const myn1 = myArray.slice(1,3)

// console.log(myn1);
// console.log("B",myArray);

const myn2 = myArray.splice(1,3)
// console.log("C",myArray); // the whole array is also manipulated in splice operation we have to take care of this becoz in slice such thing doesn't happens
// console.log(myn2)



