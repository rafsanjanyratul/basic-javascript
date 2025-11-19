const fruits = ["banana", "mango", "jambura", "apple", "orange"]
console.log(fruits)
for(const fruit of fruits){
console.log(fruit);
console.log("i want to eat")
}

let num = 1;
while(num<=10){
console.log(num);
num=num+1;
// num+=1;
// num++;
}

let num1 = 50;
while(num1<=100){
console.log(num1)
num1++;
}

let num2 = 1;
let sum = 0;
while(num2<=10){
console.log(num2);
sum=sum+num2;
console.log("sum :", sum)
num2+=1;
}
console.log("total :", sum)


let number = 1;
while(number<=10){
    // console.log(number)
    
    if(number % 2 === 0){
        console.log("even number:", number)
    }
    else{
        console.log("odd number:", number)
    }
    number++;
}

let sum4 = 0;
for(let i = 11; i<=20; i++){
console.log(i)
    sum4=sum4+i;
}
console.log("the sum of 11-20 number is :", sum4)


let n = 10
while(n>=0){
console.log(n)
n--;
}

for(let i = 10; i>=0; i--){
    console.log(i)
}

// odd number
for(let i = 1; i<=20; i+=2){
    // if(i % 2 !== 0){
    // console.log("odd", i)
    // }
    // if(i % 2 === 1){
    // console.log("odd", i)
    // }
    console.log("odd",i)
}

// 1-100 er moddhe 3 and 5 diye bivajjo number
for(let i=1; i<=100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i)
    }
}
// 1-100 er moddhe 5 diye bivajjo number and tader jogfol
let total = 0;
for(let i=1; i<=100; i++){
    if(i % 5 === 0){
        console.log(i)
        total=total+i;
        // console.log("total",total)
    }
}
console.log(total)

for(i=0; i<=100; i++){
    console.log(i)
    if(i>=10){
        break;
    }
}
let i1=100;
while(i1>=0){
console.log(i1)
if(i1<=10){
break;
}
i1--
}

let n1 = 0;
while(n1<15){
// console.log(n1)
n1++
if(n1 % 5 !== 0 ){
continue;
}
console.log(n1);
}

for(let i=1; i<15; i++){
if(i % 2 === 0){
continue;
}
console.log(i)
}

let a =1;
while(a<=10){
    console.log(a)
    a++
}
let b = 1;
do{
    console.log(b)
    b++
}
while(b<=20)
    