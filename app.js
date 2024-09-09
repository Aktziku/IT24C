//a.

//integer
let num1 = 21;
let num2 = 43;
//string
let name = "emi";
//undentified
let ressult;

//b.
let sum = num1 + num2;
console.log("Sum is " + sum);

//c.
if (num1 % 2 === 0){
    console.log(num1 + "is even");
} else {
    console.log(num1 + "is odd");


switch(true){
    case num1 > num2:
        console.log(num1 + "is greater than " + num2);
        break;
    case num1 < num2:
        console.log(num1 + "is less than " + num2);
        break;
    case num1 === num2:
        console.log(num1 + "is equal to " + num2);
        break;
    }
}

//d.
console.log("Numbers from 1 to 10");
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//e.
function isEven(num){
    return num % 2 === 0 ?"Even" : "Odd";
}

console.log(num1, "is", isEven(num1));

function isPrime(num){
    if (num < 2){
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(num1, "is prime", isPrime(num1));

function isPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("racecar"));