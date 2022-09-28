/*
function name - sayHi
parameters: name - string

return string

concatenation
interpolation
*/

function sayHi(name){
    let newStr = `Hi, ${name}!`;
    return newStr;
}
console.log(sayHi("Greyson"));
console.log(sayHi("Tyler"));
console.log(sayHi("Brain"));
console.log(sayHi("Dominic"));


/*
function name - bigString
parameters: str1 str2 - string

return string

if equal - don't return, just console.log that they are equal
if str1 is bigger than str2 - return str1
if str2 is bigger than str1 - return str2

.length - used to determine how big each string is
*/

function bigString(str1, str2){
    if(str1.length > str2.length){
        return str1 + " is longer.";
    } else if(str2.length > str1.length){
        return str2 + " is longer.";
    } else {
        return `${str1} is equal in length to ${str2}.`
    }
}

console.log(bigString("Hello", "Goodbye"));
console.log(bigString("Taco", "Tuesday"));
console.log(bigString("Dog", "Cat"))


/*
function name - bigNumber
parameters: num1 num2 - numbers

return numbers

if equal - that they are equal
if num1 is bigger than num2 - return num1
if num2 is bigger than num1 - return num2

*/

function bigNumber(num1, num2){
    if(num1 > num2){
        return num1 + " is larger.";
    } else if(num2 > num1){
        return num2 + " is larger.";
    } else if (num1 === num2){
        return `${num1} is equal to ${num2}`;
    }
}
console.log(bigNumber(5,8));
console.log(bigNumber(8,4));
console.log(bigNumber(5,5));


/*
function name - fiveMore
parameters: array - numbers - numsArray

if odd number add 5 to it
loop!
numsArray.length

return the updated array
*/

function fiveMore(numsArray){
    for(let i = 0; i < numsArray.length; i++){
        if(numsArray[i] % 2 !== 0){
            numsArray[i]+= 5;
        }
            
    }
    return numsArray;
}

console.log(fiveMore([1,2,3,4]));
console.log(fiveMore([1,3,5,9]));
console.log(fiveMore([2,6,8,10]));
/*
function name: arraySummer
parameters array - numbers - numsArray2

add each number in the array together
loop
numsArray2.length

returns total

*/
function arraySummer(numsArray2){
    let sum = 0
    for(let i = 0; i < numsArray2.length; i++){
        sum += numsArray2[i]
    }
    return sum
}

console.log(arraySummer([21,19,20]));

/*
function name: everyDivisible
parameter: n - number less than 10

for loop
if( number % n ===0){
    console.log(number)
}
*/
function everyDivisible (n){

    if(n < 10){

        for(let number = 1; number <= 100; number++){
            if(number % n === 0){
                console.log(number);
        }
    }
}
}
everyDivisible(7)
everyDivisible(9)