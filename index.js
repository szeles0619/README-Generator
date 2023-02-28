const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    message: "What's the title of the project?",
    name: "Title",
}, {
    type: "input",
    message: "Give some details about your project. (i.e. What was your motivation?, What problem does it solve?, Why did you build this project?)",
    name: "Description",
}, {
    type: "input",
    message: "Table of contents",
    name: "Table of contents",
}, {
    type: "input",
    message: "How can I install the application?",
    name: "Installation",
}, {
    type: "input",
    message: "How can I use the application?",
    name: "Usage",
}, {
    type: "input",
    message: "What license is being used?",
    name: "License",
    //choices: ['\tMIT', '\tGPL-3-0', '\tapache-2-0', '\tBSD-3-clause', '\tISC', '\t0bsd'],
}, {
    type: "input",
    message: "Contributors for your project",
    name: "Contributors",
}, {
    type: "input",
    message: "How can I test the application?",
    name: "Test",
}, {
    type: "input",
    message: "Who shall I contact with for inquires?",
    name: "Questions",
}, {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username",
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email",
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) { 
            return console.log(err);
        } else {
            console.log("success");
        }
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
