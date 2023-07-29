// TEAMS API
// const getTeamsEl = document.getElementById('get-teams');
const teamsTable = document.getElementById('table');
//  onclick, create select options by looping through api data.
const selectEl = document.querySelector('select');

const selectTeams = async () => {

    const url = `https://www.balldontlie.io/api/v1/teams`;
    const response = await fetch(url);
    const data = await response.json();
    const teamData = data.data;

    for(let team of teamData){
        const teamName = team.full_name
        if(selectEl.length === 31) return;
        else selectEl.options[selectEl.options.length] = new Option(teamName);
    }

    console.log("what team?", teamsTable.options[teamsTable.selectedIndex].text)
}

const getAllTeams = async () => {
    const table = document.getElementById('table');
    const row = table.insertRow(table.length);
    const abbreviation = row.insertCell(0);
    const city = row.insertCell(1);
    const conference = row.insertCell(2);
    const division = row.insertCell(3);
    const teamName = row.insertCell(4);

    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
  
const requestTeams = async () => {
    const url = `https://www.balldontlie.io/api/v1/teams`;
    const response = await fetch(url);
    const data = await response.json();
    const teamData = data.data;
    return teamData[0]
}

selectEl.addEventListener('onclick', selectTeams());
// getTeamsEl.addEventListener('onclick', getAllTeams());

