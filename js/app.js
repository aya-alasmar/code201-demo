'use strict'

var grade = 0;

function validation(uinput, msg) {
    while (uinput === '' || uinput === null || uinput === undefined || !(uinput.toLowerCase() === 'y' || uinput.toLowerCase() == 'n')) {
        uinput = prompt(msg);
        if (!(uinput.toLowerCase() === 'y' || uinput.toLowerCase() == 'n')) {
            alert("you can input Y / N only ");
        }       
    }
    return uinput;
}


var q1 = validation(q1, "My name is Ayat ? Y/N ");
if (q1.toLowerCase() === 'n' ) {
    grade++;
    var msg1 = "correct";
    alert(" correct , keep going! ");

}
else {
    msg1 = "incorect";
    alert(" incorrect , don't worry! ");
}
var q2 = validation(q2, "I was graduated form Zarqa University? Y/N ");
if (q2.toLowerCase() === 'y' ) {
    grade++;
    var msg2 = "correct";
    alert(" correct , keep going! ");
}
else {
    msg2 = "incorect";
    alert(" incorrect , don't worry! ");
}
var q3 = validation(q3, "I'm a programmer ? Y/N ");
if (q3.toLowerCase() === 'y') {
    grade++;
    var msg3 = "correct";
     alert(" correct , keep going! ");

}
else {
    msg3 = "incorect";
    alert(" incorrect , don't worry! ");
   
}
var q4 = validation(q4, "I'm intrested in frontend ? Y/N ");
if (q4.toLowerCase() === 'y') {
    grade++;
    var msg4 = "correct";
    alert(" correct , keep going! ");

}
else {
    msg4 = "incorect";
    alert(" incorrect , don't worry! ");
}
var q5 = validation(q5, "I have 2 years work experience? Y/N ");
if (q5.toLowerCase() === 'n') {
    grade++;
    var msg5 = "correct";
    alert(" correct , keep going! ");
}
else {
    msg5 = "incorect";
    alert(" incorrect , don't worry! ");
}




console.log("My name is Ayat ? you answered", q1, " it's " + msg1);
console.log("I was graduated form Zarqa University? you answered", q2, " it's " + msg2);
console.log("I'm a programmer ? you answered", q3, " it's " + msg3);
console.log("I'm intrested in frontend ? you answered", q4, " it's " + msg4);
console.log("I have 2 years work experience? you answered", q5, " it's " + msg5);
alert(" your grade : " + grade);