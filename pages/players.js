// get all players: https://www.balldontlie.io/api/v1/players
// get specific player: https://www.balldontlie.io/api/v1/players/<ID>

// TEAMS API
// const getTeamsEl = document.getElementById('get-teams');
const playersTable = document.getElementById('table');

//  onclick, create select options by looping through api data.
const datalistEl = document.getElementById('players');
const formEl = document.getElementById('selectPlayerForm');

const allPlayers = `https://www.balldontlie.io/api/v1/players`;

const selectPlayers = async () => {
    const response = await fetch(allPlayers);
    const data = await response.json();
    const playerData = data.data

    for(let player of playerData){
       
        const playerName = `${player.first_name} ${player.last_name}`


        if(datalistEl.length === 10){
            return;
        } 
        else{
            datalistEl.options[datalistEl.options.length] = new Option(playerName);
            // selectEl.options[selectEl.options.length].value = `${teamName}`;
            console.log(datalistEl)
        
        } 
    }

}