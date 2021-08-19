const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, employeeId, email, school){

        super(name, employeeId, email);
        this.school = school;
    }
    getRole () {
        return "Intern";
    }
}


module.exports= Intern;