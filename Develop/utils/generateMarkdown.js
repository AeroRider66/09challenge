// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if(license === 'MIT') {

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




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("markdown file", data);
  console.log("free title", data.title);
  console.log("free description", data.description);
  return `# ${data.title} ## ${data.description} finished

`;
}

module.exports = generateMarkdown;

