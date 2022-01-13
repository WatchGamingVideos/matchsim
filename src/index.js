const teams = [
  {
    name: "Barcelona",
    image: "/src/assets/Barcelona.png",
    goals: 0,
    played: false,
  },
  {
    name: "R.Madrid",
    image: "/src/assets/Real Madrid.png",
    goals: 0,
    played: false,
  },
  {
    name: "Sevilla",
    image: "/src/assets/Sevilla.gif",
    goals: 0,
    played: false,
  },
  {
    name: "Real Betis",
    image: "/src/assets/Betis.gif",
    goals: 0,
    played: false,
  },
  {
    name: "R.Sociedad",
    image: "/src/assets/Real Sociedad.gif",
    goals: 0,
    played: false,
  },
  {
    name: "Valencia",
    image: "/src/assets/Valencia.gif",
    goals: 0,
    played: false,
  },
  {
    name: "Villareal",
    image: "/src/assets/Villarreal.gif",
    goals: 0,
    played: false,
  },
  {
    name: "Levante",
    image: "/src/assets/Levante.gif",
    goals: 0,
    played: false,
  },
  { name: "Celta", image: "/src/assets/Celta.gif", goals: 0, played: false },
  { name: "Cadiz", image: "/src/assets/Cadiz.gif", goals: 0, played: false },
];

const results = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];

const team_1 = document.querySelector("#team-1");
const team_2 = document.querySelector("#team-2");
const team_1Score = document.querySelector("#team-1-score");
const team_2Score = document.querySelector("#team-2-score");
const btn = document.querySelector("#button");
const results_Div = document.querySelector("#resultTable");
const team_1Image = document.querySelector("#team-1-image");
const team_2Image = document.querySelector("#team-2-image");

//Funcion elegir equipo
function getRandomTeam() {
  let team1 = teams.pop();
  let result = true;
  result = checkLength(teams + 2);
  if (!result) {
    console.error("no hay más");
  } else {
    return team1;
  }
}

//Funcion goles

function getRandomGoal(teams) {
  let result = checkLength(results);
  if (!result) {
    return;
  } else {
    let pos = Math.floor(Math.random() * results.length);
    teams.goals += results[pos];
    return results[pos];
  }
}

//Pinta los datos
function pintDate(team1, goals1, team2, goals2) {
  team_1.textContent = team1.name;
  team_2.textContent = team2.name;
  team_1Score.textContent = goals1;
  team_2Score.textContent = goals2;
  team_1Image.src = team1.image;
  team_2Image.src = team2.image;
}

/*function generateImg() {
  let img1Div = document.createElement("img");
  img1Div.src = team1.image;
  let img2Div = document.createElement("img");
  img2Div.src = team2.image;

  team_1Image.appendChild(img1Div);
  team_2Image.appendChild(img2Div);
}*/

function saveMatch(team1, goals1, team2, goals2) {
  let nextDiv = document.createElement("tr");
  let t1 = document.createElement("td");
  t1.textContent = team1.name;
  let t1Goals = document.createElement("td");
  t1Goals.textContent = goals1;
  let t2 = document.createElement("td");
  t2.textContent = team2.name;
  let t2Goals = document.createElement("td");
  t2Goals.textContent = goals2;
  nextDiv.appendChild(t1);
  nextDiv.appendChild(t1Goals);
  nextDiv.appendChild(t2);
  nextDiv.appendChild(t2Goals);
  results_Div.appendChild(nextDiv);
}

// Generar imágenes

//Comprueba si queda item
function checkLength(array) {
  if (array.length > 0) {
    return true;
  } else {
    return false;
  }
}

//Genera puntuacion
function generateMatch() {
  let team1 = getRandomTeam();
  let team2 = getRandomTeam();
  let goals1 = getRandomGoal(team1);
  let goals2 = getRandomGoal(team2);

  pintDate(team1, goals1, team2, goals2);
  saveMatch(team1, goals1, team2, goals2);

  let result = checkLength(teams);
  if (!result) {
    return;
  } else {
    //pintDate(team1, goals1, team2, goals2);
    //saveMatch(team1, goals1, team2, goals2);
  }
}

btn.addEventListener("click", generateMatch);
