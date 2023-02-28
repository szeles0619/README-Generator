// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${data.Title}
https://github.com/${data.Username}/${data.Title}

# Description
${data.Description}

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}

# Usage
In order to use this app, ${data.Usage}

# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# Contributing
​Contributors: ${data.Contributing}

# Tests
If you want to test it follow as below: ${data.Tests}

# Questions
If you have any questions about the repository or application do not hesitate to contact ${data.Username} directly at : ${data.Email}.
`;
}

module.exports = generateMarkdown;
