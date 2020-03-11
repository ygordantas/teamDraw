let teamOrange = [];
let teamBlue = [];

const BLUE = "\x1b[34m";
const ORANGE = "\x1b[31m";

let players = [
  "Gustavo Q",
  "Giancarlo",
  "Erik",
  "Rui",
  "Felipe Bonfim",
  "Rafael",
  "Pedro",
  "Atin",
  "Fred",
  "Jonatas",
  "Ygor",
  "Gustavo Melo"
];

function shuffle(arr) {
  let ctr = arr.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

function splitPlayersInTwoTeams() {
  teamOrange = players.slice(0, 6);
  teamBlue = players.slice(6);
}

function isTeamBalanced(team) {
  if (
    (team.includes("Gustavo Q") && team.includes("Pedro")) ||
    (team.includes("Jonatas") && team.includes("Fred"))
  ) {
    return false;
  }

  return true;
}

function displayTeam(team, color) {
  team.forEach(pl => console.log(color, pl));
  console.log("**------**");
}

function init() {
  do {
    shuffle(players);
    splitPlayersInTwoTeams();
  } while (!isTeamBalanced(teamBlue) || !isTeamBalanced(teamOrange));

  displayTeam(teamBlue, BLUE);
  displayTeam(teamOrange, ORANGE);
  console.log("\x1b[0m");
}

init();
