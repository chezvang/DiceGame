//Dice Game

// function endGame(){
// let victoryCondition = false;
// }

// while(!victoryCondition){
// 	for(let i = 0; i < 5; i++){
// 		console.log("inside loop");
// 	}
// 	victoryCondition = true;
// }

// console.log("outside loop");
// ^ while loop for game ^

function startGame(){
	let coinDecision = prompt("Heads or Tails?");
	let coin;

	if (coinDecision === null || coinDecision === "") {
		coin = null;
		console.log("Please enter Heads or Tails.")
		alert("Please enter Heads or Tails.")
		startGame();
		return coin;
	}
	else if (coinDecision === "Heads"){
		coin = 1;
		console.log("You choose heads.");
		alert("You choose heads.");
		return coin;
	}
	else {
		coin = 2;
		console.log("You choose tails.");
		alert("You choose tails.");
		return coin;
	}
}

function coinToss(){
	let coin = startGame();
	let coinToss = Math.floor(Math.random() * 2 + 1);
	if (coin === coinToss) {
		console.log("The coin toss is heads. Player One, you start on offense.");
		alert("The coin toss is heads. Player One, you start on offense.");
		offensePlayer();
	}
	else {
		console.log("The coin toss is tails. Player One, you start on offense anyway.");
		alert("The coin toss is tails. Player One, you start on offense anyway.");
		offensePlayer();
	}
}

function fourDice(){
	let fourRoll = Math.floor(Math.random() * 4 + 1);
	fourRoll = fourRoll * 10;
	return fourRoll;
}

function sixDice(){
	let sixRoll = Math.floor(Math.random() * 6 + 1);
	sixRoll = sixRoll * 10;
	return sixRoll;
}

function eightDice(){
	let eightRoll = Math.floor(Math.random() * 8 + 1);
	eightRoll = eightRoll * 10;
	return eightRoll;
}

function tenDice(){
	let tenRoll = Math.floor(Math.random() * 10 + 1);
	tenRoll = tenRoll * 10;
	return tenRoll;
}

function twelveDice(){
	let twelveRoll = Math.floor(Math.random() * 12 + 1);
	twelveRoll = twelveRoll * 10;
	return twelveRoll;
}

function twentyDice(){
	let twentyRoll = Math.floor(Math.random() * 20 + 1);
	twentyRoll = twentyRoll * 2;
	return twentyRoll;
}

//dice rolls ^^

function offenseSixRoll(){
	let offenseSix = sixDice();
	console.log("Attempt for " + offenseSix + " yards!");
	alert("Attempt for " + offenseSix + " yards!");
	offenseAttempt(offenseSix);
}

function offenseEightRoll(){
	let offenseEight = eightDice();
	console.log("Attempt for " + offenseEight + " yards!");
	alert("Attempt for " + offenseEight + " yards!");
	offenseAttempt(offenseEight);
}

function offenseTenRoll(){
	let offenseTen = tenDice();
	console.log("Attempt for " + offenseTen + " yards!");
	alert("Attempt for " + offenseTen + " yards!");
	offenseAttempt(offenseTen);
}

function offenseTwelveRoll(){
	let offenseTwelve = twelveDice();
	console.log("Attempt for " + offenseTwelve + " yards!");
	alert("Attempt for " + offenseTwelve + " yards!");
	offenseAttempt(offenseTwelve);
}

function offenseAttempt(yards){ //placeholder for current yards in O drive
	// let offenseYards = yards;
	// playResolution(offenseYards);
	// return offenseYards;
	let offenseHold = yards;
	defensePlayer(offenseHold);
	return offenseHold;
}

function defenseSixRoll(offenseHold){
	let defenseSix = sixDice();
	let offenseHolder = offenseHold;
	console.log("Block for " + defenseSix + " yards!");
	alert("Block for " + defenseSix + " yards!");
	defenseAttempt(defenseSix, offenseHold);
}

function defenseEightRoll(offenseHold){
	let defenseEight = eightDice();
	let offenseHolder = offenseHold;
	console.log("Block for " + defenseEight + " yards!");
	alert("Block for " + defenseEight + " yards!");
	defenseAttempt(defenseEight, offenseHold);
}

function defenseTenRoll(offenseHold){
	let defenseTen = tenDice();
	let offenseHolder = offenseHold;
	console.log("Block for " + defenseTen + " yards!");
	alert("Block for " + defenseTen + " yards!");
	defenseAttempt(defenseTen, offenseHold);
}

function defenseTwelveRoll(offenseHold){
	let defenseTwelve = twelveDice();
	let offenseHolder = offenseHold;
	console.log("Block for " + defenseTwelve + " yards!");
	alert("Block for " + defenseTwelve + " yards!");
	defenseAttempt(defenseTwelve, offenseHold);
}

function defenseAttempt(yards, offenseHold){ //placeholder for current defense yards
	let defenseYards = yards;
	let offenseHolder = offenseHold;
	playResolution(defenseYards, offenseHolder);
	return defenseYards;
}

function offensePlayer(){
	let option;

	console.log("Rolling for Play.");
	alert("Rolling for option.");
	option = fourDice();
	switch(option){
		case 2:
			console.log("Roll is 2: Short Pass");
			alert("Roll is 2: Short Pass");
			offenseEightRoll();
			break;
		case 3:
			console.log("Roll is a 3: Long Rush");
			alert("Roll is a 3: Long Rush");
			offenseTenRoll();
			break;
		case 4:
			console.log("Roll is a 4: Long Pass");
			alert("Roll is a 4: Long Pass");
			offenseTwelveRoll();
			break;
		default:
			console.log("Roll is a 1: Short Rush");
			alert("Roll is a 1: Short Rush");
			offenseSixRoll();
			break;
	}
}

function defensePlayer(offenseHold){
	let option;
	let offensePlaceHold = offenseHold 

	option = fourDice();
	switch(option){
		case 2:
			// alert("Short pass coverage.");
			// console.log("Get ready for a short pass coverage.");
			console.log("Opponent rolls 2: Short Pass Cover");
			defenseEightRoll(offensePlaceHold);
			break;
		case 3:
			// alert("Long rush coverage.");
			// console.log("Get ready for a long rush coverage.");
			console.log("Opponent rolls a 3: Long Rush Cover");
			defenseTenRoll(offensePlaceHold);
			break;
		case 4:
			// alert("Long pass coverage.");
			// console.log("Get ready for a long pass coverage.");
			console.log("Opponent rolls a 4: Long Pass Cover");
			defenseTwelveRoll(offensePlaceHold);
			break;
		default:
			// alert("Short rush coverage.");
			// console.log("Get ready for a short rush coverage.");
			console.log("Opponent rolls a 1: Short Rush Cover");
			defenseSixRoll(offensePlaceHold);
			break;
	}
}

function playResolution(defenseHolder, offenseHolder){
	let totalYards;
	let offense = offenseHolder;//player
	let defense = defenseHolder; //cpu
	let fieldPosition = 20;

	totalYards = offense - defense;

	if(totalYards > 0){
		console.log("Total gain of " + totalYards + " yards!");
		alert("Total gain of " + totalYards + " yards!");
		fieldPosition = fieldPosition + totalYards;
		// playDownCheck(totalYards);
		// currentPosition(fieldPosition);
		touchDownCheck(fieldPosition);
		offensePlayer();
	}
	else if(totalYards < 0){
		console.log("Loss of " + totalYards + " yards!");
		alert("Loss of " + totalYards + " yards!");
		fieldPosition = totalYards + fieldPosition;
		// playDownCheck(totalYards);
		// currentPosition(fieldPosition);
		touchDownCheck(fieldPosition);
		offensePlayer();
	}
	else {
		fieldPosition = fieldPosition - 0
		console.log("No gain.");
		alert("No gain.")
		// playDownCheck(0);
		// currentPosition(fieldPosition);
		touchDownCheck(fieldPosition);
		offensePlayer();
	}
}

// function currentPosition(position){
// 	let currentPosition = position;

// 	console.log("You are at the " + currentPosition + " yard line.");
// 	return currentPosition;
// }

// function playDownCheck(position){
// 	let playDown = 1;
// 	let firstDownYards = 10;
// 	let yards = position;

// 	firstDownYards = firstDownYards - yards;

// 	if(firstDownYards <= 0){
// 		console.log("First Down!");
// 		firstDownYards = 10;
// 		playDown = 1;
// 		return (firstDownYards, playDown);
// 	}
// 	else {
// 		playDown ++;
// 		console.log("It's currently " + playDown + "nd Down.");
// 		return playDown;
// 	}
// 	return (firstDownYards, playDown);
// }

function touchDownCheck(position){
	let touchDown = 50;
	let current = position;
	let score = 0;

	touchDown = touchDown - current;
	console.log("You are at the " + touchDown + "yard line.");
	alert("You are at the " + touchDown + "yard line.");
	return touchDown;
	if(touchDown < 1){
		console.log("TOUCHDOWN!");
		alert("TOUCHDOWN!");
		score = 1;
		victoryCondition(score);
		touchDown = 50;
	}
}

// function puntBall(){

// }

function victoryCondition(score){
	let victory = score;

	if(victory = 1){
		endGame();
	}
	else {
		offensePlayer();
	}
}

function endGame(){
	alert("Yay, you win.");
}

coinToss();