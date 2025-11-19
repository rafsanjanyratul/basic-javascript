console.log(12!==10);
console.log(33<=34);

let year = 2025;
if (year==2030){
    console.log("we will go to cox bazar this month")
}
else{
    console.log("we will go to tour next month")
}

 const isBcs = true;
 const salary = 20000;
 const hasCar = true;
 const height = 6;

 if((salary>20000 && hasCar==true)||(isBcs==true)){
console.log("its ok");
 }

 else{
    console.log("not ok");
 }


//  const age = 13;
//  const Price = 5000;
//  if(age<=12){
// console.log("eat free");
//  }
//  else if(age>=60){
//      const discount = price * 50 / 100;
//      const payAmount = price - discount;
//      console.log(payAmount)
//      }
//  else if(age>=40){
//      const discount = price * 40 / 100;
//      const payAmount = price - discount;
//      console.log(payAmount);
//      }

//      else{
//         console.log(price);
//      }

//      let price = 10000;
// if (price<=5000){
//     console.log("get it");
// }
// else if(price<=8000){
// const discount = price * 50 / 100;
// const payAmount = price - discount;
// console.log(payAmount)
// }
// else if(price>=10000){
// const discount = price * 20 / 100;
// const payAmount = price - discount;
// console.log(payAmount)
// }
// else{
//     console.log(price);
// }




let money =250;
const isModdhobitto=true;

if(money>300){
console.log("cholo movie dekhte jai");
}
else if(money>200){
console.log("cholo fuchka khete jai");
if((money>100) && (isModdhobitto==true)){
console.log("ekta dim siddho khaia boisa thak");
}
else{
    console.log("ek glass pani kha")
}
}
 else{
    if(money>0){
    console.log("tor jaoa lagbo na kothao");
    }
    else{
        console.log("tui amr sathe kotha bolis na")
    }
 }

//  money = money>300 ? "cholo movie dekhte jai" : money>200 ? (isModdhobitto ? "cholo fuchka khete jai \ ekta dim siddho khaia boisa thak" : "cholo fuchka khete jai \ ek glass pani kha") : (money>100 && isModdhobitto===true ? "ekta dim siddho khaia boisa thak" : (money>0 ? "tor jaoa lagbo na kothao": "tui amar sathe kotha bolis na"))
//  console.log(money);

//  money = money > 300
//   ? "cholo movie dekhte jai"
//   : money > 200
//     ? (isModdhobitto
//         ? "cholo fuchka khete jai\ekta dim siddho khaia boisa thak"
//         : "cholo fuchka khete jai\ek glass pani kha")
//     : (money > 100 && isModdhobitto
//         ? "ekta dim siddho khaia boisa thak"
//         : (money > 0
//             ? "tor jaoa lagbo na kothao"
//             : "tui amar sathe kotha bolis na"));
// console.log(money);


 const isLeader=false;
 let Price = 500;
//  if(isLeader===true){
//   Price=0;
//  }
//  else{
//     Price=Price+100;
//  }
//  console.log(Price);

 Price = isLeader === true ? 0 : Price + 100;
 console.log(Price);