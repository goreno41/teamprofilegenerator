const addManager = function (manager) {
    return `
    <div class="card employee-card mr-1 mt-3">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title cardtext">Manager</h3>
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
            <h3 class="card-title cardtext">Intern</h3>
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
            <h3 class="card-title cardtext">Engineer</h3>
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

        if (role === "Manager") {
            const managerCard = addManager(employee);

            cardArray.push(managerCard);
        }
        if (role === "Intern") {
            const internCard = addIntern(employee);

            cardArray.push(internCard);
        }
        if (role === "Engineer") {
            const engineerCard = addEngineer(employee);

            cardArray.push(engineerCard);
        }

    
        
    }

    const employeeCards = cardArray.join('')

    
    const pageGenerate = teamPage(employeeCards); 
    return pageGenerate;

}

const teamPage = function (employeeCards) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <h1 class="header"> Team Profile </h1>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        <!--Team Cards-->
                        ${employeeCards}
                    </div>
                </div>
            </main>
            
        </body>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </html>
    `;
}

module.exports = HTMLgenerate;