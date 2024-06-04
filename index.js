// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'animal',
        message: 'What is your favorite animal'
    },
    {
        type: 'choices',
        name: 'color',
        message: 'Which of these colors is better?',
        choices: ['Purple', 'Orange', 'Green', 'Blue']
    }

];

// inquirer.prompt(questions)
//     .then(answers => {
//         console.log('Answers:', answers);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file has been created successfully.');
    });
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
