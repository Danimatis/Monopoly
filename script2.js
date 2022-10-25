const players = [
  {
    name: "horse",
    image: "./images/monopoly-horse.png",
    position: null,
    money: null,
    properties: [],
    turn: 0,
    active: false,
    playerName: null,
  },
  {
    name: "dog",
    image: "./images/monopoly-dog.png",
    position: null,
    money: null,
    properties: [],
    turn: 0,
    active: false,
    playerName: null,
  },
  {
    name: "hat",
    image: "./images/monopoly-hat.png",
    position: null,
    money: null,
    properties: [],
    turn: 0,
    active: false,
    playerName: null,
  },
  {
    name: "boot",
    image: "./images/monopoly-boot.jpg",
    position: null,
    money: null,
    properties: [],
    turn: 0,
    active: false,
    playerName: null,
  },
  {
    name: "car",
    image: "./images/monopoly-car.png",
    position: null,
    money: null,
    properties: [],
    turn: 0,
    active: false,
    playerName: null,
  },
  {
    name: "train",
    image: "./images/monopoly-train.png",
    position: null,
    money: null,
    properties: [],
    turn: 0,
    active: false,
    playerName: null,
  },
];
const landingTiles = [
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
    type: "utility",
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
    type: "utility",
    price: 150,
    rent: 4,
    twoUtilities: 10,
    mortgageValue: 75,
    squareNumber: 13,
    owned: false,
    owner: "",
  },
  { name: "GO", type: "go", squareNumber: 1 },
  { name: "JAIL", type: "jail", squareNumber: 11 },
  { name: "FREE PARKING", type: "parking", squareNumber: 21, money: 500 },
  { name: "GO TO JAIL", type: "go to jail", squareNumber: 31 },
  { name: "Chance", type: "chance", squareNumber: 8 },
  { name: "Chance", type: "chance", squareNumber: 23 },
  { name: "Chance", type: "chance", squareNumber: 37 },
  { name: "Community Chest", type: "chest", squareNumber: 3 },
  { name: "Community Chest", type: "chest", squareNumber: 18 },
  { name: "Community Chest", type: "chest", squareNumber: 34 },
  {
    name: "Income Tax",
    type: "income tax",
    priceA: 200,
    priceB: -0.1,
    squareNumber: 5,
  },
  { name: "Luxury Tax", type: "luxury tax", price: 75, squareNumber: 39 },
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

function askForName() {
  let name = prompt("What's Your Name");
  return name;
}

function setNameOfPlayer(character) {
  for (const player of players) {
    if (character === player.name) {
      player.playerName = askForName();
    }
  }
  console.log(player.playerName);
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
  displayBoard.innerHTML = `<h1>It's ${player.playerName}'s Turn</h1>`;
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

function goToJail() {
  let player = findActivePlayer();
  let squarePosition = document.querySelector(
    `div[data-id="${player.position}"]`
  );
  let imageToRemove = document.querySelector(`img[src="${player.image}"]`);
  squarePosition.removeChild(imageToRemove);
  player.position = 11;
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
  for (const tile of landingTiles) {
    if (tile.squareNumber === player.position) {
      return tile;
    }
  }
}
function interactWithLandingSquare() {
  let tile = checkPropertyLandedOn();
  let player = findActivePlayer();
  if (tile.owned) {
    alert(`${player.playerName} owes ${tile.rent} to ${tile.owner}`);
    player.money = player.money - tile.rent;
    for (const player of activePlayers) {
      if (player.playerName === tile.owner) {
        player.money += tile.rent;
      }
    }
  } else if (confirm(`Do You Want To Buy ${tile.name}`)) {
    player.money = player.money - tile.price;
    tile.owned = true;
    tile.owner = player.playerName;
    player.properties.push(tile);
    console.log(player);
  }
}

function getAllPropertiesOfPlayer(player) {
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
  for (const player of activePlayers) {
    playerProperties.innerHTML += `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">
    ${player.playerName} <img src="${player.image}" alt="" />
    </h5>
    <h6>Money: $${player.money} </h6>
    <h6>Properties:</h6>
    ${getAllPropertiesOfPlayer(player)}
  </div>
</div>`;
  }
}

function findFreeParking() {
  for (const tile of landingTiles) {
    if (tile.name === "FREE PARKING") {
      return tile;
    }
  }
}
function process() {
  let tile = checkPropertyLandedOn();
  let player = findActivePlayer();
  if (tile.type === "chance") {
  } else if (tile.type === "chest") {
  } else if (tile.type === "go") {
    alert(`You Just Landed on GO, receive $400!!`);
    player.money += 400;
  } else if (tile.type === "go to jail") {
    alert(`Go Straight to Jail, Do NOT Pass GO, Do NOT Collect $200!`);
    goToJail();
  } else if (tile.type === "parking") {
    alert(`WOW, You Are Lucky, You get $${tile.money} From the Pot`);
    player.money += tile.money;
    tile.money = 500;
  } else if (tile.type === "jail") {
    alert("Just Visiting");
  } else if (tile.type === "luxury tax") {
    alert(`Landed on Luxury Tax, Pay to the Pot $75`);
    player.money -= 75;
    findFreeParking().money += 75;
  } else if (tile.type === "income tax") {
    if (
      confirm(
        `Landed on Income Tax, If You wish to Pay $200,  Click OK, If You Want to Pay 10% of Your Money, Click Cancel`
      )
    ) {
      player.money -= tile.priceA;
      alert(`You Paid $200`);
    } else {
      player.money += Math.floor(player.money * tile.priceB);
      alert(`You Paid $${-Math.floor(player.money * tile.priceB)}`);
    }
  } else if (tile.type === "utility") {
  } else if (tile.type === "railroad") {
    if (tile.owned) {
      alert(`${player.playerName} owes ${tile.rent} to ${tile.owner}`);
      player.money = player.money - tile.rent;
      for (const player of activePlayers) {
        if (player.playerName === tile.owner) {
          player.money += tile.rent;
        }
      }
    } else if (
      confirm(
        `You Just Landed On ${tile.name}. Do You Want To Buy ${tile.name}?`
      )
    ) {
      player.money = player.money - tile.price;
      tile.owned = true;
      tile.owner = player.playerName;
      player.properties.push(tile);
      console.log(player);
    }
  } else {
    if (tile.owned) {
      alert(`${player.playerName} owes ${tile.rent} to ${tile.owner}`);
      player.money = player.money - tile.rent;
      for (const player of activePlayers) {
        if (player.playerName === tile.owner) {
          player.money += tile.rent;
        }
      }
    } else if (confirm(`Do You Want To Buy ${tile.name}`)) {
      player.money = player.money - tile.price;
      tile.owned = true;
      tile.owner = player.playerName;
      player.properties.push(tile);
      console.log(player);
    }
  }
  renderPlayerCards();
}
function renderPlayerCards() {
  playerProperties.innerHTML = "";
  for (const player of activePlayers) {
    playerProperties.innerHTML += `<div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">
        ${player.playerName} <img src="${player.image}" alt="" />
        </h5>
        <h6>Money: $${player.money} </h6>
        <h6>Properties:</h6>
        ${getAllPropertiesOfPlayer(player)}
      </div>
    </div>`;
  }
}
displayBoard.addEventListener("click", function (e) {
  try {
    choosePlayer(e.target.closest("img[data-name]").dataset.name);
    removeCharacterFromPickList(
      e.target.closest("img[data-name]").dataset.name
    );
    setNameOfPlayer(e.target.closest("img[data-name]").dataset.name);
  } catch (error) {}
});

rollBtn.addEventListener("click", function () {
  let roll = rollDice();
  showRoll(roll);
  changePositionOfPlayer(roll);
  setTimeout(process, 500);
});

startBtn.addEventListener("click", () => {
  setArrayOfActivePlayers();
  removePlayersFromMiddleOfBoard();
  showActivePlayer(findActivePlayer());
  showPlayersProperties();
});
nextBtn.addEventListener("click", function () {
  nextPlayerTurn();
  showActivePlayer(findActivePlayer());
  resetDiceRoll();
});
