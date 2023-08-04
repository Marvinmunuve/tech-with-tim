const prompt = require("prompt-sync")()

console.log("welcome to the Upishi Halisi Quiz!")

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("when did you last Eat Pilau? ");
const correctAnswer1 = "last month";


if (answer1.toLowerCase() === correctAnswer1){
    console.log("you got it correct"); 
    correctAnswers++;
}
    else{
        console.log("you got it wrong..");     
    }

const answer2 = prompt("Do you love coconut curry?");
const correctAnswer2 = "yes";

if (answer2.toLowerCase() === correctAnswer2){
    console.log("you got it correct"); 
    correctAnswers++;
}
    else{
        console.log("you got it wrong..");     
    }

    const answer3 = prompt("Do you like  Spiced food?");
const correctAnswer3 = "yes";

if (answer3.toLowerCase() === correctAnswer3){
    console.log("you got it correct"); 
    correctAnswers++;
}
    else{
        console.log("you got it wrong..");     
    }
    const percent = Math.round ((correctAnswers / totalQuestions) *100);

    console.log("you got", correctAnswers, "questions correct!")
    console.log("your score", percent, "percent!");