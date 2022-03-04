//create-site file
const createTeam = (team) => {
    console.log(team);
    const teamHTML = []


    //manager template
    const managerCard = manager => {
        console.log(manager);
        let managerHTML =
            `<!-- start of generated card -->
<div class="card m-4" style="width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    </div>
    <div class="card-body">
        <p class="card-text">ID: ${manager.id}</p>
        <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
        <p class="card-text">Office Number: ${manager.officeNumber}</p>
    </div>
</div>
<!-- end of generated card -->`
            ; html.push(managerHTML);
    }

    //engineer template
    const engineerCard = engineer => {
        console.log(engineer);
        let engineerHTML =
            `<!-- start of generated card -->
<div class="card m-4" style="width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    </div>
    <div class="card-body">
        <p class="card-text">ID: ${engineer.id}</p>
        <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
        <a href="https://github.com/${engineer.githubUser}" class="card-link">GitHub: ${engineer.githubUser}</a>
    </div>
</div>
<!-- end of generated card -->`
            ; html.push(engineerHTML);
    }

    //intern template
    const internCard = intern => {
        console.log(intern);
        let internHTML =
            `<!-- start of generated card -->
<div class="card m-4" style="width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    </div>
    <div class="card-body">
        <p class="card-text">ID: ${intern.id}</p>
        <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
        <p class="card-text">School: ${intern.school}</p>
    </div>
</div>
<!-- end of generated card -->
`; html.push(internHTML);
    }

    //loops through classes and creats HTML cards as populated by prompt
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            managerCard(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            engineerCard(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            internCard(team[i]);
        }
    }

    //joins the cards
    return html.join('');
}

//exports html card function into main page body
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css" />
    
    <title>Team Profile</title>
</head>
<body>
    <!-- header -->
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-text h2">
                My Team
            </span>
        </div>
    </nav>
    <!-- TEAM TEMPLATES POPULATE BELOW -->

    <main> ${createTeam(team)} </main>

    <!-- Bootstrap helper script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>   
</html>
`;
}



