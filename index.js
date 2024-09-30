// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'; 

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your Project Title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Write steps required to install your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Write instructions and examples for how others can use your project.',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'List the contributors to your project here.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license do you want to choose?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data){
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile('README.md', generateMarkdown(answers));
  });
}

// Function call to initialize app
init();