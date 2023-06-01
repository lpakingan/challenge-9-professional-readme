// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project name?',
    'What is your project description?',
    'What are the installation instructions?',
    'How do you use your project?',
    'Who are the contributors of the project?',
    'How do you test your project?',
    'Pick the license for your project:',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    const prompts = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contributors',
                message: questions[4]
            },
            {
                type: 'input',
                name: 'test',
                message: questions[5]
            },
            {
                type: 'checkbox',
                name: 'license',
                message: questions[6],
                choices: ['MIT', 'GPL', 'Creative Commons', 'Other', 'None']
            },
            {
                type: 'input',
                name: 'username',
                message: questions[7],
            },
            {                
                type: 'input',
                name: 'email',
                message: questions[8],
            }
        ])
    }
    return prompts();
}

// Function call to initialize app
init();
