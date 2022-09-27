const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let finalProfile = '';

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  finalProfile += `\rMy name is ${answer}\n`;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    finalProfile += `I like to ${answer}\n`;
    const activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      finalProfile += `I like to listen to ${answer} while I ${activity}\n`;
      rl.question('Which meal is your favorite? ', (answer) => {
        finalProfile += `My favorite meal of the day is definitely ${answer}\n`;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          finalProfile += `One of my favorite foods: ${answer}\n`;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            finalProfile += `I like to play ${answer}\n`;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              finalProfile += `I am the greatest at ${answer}\n`;
              rl.close();
            });
          });
        });
      });
    });
  });
});
rl.on('close', () => {
  console.log(`\n\nYour generated profile:\n\n\n ${finalProfile}\n\n You're gonna be a rockstar with this profile buddy`);
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

