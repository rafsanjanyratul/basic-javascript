// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300

let takaIHave = 1000;
let coastOfOrangesAndApples = (400+300);
console.log(takaIHave-coastOfOrangesAndApples);

// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

let Mathematics = 75.25, Biology = 65, Chemistry = 80, Physics = 35.5, Bengal = 99.50;
console.log(((Mathematics+Biology+Chemistry+Physics+Bengal)/5).toFixed(2));

// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Sample Input:
// 119

// Sample Output:
// 4

var input1 = 119;
var input2 = 5;
console.log(input1%input2);

/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger =410;
let coke = 30;
 if(burger>500){
   console.log("coke free")
 }
 else{
    console.log("coke 30 tk")
 }
 console.log(burger);

 /*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/



let weight = 50;
let height = 55;
if((BMI = weight / height**2)&& (BMI<18.5)){
console.log("you are underweight");
}
else {
    if((BMI>=18.5) && (BMI<=24.9)){
        console.log("You are normal");
    }
    else if(((BMI>=25) && (BMI<=29.9)))
        {
        console.log("you are over weight")
    }
    else{
        console.log("you are obese")
    }
}


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let get = 30;
if(get>=90 && get<100){
    console.log("golden a+");
}
else if(get>=80 && get<89){
    console.log("a+");
}
else if(get>=70 && get<79){
    console.log("a");
}
else if(get>=60 && get<69){
    console.log("a-");
}
else if(get>=50 && get<59){
    console.log("b");
}
else if(get>=40 && get<49){
    console.log("b-");
}
else if(get>=33 && get<39){
    console.log("c");
}
else{
    console.log("f");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myMark = 81;
let friendMark = 40;
if(myMark>80){
    if(friendMark>80){
    console.log("go for a lunch");
    }
    else if(friendMark<80 && friendMark>=60){
        console.log("good luck next time")
    }
    else if(friendMark<60 && friendMark>=40){
        console.log("unseen the message")
    }
    
    else if(friendMark<40){
        console.log("block the message")
    }
}
else{
    console.log("go to home and be sad");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 30;
let num2 = 60;

// if(num1>num2){
//   result = num1*2
// }
// else if(num1<num2){
//   result = num1+num2
// }
// console.log(result);

result = num1>num2? num1*2 : num1=num2
console.log(result)

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let childrenAge = 9;
let student = false;
let citizenAge = 50;
let ticket = 800;

if(childrenAge<10){
    ticket = "free";
}
else if(student == true){
     ticket = ticket/2;
}
else if(citizenAge>=60){
    discount =  ticket * 15 / 100;
    ticket = ticket-discount
}
else{
    ticket = ticket;
}
console.log(ticket)


// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let fruits = ["mango", "bananna", "apple", "orange", "grip"]
console.log(fruits[3])
fruits[2] = "jambura";
console.log(fruits)

// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let place = ["kuakata", "cox-bazar", "sajek-valley"]
place.push("khagrachori")
console.log(place)
place.push("bandorban","sundarban")
console.log(place)
place.pop()
console.log(place)

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.


let books = ['php','python','java','javascript']
console.log(books.includes('javascript'))

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

let taka = (9, 10, 11, 12, 120);
// console.log(Array.isArray(taka))

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log()


let game = ['football', 'cricket', 'hokey']
let plays = ['abc', 'bcd', 'efg']
let num = [1,2,3,4,5]
console.log(game)
console.log(plays)
console.log(num)
console.log(game.concat(plays))

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

for(i=1; i<61; i++){
    console.log(i, "I will invest at least 6 hrs every single day for next 60 days!")
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***
Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

sum=0;
for(i=61; i<=100; i++){
    if(i % 2 !==0){
        console.log(i,"odd number")
        sum=sum+i;
        console.log(sum)
    }
}
console.log(sum);

let total = 0;
for(i=78; i<=98; i++){
   if(i % 2 === 0){
    console.log(i,"even number");
    total=total+i;
   }
}
console.log(total);

/***

Implement a countdown timer that counts down from 81 to 65.

 */


/*programming hero*/

// let count =1;

// let timer = setInterval( function(){
// console.log(count);
// count++

// if(count>50){
//     clearInterval(timer)
//     console.log("countdown finished")
// }
// },1000

// )




// let count = 1;
// let message =["Sumon leads Brand Flick.",
//   "Sumon edits with passion.",
//   "Sumon makes clips shine.",
//   "Arnob adds smooth cuts.",
//   "Arnob brings energy.",
//   "Brand Flick creates magic.",
//   "Turning clips into stories.",
//   "Your story, our edit.",
//   "Every frame counts.",
//   "From raw to polished.",
//   "Lights, motion, passion.",
//   "Trusted by creators.",
//   "We craft emotions.",
//   "Cinematic for all brands.",
//   "Your vision, our work.",
//   "Every cut matters.",
//   "Visuals that connect.",
//   "Make your brand shine.",
//   "From start to finish.",
//   "Creativity never stops."
  
// ];
// let timer = setInterval( function(){
//     console.log(count + " " + message[count-1])
//     count++
//     if(count>20){
//         clearInterval(timer)
//         console.log("countdown finished");
//     }
// },1000

// )


// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const color1 = [];
for (const color of colors){
    color1.unshift(color)
}
console.log(color1)

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 78, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
let numFinal =[]
for (i=0; i<numbers.length;  i++){
    if(numbers[i]%2===0){
    num1=numbers[i];
    numFinal.push(num1);
}}
console.log(numFinal)

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

let numbers1 = ['Tom', 'Tim', 'Tin', 'Tik']
let result11 = '';
for(const numbers2 of numbers1){
 result11=result11.concat(numbers2)
}
console.log(result11)

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

let sentence = "i will go to school";
let word = sentence.split(" ");
let reverseWord = word.reverse();
let reverseSentence = reverseWord.join(" ");
console.log(reverseSentence)

let sentence1 = " i am hard working person"
console.log(sentence1.split(" ").reverse().join(" "))