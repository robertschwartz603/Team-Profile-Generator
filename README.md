# Team Profile Generator

![GitHub](https://img.shields.io/github/license/robertschwartz603/Team-Profile-Generator)

## Description
This project required building a Node.js command-line app that takes input about employees on a development team and generates an HTML webpage with info cards for each person. Testing exists for each part of the code using Jest.

When prompted for team members and their information, then an HTML is generated that displays a nicely formatted team roster based on user input.

You can find a video walkthrough of this program here: 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Inquirer must then be installed by entering ```npm install inquirer```. Finally, the program can then be run by entering ```node develop/index.js``` into the command line, and answering each question appropriately.
 
## Usage
1. Enter management information

2. You will be directed to a menu, where you can choose to add an engineer, add an intern, or end the app.

3. If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose to end application

4. Once you end the application, your team will be generated in an HTML file

## License
This project and it's contents are licensed under: MIT

## Tests
This product has been tested with multiple imputs and various team options. a new html card will be rendered dynamically regardless of team size or content.

## Questions

Github: https://github.com/robertschwartz603

Email: robertschwartz603@gmail.com