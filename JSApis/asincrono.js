const teams = ["Liverpool", "Dortmund", "Chelsea"];

setTimeout(()=>console.log('Tarea asincrona'), 5000);

console.log('Sigue ejecutando');
console.log(teams);

function getTeams() {
    return teams
}

function asincGetTeams() {
    setTimeout(() => teams, 2000);
}

console.log(getTeams());
console.log('Final del código');

console.log(asincGetTeams());
console.log('Termina el llamado de función');


