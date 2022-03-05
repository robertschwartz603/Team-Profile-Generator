const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require("path");

//used for html file export:
//const Export_DIR = path.resolve(__dirname, "export")
//const exportPath = path.join(Export_DIR, "team.html");
const createSite = require('./src/create-site.js');

const team = [];

//prompted to enter the team manager’s name, employee ID, email address, and office number
const promptManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'what is your name? (Required)',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is your employee ID? (Required)',
            name: 'employeeId',
            validate: IdInput => {
                if (IdInput) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is your email address? (Required)',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is your office number? (Required)',
            name: 'officeNumber',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        team.push(manager);
        promptOptions();
    })
};

const promptOptions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: ['add engineer', 'add intern', 'complete team']
        }])
        .then(selectedOption => {
            if (selectedOption.menu == "add engineer") {
                promptEngineer();
            } else if (selectedOption.menu == "add intern") {
                promptIntern();
            } else if (buildTeam());
        });
};

const promptEngineer = () => {
    console.log(`
    ------------------
    ==================
    Enter an Engineer
    ==================
    ------------------ 
    `);
    return inquirer.prompt([
        {
            type: 'input',
            message: 'enter engineer name (Required)',
            name: 'name',
            validate: EngineerNameInput => {
                if (EngineerNameInput) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is the employee ID? (Required)',
            name: 'employeeId',
            validate: IdInput => {
                if (IdInput) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is their email address? (Required)',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is their Github username? (Required)',
            name: 'github',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        team.push(engineer);
        promptOptions();
    })
};

const promptIntern = () => {
    console.log(`
    ---------------
    ===============
    Enter an Intern
    ===============
    --------------- 
    `);
    return inquirer.prompt([
        {
            type: 'input',
            message: 'enter intern name (Required)',
            name: 'name',
            validate: InternNameInput => {
                if (InternNameInput) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is the employee ID? (Required)',
            name: 'employeeId',
            validate: IdInput => {
                if (IdInput) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is their email address? (Required)',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what is their school name? (Required)',
            name: 'school',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('this input is required');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        team.push(intern);
        promptOptions();
    })
};

const buildTeam = () => {
    console.log(`
    --------------
    ==============
    Team Complete!
    ==============
    -------------- 
    `);

    fs.writeFile('./src/index.html', createSite(team), (err) => err ? console.error(err) : console.log('Success!'));


}
//initiates prompt again
promptManager();
