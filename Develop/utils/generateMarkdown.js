// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import("myInfo.json")
console.log("reached it");
function renderLicenseBadge(license) {}

// put name of license itself int eh badge:
// avoid spaces and dots.
// Just use the link to set the name (MIT, ...)
// render the badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("data whatup",data);
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
