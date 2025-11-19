function doIt(){
    console.log("go to outside")
    console.log(`COME TO HOME AFTER 10 MIN LATER`)
}
doIt();
let x = "string";
if(x==="string"){
    console.log('it is string')
}
else{
    console.log('it is number')
}
doIt();

function square(num){
    const borgo = num*num;
    console.log(borgo);
}
square(5);
square(6);
function add(num1, num2, num3){
    const numTotal =num1+num2+num3;
    console.log(numTotal);
}
add(2,4,6);

function doubleIt(number){
    const doubled = number * 2;
    console.log(number, doubled);
}
console.log('i will call the function');
doubleIt(15);
doubleIt(88);
console.log('function call is done');

const money = 500;
doubleIt(money);

function difference(num1, num2){
    const diff = num1-num2;
    console.log(num1, num2,'difference is', diff);
}
const fatherAge = 90;
const myAge = 20;
difference(fatherAge, myAge);

function tenTimes(number){
const result = number * 10;
return result;
console.log(result);
}
tenTimes(8);
const output = tenTimes(5);
// console.log('output is', tenTimes(5));
console.log('output is', output);

function bill(price1,price2){
    const total = price1 + price2;
    return total;
}
const billTotal = bill (5, 85);
console.log(billTotal);


function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1- num2;
    const multiply = sum * diff;
    const result = multiply / 2;
   return result;
}
const finalResult = doMath(7,5);
console.log(finalResult);

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(8), isEven(11), isEven(0));

function isOdd (number){
    if(number % 2 !==0){
        return true;
    }
    return false;
}
console.log(isOdd(8));