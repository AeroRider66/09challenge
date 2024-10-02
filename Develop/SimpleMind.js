
const inquirer = require('inquirer');
const fs = require('fs');

console.log("hello world");

var prompt = inquirer.createPromptModule();

prompt([{
    type: 'input',
    name: 'repeat_questions',
    message: 'Anything you want',
}, {
    type: 'input',
    name: 'dave_questions',
    message: 'last chance',
}]).then(answers => {
    console.log("answers: " + JSON.stringify(answers));
});