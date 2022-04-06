let inquirer = require('inquirer');
const fs = require('fs');
// const theIndex = require('process');

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
            name: 'table of contents',
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
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'This will set  main as the default branch. Change the default name in your settings.'],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution?',
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
            choices: ['email', 'github'],
        },
    ])
    .then((data) => {
        const filename = `${data.name}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
