'use strict';
// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input

const prompt = inquirer.createPromptModule();

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your project installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project usage: ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter project contribution instructions: ',
    },
    {
        type: 'list',
        name:  'license',
        message: 'Select your project license',
        choices: ['MIT', 'GNU2'],
    },
]).then(answers => {

    // could add all the info into the template literal
    // repeat for other sections that will be at the TOC level

    console.log("afteranswers", answers);

    const data = generateMarkdown(answers)
    console.log("diditwork");
    console.log("aftermark",data);


    fs.writeFile(path.join(__dirname,'result', 'README.md'), data, err => {
        if (err) {
            console.error(err);
            return;
        }
        // file written successfully
        console.log("file written");
    });

}).catch(error => 'error occurred: ' + error.message);



// this covered under xxxx license
// it can be viewed at ./LICENSE
// big thing is to have a question on picking one of 4 licences

//GitHub username

// email

//TOC

