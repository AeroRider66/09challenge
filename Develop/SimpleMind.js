
const inquirer = require('inquirer');
const fs = require('fs');

console.log("hello world");

var prompt = inquirer.createPromptModule();

prompt([{
    type: 'confirm',
    name: 'repeat_questions',
    message: 'Are you done?',
}, {
    type: 'confirm',
    name: 'dave_questions',
    message: 'Are you done?',
}]).then(answers => {
    console.log("answers: " + JSON.stringify(answers));
});