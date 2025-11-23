//inch to feet

function inchToFeet (inch){
    const feet = inch / 12;
    const feetFraction = parseInt(feet);
    const feetInch = inch % 12;
    const result2 = feetFraction + 'feet' + feetInch + 'inch';
    return result2;
}
const result = inchToFeet(70);
console.log(result);

// leap year

function isLeapYear (year){
if(year % 100 !==0 && year % 4 ===0){
    return true;
}
else if(year % 400 ===0){
    return true;
}
else{
    return false;
}
}
const year1 = isLeapYear(2021);
console.log(year1);

// even number gor ber kora

function evenNumbers (number){
    const evenNumberArray = [];
    for(const num of number){
        if(num % 2 === 0){
            evenNumberArray.push(num);
        }
    }
    
    let sum = 0;
    for(num of evenNumberArray){
        sum = sum +num;
    }
    const count = evenNumberArray.length;
    console.log(sum, count);
    const average = sum / count;
    return  average;
}
const numbers = [1,2,3,4,5,6,7,8,9];
const result1 = evenNumbers(numbers);
console.log('average of the even num is', result1);

// odd number er gor ber kora

 function oddNumber (number){
    let newArray = [];
    for(const num of number){
        if(num % 2 !== 0){
            newArray.push(num)
        }
    }
    console.log(newArray);
    let sum = 0;
    for(num of newArray){
     sum = sum + num;
    }
    console.log(sum)
    let count = newArray.length;
    console.log(count);
    let average = sum / count;
    console.log(average, 'this is the average')
    // return average;
}
 const finalNum = [1,2,3,4,5,6,7,8,9];
 const finalOddNumber = oddNumber(finalNum);

 // duplicate item array theke bad dea

 function noDuplicate(array){
    newArray = [];
    for(num of array){
        if(newArray.includes(num) === false){
            newArray.push(num);
        }
    }
    return newArray;
 }

 const setOfArray = ['a', 'b', 'c', 'a', 'g', 'h', 'k'];
 const newArrayFinal = noDuplicate(setOfArray)
 console.log(newArrayFinal);


 // math abs round ceil floor random

 const min = Math.min(11,22,66,77,88,99)
 console.log(min)
 const max = Math.max(11,22,66,77,88,99)
 console.log(max)
 const valuePi = Math.PI
 console.log(valuePi)
 console.log(Math.abs(5*10),(5-5), (-10-5), (5/10))
 console.log(Math.round(8.20))
 console.log(Math.round(8.80))
 console.log(Math.floor(7.80))
 console.log(Math.ceil(9.28))
console.log(Math.random())
console.log(Math.random()*10)
const rand = Math.round(Math.random()*10)
console.log(rand)


const today = new Date();
console.log(today)
const date = new Date ('2020-11-23')
console.log(date);
console.log(date.getMonth())
console.log(date.getDay())
const specificDate = new Date(2020, 0, 26)
console.log(specificDate);
specificDate.setMonth(7);
console.log(specificDate.toLocaleString('en-GB'))

let a = 5;
let b = 7;
console.log(a,b);
const temp = a;
 a = b;
 b = temp;
console.log(a,b)

let x = 5;
let y = 7;
console.log(x,y);
[x,y] = [y,x]
console.log(x,y);

// 2,3 ba onek songkha gulor moddhe boro ba choto songkha nirnoy

let jim = 99;
let kim = 78;
let tim = 98;

if(jim > kim && jim > tim){
    console.log('jim is the boss')
}
else if(kim > jim && kim > tim){
    console.log('kim is the boss')
}
else{
    console.log('tim is the boss')
}

function maxOfThree(jim1, kim1, tim1){
if(jim1 > kim1 && jim1 > tim1){
    console.log('jim is the boss')
}
else if(kim1 > jim1 && kim1 > tim1){
    console.log('kim is the boss')
}
else{
    console.log('tim is the boss')
}
}
let jim1 = 89;
let kim1 = 78;
let tim1 = 98;
const resultFinal = maxOfThree(jim1,kim1,tim1);
// console.log(resultFinal);

function maxOfTwo(num1,num2){
if(num1 > num2){
    return num1;
}
else{
    return num2;
}
}
const setNumber = maxOfTwo(79,98);
const setNumber1 = maxOfTwo(8, 90);
const getMax = maxOfTwo(setNumber, setNumber1)
console.log('the max number is', setNumber)

//tallest and smallest number of an array

const heights = [11,66,77,88,99,98,76,55,]
function maxNumber(numbers){
    let max = numbers[0];
    for(const digit of numbers){
        if(digit > max)
            max = digit;
    }
    // return max;
   for(const digit of numbers){
    if(digit < min)
        min = digit;
   }
    console.log('tallest digit is', max ,'the smallest digit is', min)
}
const finalRes = maxNumber(heights);


let array = [11,22,66,77,88,99,8]
function smallDigit(numbers){
    let min = numbers[0]
    for(const num of numbers){
        if(num<min)
            min = num
    }
    return min;
}
const newArraySet = smallDigit(array)
console.log(newArraySet)

//total marketing coast

function totalMarket(shirt,pant,shoe){
let shirtCoast = 500;
let pantCoast = 600;
let shoeCoast = 800;

let totalShirtPrice = shirtCoast * shirt;
let totalPantPrice = pantCoast * pant;
let totalShoePrice = shoeCoast * shoe;

let totalCoast = totalShirtPrice + totalPantPrice + totalShoePrice;
return totalCoast
}
const finalCoast = totalMarket(20,15,9)
console.log(finalCoast)

// find the cheapest phone from the array

let phone = [
    {name : "samsung", price : 50000, color : 'black'},
    {name : "oppo", price : 20000, color : 'black'},
    {name : "xiaomi", price : 30000, color : 'black'},
    {name : "techno", price : 15000, color : 'black'},
    {name : "iPhnoe", price : 80000, color : 'black'},
]

function cheapestPhone(phones){
let min = phones[0];
for(mobile of phones){
    if(mobile.price < min.price)
        min = mobile;
}
return min;
}
const finalPhone = cheapestPhone(phone);
console.log('lowest budget phn is',finalPhone)