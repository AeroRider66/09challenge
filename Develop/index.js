// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];
var prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description :',
    },
    {
        type: 'input',
        name: 'installation: ',
        message: 'Enter your project installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage: ',
        message: 'Enter your project usage: ',
    },
    {
        type: 'input',
        name: 'contributing: ',
        message: 'Enter project contribution instructions: ',
    },
    {
        type: 'input',
        name: 'installation: ',
        message: 'Enter your project installation instructions: ',
    },
    {
        type: 'list',
        name:  'license',
        message: 'Select your project license',
        choices: ['MIT', 'GNU2'],
    }
]).then(answers => {
    const markdownTemplate = `## Description
    `
    // could add all the info into the template literal

    const mine = `${answers.description}`

    // repeat for other sections that will be at the TOC level

    //console.log("answers: " + JSON.stringify(answers));
    console.log(`${answers.projectTitle}` + JSON.stringify(answers));
});

//generateMarkdown(prompt).then(answers => {})



// this covered under xxxx license
// it can be viewed at ./LICENSE
// big thing is to have a question on picking one of 4 licences

//GitHub username

// email

//TOC

