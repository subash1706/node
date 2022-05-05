var readlineSync = require('readline-sync');
var username = readlineSync.question('May I have your name?');
console.log('Hi' + username + '!');

 var favfood = readlineSync.question('What is your favourite food?',{
     hideEchoBack:true, //the typad text on screen is hidden by * (default)
 });

 console.log('Oh, ' + username + ' loves ' + favfood + '!');
 console.log('After');