// get all players: https://www.balldontlie.io/api/v1/players
// get specific player: https://www.balldontlie.io/api/v1/players/<ID>

// TEAMS API
// const getTeamsEl = document.getElementById('get-teams');
const playersTable = document.getElementById('table');

//  onclick, create select options by looping through api data.
const datalistEl = document.getElementById('players');
const formEl = document.getElementById('selectPlayerForm');

const url = 'https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a269033e8emsh9ca0122b4dde6ccp1f154bjsn5f724c1f12b9',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const autocomplete = async (inp) => {
    let currentFocus;

    // execute function when someone writes in the text field
    inp.addEventListener("input", () => {
        let a, b, i, val = this.value;

        classAllLists();
        if(!val) return false;
        currentFocus = -1;

        // create div element that contains the items(values):

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a)

        for(i = 0; i < arr.length; i++)
    })
}

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
            const option = document.createElement('option');
            option.value = playerName;
            datalistEl.appendChild(option)
            console.log("option", option)
            // datalistEl.options[datalistEl.options.length] = new Option(playerName);
            // selectEl.options[selectEl.options.length].value = `${teamName}`;
        
        } 
    }

}

const generatePlayers = async () => {
    const response = await fetch(allPlayers);
    const data = await response.json();
    const playerData = data.data

    let listOfPlayers = []
    for(let player of playerData){
        listOfPlayers.push(player)
    }

    console.log(listOfPlayers)
}


console.log("generate: ", generatePlayers())