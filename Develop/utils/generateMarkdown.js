// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if(license === 'MIT') {
    let badge =
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



// Talk to Nigel
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log("markdown file");
  return `# ${data.title}
  
${data.description}
  
## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## License
${data.license}

`;
}

module.exports = generateMarkdown;

