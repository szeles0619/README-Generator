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
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

# Installation
${data.Installation}

# Usage
${data.Usage}

# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# Contributors
${data.Contributors}

# Tests
If you want to test it follow as below: ${data.Test}

# Questions
If you have any questions about the repository or application do not hesitate to contact ${data.Username} on GitHub or via email at : ${data.Email}.
`;
}

module.exports = generateMarkdown;
