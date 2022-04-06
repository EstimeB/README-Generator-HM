const inquirer = require('inquirer');
const fs = require('fs');

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is the project's title?",
            },
            {
                type: 'input',
                name: 'description',
                message: "Describe the project",
            },
            {
                type: 'input',
                name: 'tableOfContents',
                message: 'Table of Contents?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Installation?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Usage?',
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Select a license',
                choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Contributing?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Test instructions?',
            },
            {
                type: 'list',
                name: 'questions',
                message: 'Contact information and instruction of how to be reached?',
                choices: {
                    email: {
                        type: 'input',
                    },
                    github: {
                        type: 'input',
                    },
                }
            },
        ])
        .then((data) => {
            console.log(data);
            const filename =
                `
# ${data.title} \r\n
## Description \r\n ${data.description} \r\n
## Table of Contents \r\n ${data.tableOfContents} \r\n
## Installation \r\n ${data.installation} \r\n
## Usage \r\n ${data.usage} \r\n
## License \r\n ${data.license} \r\n
## Contributing \r\n ${data.contributing} \r\n
## Tests \r\n ${data.tests} \r\n
## Questions \r\n ${data.questions} \r\n
            `;

            fs.writeFile('README.md', filename, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

init();