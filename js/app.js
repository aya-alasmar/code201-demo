'use strict'

var grade = 0;
var msg1, msg2, msg3, msg4, msg5, msg6, msg7; //corectness nsg for each question
var q1,q2,q3,q4,q5,q6,q7; // the answers 
var correctMsg=" "; // to enter the msg that will shows in alert if the user guess the number 
var colors = ["pink", "black", "white", "blue"]; // array for qeustion 7
var numIteration =new Array(); ; //array to store the user number input for qeustion 6 (at most length=4)
var colorIteration =new Array(); //array to store the user input for qeustion 7 (at most length=6)



//start of validation function to validate the y/n answers
function validation(uinput, msg) {
    while (uinput === '' || uinput === null || uinput === undefined || !(uinput.toLowerCase() === 'y' || uinput.toLowerCase() === 'n' ||uinput.toLowerCase() === 'no'||uinput.toLowerCase() === 'yes')) {
        uinput = prompt(msg);
        if (!(uinput.toLowerCase() === 'y' || uinput.toLowerCase() == 'n' || uinput.toLowerCase() === 'no' || uinput.toLowerCase() === 'yes')) {
            alert("you can input Y / N or yes/no only ");
        }
    }
    return uinput;
}
// end of validation function

// start of validationNum function to validate number answers
function validationNum(uinput, msg) {
    uinput = prompt(msg);
    while (uinput === '' || isNaN(parseInt(uinput))) {
        uinput = prompt(msg);
        if (isNaN(parseInt(uinput)))
            alert("please enter an integer number 1,2,3,...");
    }
    return uinput;
}
//end of validationNum function


//start validationColor function to validate color form array colors 
function validationColor(uinput, msg) {
    uinput = prompt(msg);
    while (uinput === '' || uinput === undefined || uinput === null) {
        uinput = prompt(msg);
    }
    return uinput;
}
// end of validationColor function


//questions and answers
q1 = validation(q1, "My name is Ayat ? Y/N ");
if (q1.toLowerCase() === 'n' ||q1.toLowerCase() === 'no') {
    grade++;
    msg1 = "correct";
    alert(" correct , keep going! ");

}
else {
    msg1 = "incorect";
    alert(" incorrect , don't worry! ");
}



q2 = validation(q2, "I was graduated form Zarqa University? Y/N ");
if (q2.toLowerCase() === 'y' ||q2.toLowerCase() === 'yes') {
    grade++;
    msg2 = "correct";
    alert(" correct , keep going! ");
}
else {
    msg2 = "incorect";
    alert(" incorrect , don't worry! ");
}



q3 = validation(q3, "I'm a programmer ? Y/N ");
if (q3.toLowerCase() === 'y' ||q3.toLowerCase() === 'yes') {
    grade++;
    msg3 = "correct";
    alert(" correct , keep going! ");

}
else {
    msg3 = "incorect";
    alert(" incorrect , don't worry! ");

}



q4 = validation(q4, "I'm intrested in frontend ? Y/N ");
if (q4.toLowerCase() === 'y' || q4.toLowerCase() === 'yes') {
    grade++;
    msg4 = "correct";
    alert(" correct , keep going! ");

}
else {
    msg4 = "incorect";
    alert(" incorrect , don't worry! ");
}


 q5 = validation(q5, "I have 2 years work experience? Y/N ");
if (q5.toLowerCase() === 'n' || q5.toLowerCase() === 'no') {
    grade++;
    msg5 = "correct";
    alert(" correct , keep going! ");
}
else {
    msg5 = "incorect";
    alert(" incorrect , don't worry! ");
}



// for question number 6
for (var i = 4; i > 0; i--) {
    q6 = validationNum(q6, "guess my fav number  ^_^ , you still have "+ i +"  iteration ");
    if (parseInt(q6) < 8) {
        msg6 = "too low!";
        numIteration.push(q6);
        alert(msg6);
    }
    else if (parseInt(q6) > 8) {
        msg6 = "too high!";
        numIteration.push(q6);
        alert(msg6); 
    }
    else {
        msg6 = "correct ";
        grade++;
        correctMsg ="good job ,correct ! ";
        numIteration.push(q6);
        break;
    }

}
alert ("the numbers you are already chosen "+numIteration.toString());
alert(correctMsg+" my fav number is 8 *_*");

 

// for question number 7
for (var i = 6; i > 0; i--) {
    q7 = validationColor(q7, " guess one of my fav colors ! you still have "+ i +" iteration ");
    for (var j = 0; j < colors.length; j++) {
        if (q7.toLowerCase() === colors[j]) {
           alert(" you are amazing ! correct " + colors[j] + " one of my fav colors !");
            grade++;
            break;
        }
    }
    if (q7.toLowerCase() === colors[j]){
        colorIteration.push(q7);
        break;
    }
    else{
        colorIteration.push(q7);
        alert(" incorrect choose another color!");
    }

} 
alert("your color iteration : "+colorIteration.toString() + " and my fav colors are "+colors.toString());



// console screen
console.log("My name is Ayat ? you answered", q1, " it's " + msg1);
console.log("I was graduated form Zarqa University? you answered", q2, " it's " + msg2);
console.log("I'm a programmer ? you answered", q3, " it's " + msg3);
console.log("I'm intrested in frontend ? you answered", q4, " it's " + msg4);
console.log("I have 2 years work experience? you answered", q5, " it's " + msg5);
alert(" your grade : " + grade);