const name = "Owais "
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello My Name Is ${name} and my repoCount is ${repoCount} `);

const gameName = new String ('owais_khan_salwa')
console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://owais.com/owais%20choudhary"
console.log( url.replace('%20','_'))

console.log( url.includes('hitesh'))

console.log(gameName.split('_'));

