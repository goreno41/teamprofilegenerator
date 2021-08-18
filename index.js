const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const HTMLgenerate = require('./src/HTMLgenerate');

const teamArray = [];

//..team manager’s name, employee ID, email address, and office number

const teamManager = () => {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber"
      }
    

    ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager (name, id, email, officeNumber);
      teamArray.push(manager);
    })
        
} ;

const employeeAdd = () => {

    inquirer.prompt([

        {
          type: "list",
          name: "role",
          message: "What type of employee would you like to add?",
          choices: ['Intern', 'Engineer']
        },
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name",
          when: (input) => input.role === "Engineer"
        },
        {
          type: "input",
          message: "What is the engineer's employee ID?",
          name: "id",
          when: (input) => input.role === "Engineer"
        },
        {
          type: "input",
          message: "What is the engineer's email address?",
          name: "email",
          when: (input) => input.role === "Engineer"
        },
        {
          type: "input",
          message: "What is the engineer's GitHub username?",
          name: "gitHub",
          when: (input) => input.role === "Engineer"
        },
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name",
          when: (input) => input.role === "Intern"
        },
        {
          type: "input",
          message: "What is the intern's employee ID?",
          name: "id",
          when: (input) => input.role === "Intern"
        },
        {
          type: "input",
          message: "What is the intern's email address?",
          name: "email",
          when: (input) => input.role === "Intern"
        },
        {
          type: "input",
          message: "What is the intern's school?",
          name: "school",
          when: (input) => input.role === "Intern"
        },
        {
          type: "confirm",
          name: "addNewEmployee",
          message: "Do you have more team members to add?",
          default: false
        }
      
      ])

      .then(employeeInput => {
        let { name, id, email, role, gitHub, school, addNewEmployee } = employeeInput;
        let employee;


        if (role === "Intern") {
          employee = new Intern(name, employeeID, email, school);

        } else if (role === "Engineer") {
          employee = new Engineer(name, employeeID, email, gitHub);
        }
        teamArray.push(employee);

        if (addNewEmployee) {
          return employeeAdd(teamArray)
        } else {
          return teamArray;
        }
      
  })}



// const addIntern = () => {

//     inquirer.prompt([
//         {
//           type: "input",
//           message: "What is the intern's name?",
//           name: "name"
//         },
//         {
//           type: "input",
//           message: "What is the intern's employee ID?",
//           name: "employeeId"
//         },
//         {
//           type: "input",
//           message: "What is the intern's email address?",
//           name: "email"
//         },
//         {
//           type: "input",
//           message: "What is the intern's school?",
//           name: "school"
//         }
      
  
//       ])

//       .then(internInput => {
//         const { name, employeeID, email, school } = internInput;
//         const intern = new Intern(name, employeeID, email, school);
//         teamArray.push(intern);
        
//         buildTeam();
        
        
        
//   })}

// const buildTeam = () => {
//     inquirer.prompt([
//         {
//           type: "list",
//           message: "Choose an option:",
//           choices: [ "Add an engineer", "Add an intern", "Finish building my team"],
//           name: "initialChoice"
//         }
//       ]).then( resp => {
//         switch( resp.initialChoice ){
//           case "Add an engineer":
//             addEngineer();
//             break;
    
//           case "Add an intern":
//             addIntern();
//             break;
    
//           case "Finish building my team":
//             finishTeam();
//             break;
    
//           default:
//             break;
//         }
//       })
// }

const writeFile = data => {
  fs.writeFile('./public/index.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Your team profile has been successfully created! Please check out the index.html")
      }
  })
}; 

teamManager()
  .then(employeeAdd)
  .then(teamArray => {
    return HTMLgenerate(teamArray);
  })
  .then(HTMLpage => {
    return writeFile(HTMLpage);
  })
  .catch(err => {
    console.log(err);
  });