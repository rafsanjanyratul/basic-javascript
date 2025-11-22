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