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
    type: "property",
    color: "indigo",
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
    color: "indigo",
    type: "property",
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
    type: "property",
    color: "lightskyblue",
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
    color: "lightskyblue",
    type: "property",
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
    color: "lightskyblue",
    type: "property",
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
    type: "property",
    color: "purple",
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
    color: "purple",
    type: "property",
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
    color: "purple",
    type: "property",
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
    type: "property",
    color: "orange",
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
    color: "orange",
    type: "property",
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
    color: "orange",
    type: "property",
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
    type: "property",
    color: "red",
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
    color: "red",
    type: "property",
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
    color: "red",
    type: "property",
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
    type: "property",
    color: "yellow",
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
    color: "yellow",
    type: "property",
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
    color: "yellow",
    type: "property",
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
    type: "property",
    color: "green",
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
    color: "green",
    type: "property",
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
    color: "green",
    type: "property",
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
    type: "property",
    color: "blue",
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
    type: "property",
    color: "blue",
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
    color: "black",
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
    color: "black",
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
    color: "black",
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
    color: "black",
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
    color: "white",
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
    color: "white",
    price: 150,
    rent: 4,
    twoUtilities: 10,
    mortgageValue: 75,
    squareNumber: 29,
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
const chanceCards = [
  { name: "Advance to Boardwalk.", type: "move", positionToMove: 40 },
  { name: "Advance to GO (Collect $200)", type: "move", positionToMove: 1 },
  {
    name: "Go Straight to Jail, Do NOT Pass GO, Do NOT Collect $200!",
    type: "move",
    positionToMove: 11,
  },
  {
    name: "Advance to St. Charles Place. If You Pass Go Collect $200.",
    type: "move",
    positionToMove: 12,
  },
  {
    name: "Advance to Illinois Avenue. If You Pass Go Collect $200.",
    type: "move",
    positionToMove: 25,
  },
  {
    name: "Take a Trip to Reading Railroad. If You Pass GO Collect $200.",
    type: "move",
    positionToMove: 6,
  },
  {
    name: "Advance to Nearest Railroad.  If Unowned, You May Buy it from the Bank. If owned, Pay Owner Twice the Rental to Which They are Otherwise Entitled.",
    type: "moveToNearestRailroad",
  },
  {
    name: "Advance to Nearest Railroad.  If Unowned, You May Buy it from the Bank. If owned, Pay Owner Twice the Rental to Which They are Otherwise Entitled.",
    type: "moveToNearestRailroad",
  },
  {
    name: "Advance to Nearest Utility.  If Unowned, You May Buy it from the Bank. If owned, Throw Dice and Pay Owner a Total of Ten Times the Amount Rolled.",
    type: "moveToNearestUtility",
  },
  {
    name: "Bank Pays You Dividend of $50.",
    type: "receiveMoney",
    amountOfMoney: 50,
  },
  {
    name: "Your Building Loan Matures. Collect $150.",
    type: "receiveMoney",
    amountOfMoney: 150,
  },
  { name: "Get Out of Jail Free." },
  { name: "Move Back Three Spaces", type: "moveBack", squaresToMove: -3 },
  {
    name: "Make General Repairs on all Your playerProperties. For Each House Pay $25. For Each Hotel Pay $100.",
    type: "paymentOnHouses",
  },
  {
    name: "Speeding Fine $15.",
    type: "payment",
    amountOfMoney: 15,
  },
  {
    name: "You Have Been Elected Chairman of the displayBoard. Pay Each Player $50.",
    type: "paymentToPlayers",
    amountOfMoney: 50,
  },
];
const CommunityChestCards = [
  { name: "Advance to GO (Collect $200)", type: "move", positionToMove: 1 },
  {
    name: "Bank Error in Your Favor. Collect $200.",
    type: "receiveMoney",
    amountOfMoney: 200,
  },
  {
    name: "Doctor's Fee Pay $50.",
    type: "payment",
    amountOfMoney: 50,
  },
  {
    name: "From Sale of Stock You Get $50.",
    type: "receiveMoney",
    amountOfMoney: 50,
  },
  {
    name: "Holiday Fund Matures. Collect $100",
    type: "receiveMoney",
    amountOfMoney: 100,
  },
  { name: "Get Out of Jail Free." },
  {
    name: "Go Straight to Jail, Do NOT Pass GO, Do NOT Collect $200!",
    type: "move",
    positionToMove: 11,
  },
  {
    name: "Income Tax Refund. Collect $20.",
    type: "receiveMoney",
    amountOfMoney: 20,
  },
  {
    name: "It's Your Birthday. Collect $10 From Every Player",
    type: "receiveMoneyFromPlayers",
    amountOfMoney: 10,
  },
  {
    name: "Life Insurance Matures. Collect $100.",
    type: "receiveMoney",
    amountOfMoney: 100,
  },
  { name: "Pay Hospital Fees of $100", type: "payment", amountOfMoney: 100 },
  { name: "Pay School Fees of $50", type: "payment", amountOfMoney: 50 },
  {
    name: "Receive $25 as a Consultancy Fee",
    type: "receiveMoney",
    amountOfMoney: 25,
  },
  {
    name: "You are Assessed for Street Repair. For Each House Pay $40. For Each Hotel Pay $115.",
    type: "paymentOnHouses",
  },
  {
    name: "You Have Won Second Prize in a Beauty Contest. Collect $10",
    type: "receiveMoney",
    amountOfMoney: 10,
  },
  {
    name: "You Inherit $100",
    type: "receiveMoney",
    amountOfMoney: 100,
  },
];
const body = document.querySelector("body");
const goSquare = document.getElementById("corner-right-bottom");
const diceRollDisplay = document.getElementById("dice-roll-display");
const rollBtn = document.getElementById("roll-button");
const startBtn = document.getElementById("start-button");
const nextBtn = document.getElementById("next-button");
const displayBoard = document.querySelector(".display-of-current-player");
const currentPropertyDisplay = document.getElementById(
  "current-property-display"
);
const playerProperties = document.getElementById("player-properties");
const playerNameInput = document.getElementById("player-name-input");
const setPlayerNameBtn = document.getElementById("set-player-name-button");
const newGameBtn = document.getElementById("new-game-button");

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
  let rollA = Math.ceil(Math.random() * 6);
  let rollB = Math.ceil(Math.random() * 6);
  let roll = rollA + rollB;
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
function removePlayerFromPosition() {
  let player = findActivePlayer();
  let squarePosition = document.querySelector(
    `div[data-id="${player.position}"]`
  );
  let imageToRemove = document.querySelector(
    `.active-players[src="${player.image}"]`
  );
  try {
    squarePosition.removeChild(imageToRemove);
  } catch (error) {
    console.log(squarePosition);
  }
}
function changePositionOfPlayer(roll) {
  let player = findActivePlayer();
  removePlayerFromPosition();
  if (roll) {
    player.position += roll;
    if (player.position > 40) {
      player.position = player.position - 40;
      player.money += 200;
    }
  }
  movePlayer();
}

function movePlayer() {
  let player = findActivePlayer();
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

function getLastPlayerInArray() {
  return activePlayers[activePlayers.length - 1];
}

function showTileLandedOn(card) {
  let property = checkPropertyLandedOn();
  if (property.type === "railroad") {
    showRailroad();
  } else if (property.type === "utility") {
    showUtility();
  } else if (property.type === "property") {
    showRegularProperty();
  }
}
function showChanceCard(card) {
  console.log(card);
  let displayCard = `
<div class="card" style="width: 18rem; background-color: orange"">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Chance Card</h6>
    <p class="card-text">${card.name}.</p>

  </div>
</div>
`;
  currentPropertyDisplay.innerHTML = displayCard;
}
function showCommunityChestCard(card) {
  console.log(card);

  let displayCard = `
<div class="card" style="width: 18rem; background-color: yellow"">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Community Chest Card</h6>
    <p class="card-text">${card.name}.</p>

  </div>
</div>
`;
  currentPropertyDisplay.innerHTML = displayCard;
}
function showRegularProperty() {
  let property = checkPropertyLandedOn();
  let card = `
        <div class="card" style="width: 18rem;">
          <div class="card-header text-center" style="background:${property.color}; color:white" >
            ${property.name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Price $${property.price}</li>
            <li class="list-group-item">Rent $${property.rent}</li>
            <li class="list-group-item">With One House: $${property.oneHouse}</li>
            <li class="list-group-item">With Two Houses: $${property.twoHouses}</li>
            <li class="list-group-item">With Three Houses: $${property.threeHouses}</li>
            <li class="list-group-item">With Four Houses: $${property.fourHouses}</li>
            <li class="list-group-item">With Hotel: $${property.hotel}</li>
            <li class="list-group-item">To Buy a House Costs: $${property.buildingCosts} Per House</li>
            <li class="list-group-item">Mortgage: $${property.mortgageValue}</li>
          </ul>
        </div>
     `;
  currentPropertyDisplay.innerHTML = card;
}
function showRailroad() {
  let property = checkPropertyLandedOn();
  let card = `
  <div class="card" style="width: 18rem;">
    <div class="card-header text-center" style="background:${property.color}; color:white" >
      ${property.name}
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Price $${property.price}</li>
      <li class="list-group-item">Rent $${property.rent}</li>
      <li class="list-group-item">With Two Railroads Owned: $${property.twoRailroads}</li>
      <li class="list-group-item">With Three Railroads Owned: $${property.threeRailroads}</li>
      <li class="list-group-item">With Four Railroads Owned: $${property.fourRailroads}</li>
      <li class="list-group-item">Mortgage: $${property.mortgageValue}</li>
    </ul>
  </div>
`;
  currentPropertyDisplay.innerHTML = card;
}
function showUtility() {
  let property = checkPropertyLandedOn();
  let card = `
  <div class="card" style="width: 18rem;">
    <div class="card-header text-center" style="background:${property.color}; color:black" >
      ${property.name}
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Price $${property.price}</li>
      <li class="list-group-item">If One Utility is Owned Rent is ${property.rent} Times the Amount Rolled</li>
      <li class="list-group-item">If Both Utilities are Owned Rent is ${property.twoUtilities} Times the Amount Rolled</li>
     
      <li class="list-group-item">Mortgage: $${property.mortgageValue}</li>
    </ul>
  </div>
`;
  currentPropertyDisplay.innerHTML = card;
}
function resetPropertyLandedOn() {
  currentPropertyDisplay.innerHTML = "";
}
function getAllPropertiesOfPlayer(player) {
  let properties = `<ul>`;
  let propertyId = "a";
  if (player.properties) {
    for (const property of player.properties) {
      properties += `<li data-bs-toggle="modal" data-bs-target="#${propertyId}">${property.name} </li> 
      <div class="modal fade" id="${propertyId}" tabindex="-1" aria-labelledby="${propertyId}Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="card">
              <div class="card-header text-center" style="background:${property.color}; color:white" >
                ${property.name}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Rent $${property.rent}</li>
                <li class="list-group-item">With One House: $${property.oneHouse}</li>
                <li class="list-group-item">With Two Houses: $${property.twoHouses}</li>
                <li class="list-group-item">With Three Houses: $${property.threeHouses}</li>
                <li class="list-group-item">With Four Houses: $${property.fourHouses}</li>
                <li class="list-group-item">With Hotel: $${property.hotel}</li>
                <li class="list-group-item">To Buy a House Costs: $${property.buildingCosts} Per House</li>
                <li class="list-group-item">Mortgage: $${property.mortgageValue}</li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
      propertyId += 1;
    }
  }
  properties += `</ul>`;
  return properties;
}
function showPlayersProperties() {
  const player = findActivePlayer();
  displayBoard.innerHTML = `<div class="card" style="width: 18rem;">
     
  <div class="card-body">
    <h5 class="card-title">It's ${player.playerName} Turn<img src=${
    player.image
  }  alt=""></h5>
    
  </div>
  Money: $${player.money}<br>
  Properties:
  ${getAllPropertiesOfPlayer(player)}`;
}

function findFreeParking() {
  for (const tile of landingTiles) {
    if (tile.name === "FREE PARKING") {
      return tile;
    }
  }
}

function resetGame() {
  if (
    confirm(`  WARNING!!!!
  Are You Sure You Want to Reset The Game??????`)
  ) {
    document.location.reload();
  }
}
function pickCard(deck) {
  let cardIndex = Math.floor(Math.random() * deck.length);
  return cardIndex;
}
function chanceCardActivation(player) {
  let card = chanceCards[pickCard(chanceCards)];
  console.log(card);

  showChanceCard(card);
  alert(card.name);
  if (card.type === "move") {
    removePlayerFromPosition();
    if (
      (card.positionToMove < player.position && card.positionToMove !== 11) ||
      (card.positionToMove < player.position && card.positionToMove !== 1)
    ) {
      alert("You Passed Go Collect $200");
      player.money += 200;
    }
    player.position = card.positionToMove;
    movePlayer();
    process();
  } else if (card.type === "moveToNearestRailroad") {
    removePlayerFromPosition();
    let positionToMove = findNearestRailroadPosition(player);
    if (positionToMove < player.position) {
      alert("You Passed Go Collect $200");
      player.money += 200;
    }
    player.position = positionToMove;
    movePlayer();
    process();
  } else if (card.type === "moveToNearestUtility") {
    removePlayerFromPosition();
    let positionToMove = findNearestUtilityPosition(player);
    if (positionToMove < player.position) {
      alert("You Passed Go Collect $200");
      player.money += 200;
    }
    player.position = positionToMove;
    movePlayer();
    process();
  } else if (card.type === "receiveMoney") {
    player.money += card.amountOfMoney;
  } else if (card.type === "moveBack") {
    removePlayerFromPosition();
    player.position += card.squaresToMove;
    movePlayer();
    process();
  } else if (card.type === "paymentOnHouses") {
    let housesFee = findHousesOfPlayer(player) * 25;
    let hotelFee = findHotelsOfPlayer(player) * 100;
    let fine = housesFee + hotelFee;
    if (fine) {
      player.money -= fine;
    }
  } else if (card.type === "payment") {
    player.money += card.amountOfMoney;
  } else if (card.type === "paymentToPlayers") {
    for (const onePlayer of activePlayers) {
      onePlayer.money += 50;
      player.money -= 50;
    }
  } else if ((card.name = "Get Out of Jail Free.")) {
  }
}

function communityChestCardActivation(player) {
  let card = CommunityChestCards[pickCard(CommunityChestCards)];
  console.log(card);
  showCommunityChestCard(card);
  alert(card.name);
  if (card.type === "move") {
    removePlayerFromPosition();
    player.position = card.positionToMove;
    movePlayer();
    process();
  } else if (card.type === "receiveMoney") {
    player.money += card.amountOfMoney;
  } else if (card.type === "paymentOnHouses") {
    let housesFee = findHousesOfPlayer(player) * 40;
    let hotelFee = findHotelsOfPlayer(player) * 115;
    let fine = housesFee + hotelFee;
    if (fine) {
      player.money -= fine;
    }
    player.money -= fine;
  } else if (card.type === "payment") {
    player.money += card.amountOfMoney;
  } else if (card.type === "receiveMoneyFromPlayers") {
    for (const onePlayer of activePlayers) {
      onePlayer.money -= 10;
      player.money += 10;
    }
  } else if ((card.name = "Get Out of Jail Free.")) {
  }
}
function addHouse() {}
function addHotel() {}
function findHousesOfPlayer() {}
function findHotelsOfPlayer() {}

function findNearestRailroadPosition(player) {
  if (player.position > 26) {
    return 6;
  }
  for (const railroad of landingSquares) {
    if (railroad.squareNumber > player.position) {
      return railroad.squareNumber;
    }
  }
}
function findNearestUtilityPosition(player) {
  if (player.position > 29) {
    return 13;
  }
  for (const tile of landingSquares) {
    if (tile.type === "utility") {
      if (title.squareNumber > player.position) {
        return tile.squareNumber;
      }
    }
  }
}
function goToJail() {
  let player = findActivePlayer();
  let squarePosition = document.querySelector(
    `div[data-id="${player.position}"]`
  );
  let imageToRemove = document.querySelector(
    `.active-players[src="${player.image}"]`
  );

  squarePosition.removeChild(imageToRemove);
  player.position = 11;
  movePlayer();
}
function process() {
  let tile = checkPropertyLandedOn();
  let player = findActivePlayer();
  if (tile.type === "chance") {
    chanceCardActivation(player);
  } else if (tile.type === "chest") {
    communityChestCardActivation(player);
  } else if (tile.type === "go") {
    alert(`You Just Landed on GO, receive $400!!`);
    player.money += 200;
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
    if (tile.owned && tile.owner !== player.playerName) {
      alert(`${player.playerName} owes ${tile.rent} to ${tile.owner}`);
      player.money = player.money - tile.rent;
      for (const player of activePlayers) {
        if (player.playerName === tile.owner) {
          player.money += tile.rent;
        }
      }
    } else if (tile.owned && tile.owner === player.playerName) {
      alert("You Landed On Your Own Property, So Nothing Happens.");
    } else if (
      confirm(
        `You Just Landed On ${tile.name}. Do You Want To Buy It? The Cost is $${tile.price}`
      )
    ) {
      player.money = player.money - tile.price;
      tile.owned = true;
      tile.owner = player.playerName;
      player.properties.push(tile);
      console.log(player);
    }
  } else if (tile.type === "railroad") {
    if (tile.owned && tile.owner !== player.playerName) {
      alert(`${player.playerName} owes ${tile.rent} to ${tile.owner}`);
      player.money = player.money - tile.rent;
      for (const player of activePlayers) {
        if (player.playerName === tile.owner) {
          player.money += tile.rent;
        }
      }
    } else if (tile.owned && tile.owner === player.playerName) {
      alert("You Landed On Your Own Property, So Nothing Happens.");
    } else if (
      confirm(
        `You Just Landed On ${tile.name}. Do You Want To Buy It? The Cost is $${tile.price}`
      )
    ) {
      player.money = player.money - tile.price;
      tile.owned = true;
      tile.owner = player.playerName;
      player.properties.push(tile);
      console.log(player);
    }
  } else {
    if (tile.owned && tile.owner !== player.playerName) {
      alert(`${player.playerName} owes ${tile.rent} to ${tile.owner}`);
      player.money = player.money - tile.rent;
      for (const player of activePlayers) {
        if (player.playerName === tile.owner) {
          player.money += tile.rent;
        }
      }
    } else if (tile.owned && tile.owner === player.playerName) {
      alert("You Landed On Your Own Property, So Nothing Happens.");
    } else if (
      confirm(
        `You Just Landed On ${tile.name}. Do You Want To Buy It? The Cost is $${tile.price}`
      )
    ) {
      player.money = player.money - tile.price;
      tile.owned = true;
      tile.owner = player.playerName;
      player.properties.push(tile);
      console.log(player);
    }
  }
  showPlayersProperties();
}
displayBoard.addEventListener("click", function (e) {
  try {
    choosePlayer(e.target.closest("img[data-name]").dataset.name);
    removeCharacterFromPickList(
      e.target.closest("img[data-name]").dataset.name
    );
    setArrayOfActivePlayers();
  } catch (error) {}
});

rollBtn.addEventListener("click", function () {
  let roll = rollDice();
  resetPropertyLandedOn();
  showRoll(roll);
  changePositionOfPlayer(roll);
  showTileLandedOn();
  process();
});

startBtn.addEventListener("click", () => {
  setArrayOfActivePlayers();
  removePlayersFromMiddleOfBoard();
  showPlayersProperties();
  getLastPlayerInArray();
});
nextBtn.addEventListener("click", function () {
  nextPlayerTurn();
  showPlayersProperties();
  resetDiceRoll();
});

playerNameInput.addEventListener("input", function () {
  const player = getLastPlayerInArray();
  settNameOfPlayer(player);
});
newGameBtn.addEventListener("click", resetGame);
