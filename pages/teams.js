// TEAMS API
const getTeamsEl = document.getElementById('get-teams');

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
}

const getAllTeams = async () => {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    
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

