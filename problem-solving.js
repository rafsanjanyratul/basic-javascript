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