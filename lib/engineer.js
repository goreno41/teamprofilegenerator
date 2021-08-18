const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, employeeId, email, gitHub){

        super(name, employeeId, email);
        this.gitHub = gitHub;
    }
}


module.exports= Engineer