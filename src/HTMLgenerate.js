const addManager = function (manager) {
    return `
    <div class="card employee-card mr-1 mt-3">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title bg-primary">{{ role }}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number:${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

const addIntern = function (intern) {
    return `
    <div class="card employee-card mr-1 mt-3">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title bg-primary">{{ role }}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">Office Number:${intern.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

const addEngineer = function (engineer) {
    return `
    <div class="card employee-card mr-1 mt-3">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title bg-primary">{{ role }}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Office Number:${engineer.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

HTMLgenerate = (data) => {

    
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = addManager(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Intern') {
            const internCard = addIntern(employee);

            pageArray.push(internCard);
        }
        if (role === 'Engineer') {
            const engineerCard = addEngineer(employee);

            pageArray.push(engineerCard);
        }

    
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}