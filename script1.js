const players = [
  {
    name: "horse",
    image: "./images/monopoly-horse.png",
    position: null,
    money: null,
    properties: [],
    turn: null,
    active: false,
    playerName: null,
  },
  {
    name: "dog",
    image: "./images/monopoly-dog.png",
    position: null,
    money: null,
    properties: [],
    turn: null,
    active: false,
    playerName: null,
  },
  {
    name: "hat",
    image: "./images/monopoly-hat.png",
    position: null,
    money: null,
    properties: [],
    turn: null,
    active: false,
    playerName: null,
  },
  {
    name: "boot",
    image: "./images/monopoly-boot.jpg",
    position: null,
    money: null,
    properties: [],
    turn: null,
    active: false,
    playerName: null,
  },
  {
    name: "car",
    image: "./images/monopoly-car.png",
    position: null,
    money: null,
    properties: [],
    turn: null,
    active: false,
    playerName: null,
  },
  {
    name: "train",
    image: "./images/monopoly-train.png",
    position: null,
    money: null,
    properties: [],
    turn: null,
    active: false,
    playerName: null,
  },
];
const landingSquares = [
  {
    name: "Mediterranean Avenue",
    type: "purple",
    price: 60,
    rent: 2,
    oneHouse: 10,
    twoHouses: 30,
    threeHouses: 90,
    fourHouses: 160,
    hotel: 250,
    mortgageValue: 30,
    buildingCosts: 50,
    squareNumber: 2,
    owned: false,
    owner: "",
  },
  {
    name: "Baltic Avenue",
    type: "purple",
    price: 60,
    rent: 4,
    oneHouse: 20,
    twoHouses: 60,
    threeHouses: 180,
    fourHouses: 320,
    hotel: 450,
    mortgageValue: 30,
    buildingCosts: 50,
    squareNumber: 4,
    owned: false,
    owner: "",
  },
  {
    name: "Oriental Avenue",
    type: "light blue",
    price: 100,
    rent: 6,
    oneHouse: 30,
    twoHouses: 90,
    threeHouses: 270,
    fourHouses: 400,
    hotel: 550,
    mortgageValue: 50,
    buildingCosts: 50,
    squareNumber: 7,
    owned: false,
    owner: "",
  },
  {
    name: "Vermont Avenue",
    type: "light blue",
    price: 100,
    rent: 6,
    oneHouse: 30,
    twoHouses: 90,
    threeHouses: 270,
    fourHouses: 400,
    hotel: 550,
    mortgageValue: 50,
    buildingCosts: 50,
    squareNumber: 9,
    owned: false,
    owner: "",
  },
  {
    name: "Connecticut Avenue",
    type: "light blue",
    price: 120,
    rent: 8,
    oneHouse: 40,
    twoHouses: 100,
    threeHouses: 300,
    fourHouses: 450,
    hotel: 600,
    mortgageValue: 60,
    buildingCosts: 50,
    squareNumber: 10,
    owned: false,
    owner: "",
  },
  {
    name: "St. Charles Place",
    type: "light purple",
    price: 140,
    rent: 10,
    oneHouse: 50,
    twoHouses: 150,
    threeHouses: 450,
    fourHouses: 625,
    hotel: 750,
    mortgageValue: 70,
    buildingCosts: 100,
    squareNumber: 12,
    owned: false,
    owner: "",
  },
  {
    name: "States Avenue",
    type: "light purple",
    price: 140,
    rent: 10,
    oneHouse: 50,
    twoHouses: 150,
    threeHouses: 450,
    fourHouses: 625,
    hotel: 750,
    mortgageValue: 70,
    buildingCosts: 100,
    squareNumber: 14,
    owned: false,
    owner: "",
  },
  {
    name: "Virginia Avenue",
    type: "light purple",
    price: 160,
    rent: 12,
    oneHouse: 60,
    twoHouses: 180,
    threeHouses: 500,
    fourHouses: 700,
    hotel: 900,
    mortgageValue: 80,
    buildingCosts: 100,
    squareNumber: 15,
    owned: false,
    owner: "",
  },
  {
    name: "St. James Avenue",
    type: "orange",
    price: 180,
    rent: 14,
    oneHouse: 70,
    twoHouses: 200,
    threeHouses: 550,
    fourHouses: 750,
    hotel: 950,
    mortgageValue: 90,
    buildingCosts: 100,
    squareNumber: 17,
    owned: false,
    owner: "",
  },
  {
    name: "Tennessee Avenue",
    type: "orange",
    price: 180,
    rent: 14,
    oneHouse: 70,
    twoHouses: 200,
    threeHouses: 550,
    fourHouses: 750,
    hotel: 950,
    mortgageValue: 90,
    buildingCosts: 100,
    squareNumber: 19,
    owned: false,
    owner: "",
  },
  {
    name: "New York Avenue",
    type: "orange",
    price: 200,
    rent: 16,
    oneHouse: 80,
    twoHouses: 220,
    threeHouses: 600,
    fourHouses: 800,
    hotel: 1000,
    mortgageValue: 100,
    buildingCosts: 100,
    squareNumber: 20,
    owned: false,
    owner: "",
  },
  {
    name: "Kentucky Avenue",
    type: "red",
    price: 220,
    rent: 18,
    oneHouse: 90,
    twoHouses: 250,
    threeHouses: 700,
    fourHouses: 875,
    hotel: 1050,
    mortgageValue: 110,
    buildingCosts: 150,
    squareNumber: 22,
    owned: false,
    owner: "",
  },
  {
    name: "Indiana Avenue",
    type: "red",
    price: 220,
    rent: 18,
    oneHouse: 90,
    twoHouses: 250,
    threeHouses: 700,
    fourHouses: 875,
    hotel: 1050,
    mortgageValue: 110,
    buildingCosts: 150,
    squareNumber: 24,
    owned: false,
    owner: "",
  },
  {
    name: "Illinois Avenue",
    type: "red",
    price: 240,
    rent: 20,
    oneHouse: 100,
    twoHouses: 300,
    threeHouses: 750,
    fourHouses: 925,
    hotel: 1100,
    mortgageValue: 120,
    buildingCosts: 150,
    squareNumber: 25,
    owned: false,
    owner: "",
  },
  {
    name: "Atlantic Avenue",
    type: "yellow",
    price: 260,
    rent: 22,
    oneHouse: 110,
    twoHouses: 330,
    threeHouses: 800,
    fourHouses: 975,
    hotel: 1150,
    mortgageValue: 130,
    buildingCosts: 150,
    squareNumber: 27,
    owned: false,
    owner: "",
  },
  {
    name: "Ventnor Avenue",
    type: "yellow",
    price: 260,
    rent: 22,
    oneHouse: 110,
    twoHouses: 330,
    threeHouses: 800,
    fourHouses: 975,
    hotel: 1150,
    mortgageValue: 130,
    buildingCosts: 150,
    squareNumber: 28,
    owned: false,
    owner: "",
  },
  {
    name: "Marvin Gardens",
    type: "yellow",
    price: 280,
    rent: 24,
    oneHouse: 120,
    twoHouses: 360,
    threeHouses: 850,
    fourHouses: 1025,
    hotel: 1200,
    mortgageValue: 140,
    buildingCosts: 150,
    squareNumber: 30,
    owned: false,
    owner: "",
  },
  {
    name: "Pacific Avenue",
    type: "green",
    price: 300,
    rent: 26,
    oneHouse: 130,
    twoHouses: 390,
    threeHouses: 900,
    fourHouses: 1100,
    hotel: 1275,
    mortgageValue: 150,
    buildingCosts: 200,
    squareNumber: 32,
    owned: false,
    owner: "",
  },
  {
    name: "North Carolina Avenue",
    type: "green",
    price: 300,
    rent: 26,
    oneHouse: 130,
    twoHouses: 390,
    threeHouses: 900,
    fourHouses: 1100,
    hotel: 1275,
    mortgageValue: 150,
    buildingCosts: 200,
    squareNumber: 33,
    owned: false,
    owner: "",
  },
  {
    name: "Pennsylvania Avenue",
    type: "green",
    price: 320,
    rent: 28,
    oneHouse: 150,
    twoHouses: 450,
    threeHouses: 1000,
    fourHouses: 1200,
    hotel: 1400,
    mortgageValue: 160,
    buildingCosts: 200,
    squareNumber: 35,
    owned: false,
    owner: "",
  },
  {
    name: "Park Place",
    type: "blue",
    price: 350,
    rent: 35,
    oneHouse: 175,
    twoHouses: 500,
    threeHouses: 1100,
    fourHouses: 1300,
    hotel: 1500,
    mortgageValue: 175,
    buildingCosts: 200,
    squareNumber: 38,
    owned: false,
    owner: "",
  },
  {
    name: "Boardwalk",
    type: "blue",
    price: 400,
    rent: 50,
    oneHouse: 200,
    twoHouses: 600,
    threeHouses: 1400,
    fourHouses: 1700,
    hotel: 2000,
    mortgageValue: 200,
    buildingCosts: 200,
    squareNumber: 40,
    owned: false,
    owner: "",
  },
  {
    name: "Reading Railroad",
    type: "railroad",
    price: 200,
    rent: 25,
    twoRailroads: 50,
    threeRailroads: 100,
    fourRailroads: 200,
    mortgageValue: 100,
    squareNumber: 6,
    owned: false,
    owner: "",
  },
  {
    name: "Pennsylvania Railroad",
    type: "railroad",
    price: 200,
    rent: 25,
    twoRailroads: 50,
    threeRailroads: 100,
    fourRailroads: 200,
    mortgageValue: 100,
    squareNumber: 16,
    owned: false,
    owner: "",
  },
  {
    name: "B & O Railroad",
    type: "railroad",
    price: 200,
    rent: 25,
    twoRailroads: 50,
    threeRailroads: 100,
    fourRailroads: 200,
    mortgageValue: 100,
    squareNumber: 26,
    owned: false,
    owner: "",
  },
  {
    name: "ShortLine",
    type: "railroad",
    price: 200,
    rent: 25,
    twoRailroads: 50,
    threeRailroads: 100,
    fourRailroads: 200,
    mortgageValue: 100,
    squareNumber: 36,
    owned: false,
    owner: "",
  },
  {
    name: "Electric Company",
    type: "utilities",
    price: 150,
    rent: 4,
    twoUtilities: 10,
    mortgageValue: 75,
    squareNumber: 13,
    owned: false,
    owner: "",
  },
  {
    name: "Water Works ",
    type: "utilities",
    price: 150,
    rent: 4,
    twoUtilities: 10,
    mortgageValue: 75,
    squareNumber: 13,
    owned: false,
    owner: "",
  },
  { name: "GO", squareNumber: 1, owned: true },
  { name: "JAIL", squareNumber: 11, owned: true },
  { name: "FREE PARKING", squareNumber: 21, owned: true, money: null },
  { name: "GO TO JAIL", squareNumber: 31, owned: true },
  { name: "Chance", squareNumber: 8, owned: true },
  { name: "Chance", squareNumber: 23, owned: true },
  { name: "Chance", squareNumber: 37, owned: true },
  { name: "Community Chest", squareNumber: 3, owned: true },
  { name: "Community Chest", squareNumber: 18, owned: true },
  { name: "Community Chest", squareNumber: 34, owned: true },
  {
    name: "Income Tax",
    priceA: 0.1,
    priceB: 200,
    squareNumber: 5,
  },
  { name: "Luxury Tax", price: 75, squareNumber: 39 },
];
const body = document.querySelector("body");
const goSquare = document.getElementById("corner-right-bottom");
const diceRollDisplay = document.getElementById("dice-roll-display");
const rollBtn = document.getElementById("roll-button");
const startBtn = document.getElementById("start-button");
const nextBtn = document.getElementById("next-button");
const displayBoard = document.querySelector(".display-of-ongoing-events");
const showPropertyBtn = document.getElementById("show-players-properties");
const playerProperties = document.getElementById("player-properties");
const playerNameInput = document.getElementById("player-name-input");
const setPlayerNameBtn = document.getElementById("set-player-name-button");
let activePlayers = [];
let i = 1;
let activePlayer = {};

function choosePlayer(character) {
  for (const player of players) {
    if (player.name === character) {
      player.turn = i;
      player.position = 1;
      player.money = 1500;
      i++;
      placePlayer(player);
    }
    if (player.turn === 1) {
      activateTurn(player);
    }
  }
}

function placePlayer(player) {
  goSquare.innerHTML += `<img class="active-players" src=${player.image}></img>`;
}

function settNameOfPlayer(player) {
  player.playerName = playerNameInput.value;
}

function showRoll(roll) {
  diceRollDisplay.innerHTML = `Dice Roll: ${roll}`;
}

function rollDice() {
  let roll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
  return roll;
}
function resetDiceRoll() {
  diceRollDisplay.innerHTML = `Dice Roll: `;
}
function removeCharacterFromPickList(character) {
  const piece = document.querySelector(`img[data-name="${character}"]`);
  piece.style.display = "none";
}

function setArrayOfActivePlayers() {
  activePlayers = players
    .filter((player) => player.turn)
    .sort((a, b) => {
      if (a.turn < b.turn) {
        return -1;
      }
    });
}

function removePlayersFromMiddleOfBoard() {
  displayBoard.innerHTML = "";
}

function findActivePlayer() {
  for (const player of activePlayers) {
    if (player.active) {
      return player;
    }
  }
}
function activateTurn(player) {
  player.active = true;
}

function showActivePlayer(player) {
  displayBoard.innerHTML = `<h1>It's the ${player.name}'s Turn</h1>`;
}

function nextPlayerTurn() {
  const playersTurn = activePlayers.findIndex(
    (player) => player.active === true
  );
  if (playersTurn + 1 < activePlayers.length) {
    activePlayers[playersTurn].active = false;
    activePlayers[playersTurn + 1].active = true;
    console.log(activePlayers);
  } else {
    activePlayers[playersTurn].active = false;
    activePlayers[0].active = true;
    console.log(activePlayers);
  }
}

function changePositionOfPlayer(roll) {
  let player = findActivePlayer();
  let squarePosition = document.querySelector(
    `div[data-id="${player.position}"]`
  );
  let imageToRemove = document.querySelector(`img[src="${player.image}"]`);
  squarePosition.removeChild(imageToRemove);
  player.position += roll;
  if (player.position > 40) {
    player.position = player.position - 40;
  }
  movePlayer(player);
}

function movePlayer(player) {
  // let position = player.position;
  let squarePosition = document.querySelector(
    `div[data-id="${player.position}"]`
  );
  squarePosition.innerHTML += `<img class="active-players" src="${player.image}" ></img>`;
}

function checkPropertyLandedOn() {
  let player = findActivePlayer();
  for (const square of landingSquares) {
    if (square.squareNumber === player.position) {
      return square;
    }
  }
}
function interactWithLandingSquare() {
  let square = checkPropertyLandedOn();
  let player = findActivePlayer();
  if (square.owned) {
    player.money = player.money - square.rent;
  } else {
    player.money = player.money - square.price;
    square.owned = true;
    player.properties.push(square);
    console.log(player);
  }
}
function getLastPlayerInArray() {
  return activePlayers[activePlayers.length - 1];
}
function getAllPropertiesOfPlayer() {
  const player = findActivePlayer();
  let properties = "<ul>";
  if (player.properties) {
    for (const property of player.properties) {
      properties += `<li>${property.name}</li>`;
    }
  }
  properties += `</ul>`;
  return properties;
}
function showPlayersProperties() {
  const player = findActivePlayer();

  playerProperties.innerHTML = `<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="modal-title">${player.name}</h1>
      <img class="active-players" src= ${player.image}></img>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">Money: $${
      player.money
    } <br> Properties: ${getAllPropertiesOfPlayer()}</div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
    </div>
  </div>
</div>`;
}

displayBoard.addEventListener("click", function (e) {
  try {
    choosePlayer(e.target.closest("img[data-name]").dataset.name);
    removeCharacterFromPickList(
      e.target.closest("img[data-name]").dataset.name
    );
  } catch (error) {}
});

rollBtn.addEventListener("click", function () {
  let roll = rollDice();
  showRoll(roll);
  changePositionOfPlayer(roll);
  interactWithLandingSquare();
});

startBtn.addEventListener("click", () => {
  setArrayOfActivePlayers();
  removePlayersFromMiddleOfBoard();
  showActivePlayer(findActivePlayer());
  getLastPlayerInArray();
});
nextBtn.addEventListener("click", function () {
  nextPlayerTurn();
  showActivePlayer(findActivePlayer());
  resetDiceRoll();
});
showPropertyBtn.addEventListener("click", showPlayersProperties);

setPlayerNameBtn.addEventListener("click", function () {
  settNameOfPlayer(getLastPlayerInArray());
  console.log(activePlayers);
});
