[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0);
# Professional README Generator

This application is designed to take user input and create a markdown file that has the user defined elements of a typical README.md file.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation

Prior to use of this program, the user must have installed node.js and npm inquirer.  Additionally, the user must have read/write access to the directory level (called 'Develop' in this app) and to the 'result' folder within the Develop folder.

## Usage

This app may be used by all levels of programmers, and requires that user start in the directory where the index.js file is located.  Run "node index.js".  User will be provided with a set of questions that must be answered to be included in the created README file.  
The answers to these questions use the generateMarkdown function provided by the 'utils/generateMarkdown.js' file to parse the data provided to the correct section for the creation of the markdown file.  The 'License' answer is used to lookup the badge for the selected license and provide is provided back for inclusion at the appropriate place in the markdown file.  Once all entries are processed into the appropiate location, resulting document is saved as a markdown file with the name of 'newREADME.md', and will be found in the '/result' folder of the root location.

## Contributing

Contributions to my bank account are always welcome, however for program contributions contact me at names below.

## Tests

Testing performed uses a 'wording.txt' file to provide easy access to random data/text for use in the demonstration of this application.

## License

Associated License is MIT

## Questions

#### Github Username: AeroRider66

#### Email Address: dave@gmail.com

