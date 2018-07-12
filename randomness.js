//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
function randomNumber(){
const num = Math.random() * 22;
const numr = Math.floor(num);
console.log(numr);
}
function randomLetter(){
const letterIndx = Math.random() * 26;
const letterr = Math.floor(letterIndx);
console.log(alphabet.charAt(letterr));    
}
function randomFood(){
const foodIndx = Math.random() * 6;
const foodr = Math.floor(foodIndx);
console.log(foods[foodr]);        
}
function randomStudent(){
const studentIndx = Math.random() * 7;
const studentr = Math.floor(studentIndx);
console.log(students[studentr]);          
}
function randomGroup(){
let x = 0;
while(x < 3){
randomStudent();
x++;
}        
}

randomNumber();
randomLetter();
randomFood();
randomStudent();
randomGroup();