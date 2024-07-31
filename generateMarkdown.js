const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badgeLink;
  let link;
  //'MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0'
  switch (data.license){
    case 'MIT':
      badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
      link = '(https://opensource.org/licenses/MIT)'
    break;
    case 'GNU GPLv3':
      badgeLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'
      link ='(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'Apache License 2.0':
      badgeLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0'
      link = 'https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'BSD 2-Clause "Simplified" License':
      badgeLink = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause'
      link = '(https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badgeLink = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause'
      link = '(https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Mozilla Public License 2.0':
      badgeLink = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0'
      link ='(https://opensource.org/licenses/MPL-2.0)'
      break;
    default :
      badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
      link ='(https://opensource.org/licenses/MIT)'
  }
  if (data.license) {
    return `${renderLicenseLink(data, link)} 
    [![License](${badgeLink})`
  } else return ''
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data, link) {
if (data.license) {
  return `${data.license}: [License]${link}`
} else {
  return ''
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    if (data.license){return `${renderLicenseBadge(data)}`}
    else return ''
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  

  // const data = readMeData[readMeData.length - 1]  
  return `
# ${data.fileName} 
${renderLicenseSection(data)}

## Description 
${data.description} 

## Table of Contents
- [Description](#Description) 
- [Installation](#installation)
- [Contact](#contact) 
- [Contributing](#contributing) 
- [License](#license) 

## Installation
${data.installation}

## Usage
${data.usage}

## Tests 

### Testing our project

${data.test}
## Questions

## Contact
- [GitHub](https://github.com/${data.github}) 
${data.email}


## License
This project was created using:<br>
${renderLicenseSection(data.license)}<br>
For more information about this license, click the above link to view the details of the license.
`;
}


module.exports = generateMarkdown;
