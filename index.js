// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "inpute",
        message: "Provide the email address of the contributers?",
        name: "email"
    },
    {
        type: "inpute",
        message: "Provide the contributers GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the coding assignment name?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of this coding assignment",
        name: "description"
    },
    {
        type: "input",
        message: "Provide the installation instructions required to initiate and run this coding assignment.",
        name: "installation",
        default: "npm init -y, npm i inquirer --save"
    },
    {
        type: "input",
        message: "Provide information on how to utilize this coding assignment.",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Which license(s) was/were used in this coding assignment?",
        name: "license",
        choices: [
                    "GNU General Public License v3.0", "MIT License", 
                    "Mozilla Public License v2.0", "Apache License 2.0", 
                    "Java Research License", "Aladdin Free Public License v9.0"
                 ]
    },
    {
        type: "input",
        message: "Provide a list of contributers to this coding assignment.",
        name: "contributers"
    },
    {
        type: "input",
        message: "Provide instructions for tests required in this coding assignment.",
        name: "tests"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err){
            console.error(err);
        } 
        else 
            console.log("You have successfully created a ReadME file!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
