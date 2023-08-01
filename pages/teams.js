// TEAMS API
// const getTeamsEl = document.getElementById('get-teams');
const teamsTable = document.getElementById('table');

//  onclick, create select options by looping through api data.
const selectEl = document.querySelector('select');
const formEl = document.getElementById('selectTeamForm');

// API link  
const url = `https://www.balldontlie.io/api/v1/teams`;

const selectTeams = async () => {

    const response = await fetch(url);
    const data = await response.json();
    const teamData = data.data;

    let choice;
    for(let team of teamData){
        const teamName = team.full_name
        if(selectEl.length === 31){
            return;
        } 
        else{
            selectEl.options[selectEl.options.length] = new Option(teamName);
            // selectEl.options[selectEl.options.length].value = `${teamName}`;
        } 
        choice = teamName;
    }

}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedOption = selectEl.value;

    if(selectedOption === "All Teams"){
        getAllTeams();
    } else {
        getTeam(selectedOption);
    }

})

const getAllTeams = async () => {

    for(let i = teamsTable.rows.length - 1; i > 0; i--){
        teamsTable.deleteRow(i);
    }

    const response = await fetch(url);
    const data = await response.json();
    const teamData = data.data;
    
    let team;

    for(let i = 0; i < 30; i++){
        const row = document.createElement("tr");
        team = Object.entries(teamData[i]);

        for(let j = 1; j < 6; j++){
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`${team[j][1]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table
        teamsTable.appendChild(row);
    }

}

const getTeam = async (selectedOption) => {

    
    for(let i = teamsTable.rows.length - 1; i > 0; i--){
        teamsTable.deleteRow(i);
    }

    const tbl = document.getElementById('table');

    const response = await fetch(url);
    const data = await response.json();
    const teamData = data.data;

    let team;

    for(let i = 0; i < 30; i++){
        const row = document.createElement("tr");
        if(selectedOption === teamData[i].full_name){
            team = Object.entries(teamData[i])
            for(let j = 1; j < 6; j++){
                const cell = document.createElement("td");
                const cellText = document.createTextNode(`${team[j][1]}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            
            }
            tbl.appendChild(row)
        }

    }
}

// selectEl.addEventListener('onclick', selectTeams());





// getTeamsEl.addEventListener('onclick', getAllTeams());

// get element ID of table
// const teamsTable = document.getElementById('table');
// add table row
// add table row data