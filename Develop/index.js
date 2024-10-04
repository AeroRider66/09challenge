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
        message: 'Enter the title of your project: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project: ',
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
        message: 'Enter instructions for project contributions: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests and testing instructions for your project: ',
    },
    {
        type: 'list',
        name:  'license',
        message: 'Select your project license',
        choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause','IBM','Mozilla Public License 2.0', 'GNU GPL v3', 'WTFPL'],
    },
    {
        type: 'input',
        name:  'github',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name:  'email',
        message: 'Enter your email: ',
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

}).catch(error => console.error(error));



// this covered under xxxx license
// it can be viewed at ./LICENSE
// big thing is to have a question on picking one of 4 licences

//GitHub username

// email

//TOC

