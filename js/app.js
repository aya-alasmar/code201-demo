'use strict'

var grade = 0;
var msgs=new Array();
var q =new Array(); // question
var answers =new Array(); // correct ansers
var uanswers= new Array(); // user answers

var unserAnswer6,unserAnswer7; // the answers fro 6th , 7th qeustions.
var msg6, msg7;  // 
var correctMsg=" "; // to enter the msg that will shows in alert if the user guess the number 
var colors = ["pink", "black", "white", "blue"]; // array for qeustion 7
var numIteration =new Array(); ; //array to store the user number input for qeustion 6 (at most length=4)
var colorIteration =new Array(); //array to store the user input for qeustion 7 (at most length=6)
var ranNum =Math.floor(Math.random() * 10);



//start of validation function to validate the y/n answers
function validation(uinput, msg) {
    while (uinput === '' || uinput === null || uinput === undefined || !(uinput.toLowerCase() === 'y' || uinput.toLowerCase() === 'n')) {
        uinput = prompt(msg);
        if (!(uinput.toLowerCase() === 'y' || uinput.toLowerCase() == 'n' )) {
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


// the questions
q[0]="My name is Ayat ? Y/N ";
q[1]="I was graduated form Zarqa University? Y/N ";
q[2]="I'm a programmer ? Y/N  ";
q[3]="I'm intrested in frontend ? Y/N ";
q[4]="I have 2 years work experience? Y/N";


// the coorect answers 
answers[0]='n';
answers[1]='y';
answers[2]='y';
answers[3]='y';
answers[4]='n';


// to ask the qestions 1-5 
for(var i=0 ;i<5;i++){
    uanswers[i]=validation(uanswers[i],q[i]);
    if (uanswers[i].toLowerCase() == answers[i].toLowerCase()) {
        grade++;
        msgs[i] = "correct";
        alert(" correct , keep going! ");
    
    }
    else {
        msgs[i]= "incorect";
        alert(" incorrect , don't worry! ");
    }
    console.log(q[i], uanswers[i], " it's " + msgs[i]);

}


// for question number 6
for (var i = 4; i > 0; i--) {
    unserAnswer6 = validationNum(unserAnswer6, "choose a random ineger number between 1-100 ^_^ , you still have "+ i +"  iteration ");
    if (parseInt(unserAnswer6) < ranNum) {
        msg6 = "too low!";
        numIteration.push(unserAnswer6);
        alert(msg6);
    }
    else if (parseInt(unserAnswer6) > ranNum) {
        msg6 = "too high!";
        numIteration.push(unserAnswer6);
        alert(msg6); 
    }
    else {
        msg6 = "correct ";
        grade++;
        correctMsg ="good job ,correct ! ";
        numIteration.push(unserAnswer6);
        break;
    }

}
alert ("the numbers you are already chosen "+numIteration.toString());
alert(correctMsg+" the random number is " + ranNum);
console.log(correctMsg," the random number is " , ranNum);

 

// for question number 7
for (var i = 6; i > 0; i--) {
    unserAnswer7 = validationColor(unserAnswer7, " guess one of my fav colors ! you still have "+ i +" iteration ");
    for (var j = 0; j < colors.length; j++) {
        if (unserAnswer7.toLowerCase() === colors[j]) {
           alert(" you are amazing ! correct " + colors[j] + " one of my fav colors !");
            grade++;
            break;
        }
    }
    if (unserAnswer7.toLowerCase() === colors[j]){
        colorIteration.push(unserAnswer7);
        break;
    }
    else{
        colorIteration.push(unserAnswer7);
        alert(" incorrect choose another color!");
    }

} 
alert("your color iteration : "+colorIteration.toString() + " and my fav colors are "+colors.toString());
console.log("your color iteration : ", colorIteration.toString() , " and my fav colors are " ,colors.toString());



alert(" your grade : " + grade); 