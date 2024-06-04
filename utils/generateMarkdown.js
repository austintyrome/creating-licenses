const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // Define a mapping of licenses to their badge URLs
    const licenseBadges = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      'BSD-3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
      'ISC': 'https://img.shields.io/badge/License-ISC-blue.svg',
      'MPL-2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
      'AGPL-3.0': 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
      // Add more licenses and badges as needed
    };
  
    // Return the badge URL if the license is found, otherwise return an empty string
    return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    try {
      // Read the README file
      const readmeContent = fs.readFileSync(filePath, 'utf-8');
      
      // Define a regular expression to find a license link
      const licenseLinkRegex = /\[.*?license.*?\]\((.*?)\)/i;
      const match = readmeContent.match(licenseLinkRegex);
      
      // If a match is found, return the license link, otherwise return an empty string
      return match ? match[1].trim() : '';
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    try {
      // Read the README file
      const readmeContent = fs.readFileSync(filePath, 'utf-8');
      
      // Define a regular expression to find the License section
      const licenseRegex = /## License[\s\S]*?(?=##|$)/i;
      const match = readmeContent.match(licenseRegex);
      
      // If a match is found, return the License section, otherwise return an empty string
      return match ? match[0].trim() : '';
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
      return '';
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
