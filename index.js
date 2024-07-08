// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const colors = require('colors');
// TODO: Create an array of questions for user input
const readMeData = []
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What is then title of your readme?'
    },
    {
        type: 'input',
        name:'discription',
        message: 'What is a discreiption of your project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your program?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your program?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Input your github.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of these colors is better?',
        choices: ['BSD 3', 'None', 'APACHE 2.0', 'MIT']
    }

];


// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => err ? console.log(colors.red(err)) : console.log(colors.green('Your ReadMe was generated')))
  
  }

  function getData(){
    inquirer.prompt(questions).then((response) => {
      readMeData.push(response);
      writeToFile(readMeData);
    })
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }

// Function call to initialize app
init();
