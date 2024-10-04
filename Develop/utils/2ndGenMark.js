// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

    function getOption(nameLicense) {
        selectElement = document.querySelector('#select1');
        output = selectElement.value;
        document.querySelector('.output').textContent = output;
    }


    if(license === 'MIT') {
        // let badge =
    }
}

// put name of license itself int eh badge:
// avoid spaces and dots.
// Just use the link to set the name (MIT, ...)
// render the badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// ## This is the introduction <a id="introduction"></a>

// Talk to Nigel
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // Ask Nigel - what would be better pass new const back or use the const to set a
    // value for the {data.license}
    const getLicense = data.license;


    console.log("extracted License",getLicense);


    console.log("markdown file");
    return `# ${data.title}
  
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)
  
## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}


## License

${data.license}

## Tests

${data.tests}

`;
}

module.exports = generateMarkdown;

