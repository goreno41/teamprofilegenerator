const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, employeeId, email, gitHub){

        super(name, employeeId, email);
        this.gitHub = gitHub;
    }

    getRole () {
        return "Engineer";
    }
}


module.exports= Engineer