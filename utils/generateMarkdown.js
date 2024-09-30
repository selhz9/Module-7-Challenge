// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache') {
      return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GPL') {
      return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'BSD') {
      return 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
      return ''
  } else {
      return `## License
      This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderLicenseBadge(answers.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Contact Me](#contact-me)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributors
${answers.contributors}

## License
${answers.license}

## Questions
Feel free to reach out to me here with any questions or comments:
Email: ${answers.email}
GitHub: ${answers.github}

${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}
`;
}

export default generateMarkdown;
