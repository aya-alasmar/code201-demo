'use strict' 
function validation(uinput,msg){
    while(uinput === '' || uinput === null || uinput === undefined){
        uinput = prompt(msg);
    }
    return uinput;      
}

var username= validation(username,"please enter your name ");
//console.log('hello ' , username);
alert ("hello "+username);
document.write('<h1 style="color:black;font-size:30px;padding-top:20px;padding-left:450px;"> Welome '+ username +' in my wolrd!</h1> ');

