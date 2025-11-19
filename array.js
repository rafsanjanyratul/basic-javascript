let numbers = [12, 21, 23, 67, 666, 77]
console.log(numbers[2]);
let fourth = numbers[3]
console.log(fourth)
numbers[1] = 99;
console.log(numbers)

let friends = ["balam", "kalam", "salam", "khailam"]
console.log(friends)
friends.push(99)
console.log(friends)
friends.push(99, "pailam")
console.log(friends)
friends.pop()
console.log(friends)
friends.shift()
console.log(friends)
friends.shift()
console.log(friends)
friends.unshift("balam", "kalam", "gumailam")
console.log(friends)
friends.push(18)
console.log(friends)
out = friends.pop()
console.log(out)

let people = ["one", "two", "three", "four"]
console.log(people.includes("two"))
if(people.includes("five")){
    console.log("go to home")
}
else{
    console.log("go to outside")
}

let number = [1, 2, 3, 4];
console.log(number.indexOf(2))
console.log(Array.isArray(number))

let apps = ["facebook", "instagram", "youtube"]
let apps2 = ["whatsapp", "tiktok", "telegram"]
console.log(apps.join("+"))
console.log(apps.concat(apps2))

let play = ["football", "cricket", "badminton", "basketball", "voliball", "carrom"]
console.log(play.slice(2,4))


const num = [2,3,4,5,6,7,78,8,89,7754,232]
for(let i = 0; i<num.length; i++){
    console.log(num[i])
}

const name = ['abc', 'bcd', 'cde', 'efg']
let i = 0;
while(i<name.length){
    console.log(name[i]);
    i++  
}

console.log(num)
// console.log(num.reverse())


const numFinal = [1,2,3,4,5,6,7]
const numFinal2 = []
for(const num1 of numFinal){
    numFinal2.unshift(num1);
}
console.log(numFinal2)

const math = [11,12,13,14,15,16,17,18,19];
const math3 = [];
for(i=math.length-1; i>=0; i--){
    console.log(math[i]);
    math3.push(math[i]);
    // math3.unshift(math[i]);
}
console.log(math3);

const num2 = [12, 1, 66, 7, 9, 5, 78]
// const num6 = num2.sort() //not working properly
const num6 = [...num2].sort(function(a,b){return a - b}) // ascending // smaller to larger
const num7 = [...num2].sort(function(a,b){return b - a}) // descending // larger to smaller
console.log(num6, num7)