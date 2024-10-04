'use strict';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// ## This is the introduction <a id="introduction"></a>

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    return `${renderLicenseBadge(data.license)};
# ${data.title}
  
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

## Tests

${data.tests}

## License

Associated License is ${data.license}

## Questions

#### Github Username: ${data.github}

#### Email Address: ${data.email}

`;
}

function renderLicenseBadge(getLicense) {
    let badge
    if (getLicense === 'MIT') {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (getLicense === 'Apache 2.0') {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (getLicense === 'BSD 3-Clause') {
        badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (getLicense === 'IBM') {
        badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (getLicense === 'Mozilla Public License 2.0') {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (getLicense === 'GNU GPL v3') {
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (getLicense === 'WTFP') {
        badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    } else {
        badge = " ";
    }

    return badge;
}

module.exports = generateMarkdown;
