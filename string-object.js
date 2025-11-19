const country = 'bangladesh';
const country1 = "bangladesh1";
const country2 = `bangladesh2`;
const country3 = new String('bangladesh3'); // special
console.log(country3);


const capital = 'dhaka';
console.log(capital.length);
console.log(capital[0]);
capital[0] = "f";
console.log(capital);

const book = "ChemisTry";
console.log(book);
console.log(book.toLowerCase());
console.log(book.toUpperCase());

const subject = " math";
const subject1 = "Math "

if(subject.toLowerCase().trim() === subject1.toLowerCase().trim()){
    console.log("i will read")
}
else{
    console.log("i will play");
}

const friends = "friend"
const place = 'borisal cumilla cox bazar bandarban'
const placefinal = place.split(" ")
const friendfinal = friends.slice(1,5);
console.log(friendfinal, placefinal);
let letter = ["a", "b", "c", "d"];
let word = "hi"
let word1 = "hello"
let wordfinal = word + " " + word1
console.log(letter.join("+"));
console.log(wordfinal);
console.log(word.concat(" ").concat(word1));
console.log(word1.includes("l"));

let sentence = "i will go to school";
let reverse = ""
for(letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

let rev = ""
for(i=0; i<sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    let letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

let reversed = sentence.split("").reverse().join("");
console.log(reversed);



let person = {age : 25, income : 25000, isMarried : true, education :"hsc pass", 'favPlaces' : ["sundarban","bandarban"]};
console.log(person);
// console.log(person.age);
// console.log(person["age"]);
let person2 = person["isMarried"];
// console.log(person2);
// console.log(person['favPlaces'])
 person.income = 30000;
 person["age"] = 26;
 person["favPlaces"] = ["pataya", 'bali']
 const propEducation = "education"
//  person[propEducation] = "ssc pass"
 console.log(person);

 let computer = {
    brand : "hp",
    ssd : " 1 tb",
    processor : "core i 7"
 }
 let values = Object.keys(computer);
 console.log(Object.values(computer));
 console.log(values);

 const college = {
    name : "abc",
    class : ["11","12"],
    events : ['science fair', 'bijoy dibos', '21 feb'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : "top"
        }
    }
 }

 console.log(college);
 console.log(college.unique["result"].gpa);
 college.unique.result.merit = 'top class'
 college.events[1] = "16 december"
 delete college.class;
 console.log(college)


 const mobile = {
    brand : "xyz",
    price : 25000,
    color : "black",
    camera : "12 mp",
    isNew : true
 }

for(const prop in mobile){
 console.log(prop)
 console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key, mobile[key]);
}

const pen = new Object()
console.log(pen)
const pencil = Object.create({})
console.log(pencil)

