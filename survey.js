const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  rl.question('What is your name?', (answer2) => {
    rl.question('What is your Fav colour?',(answer3) => {
      rl.question('What is your Fav Food?',(answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer1} ${answer2} ${answer3} ${answer4}`);
        rl.close();
      });
    });
  });
});
//rl.question('What do you think of Node.js? ', (answer) => {
//  console.log(`Thank you for your valuable feedback: ${answer}`);
//  rl.close();
//},
//rl.question('What is your name? ', (answer) => {
// console.log(`Thank you for your valuable feedback: ${answer}`);
//  rl.close();
//},
//rl.question('What is an activity you like doing? ', (answer) => {
//  console.log(`Thank you for your valuable feedback: ${answer}`);
//  rl.close();
//},
//rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
//  console.log(`Thank you for your valuable feedback: ${answer}`);
//  rl.close();
//}))));