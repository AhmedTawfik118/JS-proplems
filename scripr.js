// var firstName = prompt("Enter your first name");
// var last = prompt("last your first name");
// if(firstName=="ahmed" && lastName=="tawfik")
// {
//     console.log("Hello " + firstName + " " + lastName);
// }
// else{
//     console.log("erreo");
// }



// var anything =prompt("enter anything");
// console.log(anything);



// var nam =prompt("enter numbar");
// if (nam%3==0 && nam%4==0) {
//     console.log("yes");
// }
// else {
//     console.log("no");
// }



// var nam1 = prompt("enter namber1");
// var nam2 = prompt("enter namber2");
// if (nam1>nam2) {
//     console.log(nam1);
// }
// else if (nam1<nam2)
// {
//     console.log(nam2);
// }
// else{
//     console.log(nam1);
// }




// var nam =prompt("enter the number")
// if (nam>0) {
//     console.log("positive");
// }
// else if (nam<0)
// {
//     console.log("negative");
// }
// else{
//     console.log("zero");
// }


// var size = 3;
// var max;
// var min;

// while (size > 0) {
//   var nam = parseInt(prompt("Enter a number:"));

//   if (size === 3) {
//     max = nam;
//     min = nam;
//   } else {
//     if (nam > max) {
//       max = nam;
//     }
//     if (nam < min) {
//       min = nam;
//     }
//   }
//   size--;
// }
// console.log("Max element = " + max);
// console.log("Min element = " + min);


// var nam = prompt("enter the number");
// if (nam%2==0) {
//     console.log("evvn");
// }
// else{
//     console.log("odd");
// }


// var letter = prompt("enter the Letter");
// if (letter=='A'||letter=='a'||letter=='E'||letter=='e'||letter=='I'||letter=='i'||letter=='O'||letter=='o'||letter=='U'||letter=='u') {
//     console.log("vowel");
// }
// else{
//     console.log("Consonant");
// }


// var nam =prompt("enter your number");
// for (var i = 1; i <=nam; i++) {
//    console.log(i + " ");  
// } 


// var nam = prompt("enter the namber");
// for (vars i = 1; i <= 12; i++) {
//     console.log(nam*i);   
// }


// var nam=prompt("enter the namber");
// for (var i = 2; i <= nam; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }   
// }


// var namber =prompt("enter tne namber");
// var power =prompt("enter tne power");
// console.log(namber**power);



// var sum = 0;
// for (var i = 1; i <=5; i++) {
//     var mark = Number(prompt ("enter the marks of subject "+i));
//     sum+=mark;
// }
// console.log("Total marks = " +sum);
// console.log("Average Marks = "+sum/5);
// console.log("Percentage = "+sum/5);


// var manth = prompt("enter number the manthe");
// if(manth==1||manth==3||manth==5||manth==7||manth==8||manth==10||manth==12){
//     console.log("Days in manth 31");
// }
// else if(manth==2){
//     console.log("28 days in normal years or 29 days in a leap year");
// }
// else if(manth==4||manth==6||manth==9||manth==11){
//     console.log("Days in manth 30");
// }
// else{
//     console.log("no manth in this namber");
// }


// var s=0;
// while (s!=5) {
//     if (s==0) {
//         var mark =prompt("enter your mark in Physics : ");
//     }
//     else if(s==1){
//         mark=prompt("enter your mark in Chemistry : ")
//     }
//     else if(s==2){
//         mark=prompt("enter your mark in Biology : ")
//     }
//     else if(s==3){
//         mark=prompt("enter your mark in Mathematics : ")
//     }
//     else if(s==4){
//         mark=prompt("enter your mark in Computer : ")
//     }
//     if (mark>100||mark<0) {
//         console.log("Enter the correct grade");
//         continue;
//     }
//     else if(mark>=90){
//         console.log("Grad A");
//         s++;
//     }
//     else if(mark>=80){
//         console.log("Grad B");
//         s++;
//     }
//     else if(mark>=70){
//         console.log("Grad C");
//         s++;
//     }
//     else if(mark>=60){
//         console.log("Grad D");
//         s++;
//     }
//     else if(mark>=40){
//         console.log("Grad E");
//         s++;
//     }
//     else if(mark<40){
//         console.log("Grad F");
//         s++;
//     }
// }