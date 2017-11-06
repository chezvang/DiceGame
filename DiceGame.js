//Dice Game

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
		offensePlayer(20, 1, 10);
	}
	else {
		console.log("The coin toss is tails. Player One, you start on offense anyway.");
		alert("The coin toss is tails. Player One, you start on offense anyway.");
		offensePlayer(20, 1, 10);
	}
}

function fourDice(){
	let fourRoll = Math.floor(Math.random() * 4 + 1);
	return fourRoll;
}

function sixDice(){
	let sixRoll = Math.floor(Math.random() * 6 + 1);
	return sixRoll;
}

function eightDice(){
	let eightRoll = Math.floor(Math.random() * 8 + 1);
	return eightRoll;
}

function tenDice(){
	let tenRoll = Math.floor(Math.random() * 10 + 1);
	return tenRoll;
}

function twelveDice(){
	let twelveRoll = Math.floor(Math.random() * 12 + 1);
	return twelveRoll;
}

function twentyDice(){
	let twentyRoll = Math.floor(Math.random() * 20 + 1);
	return twentyRoll;
}

function offenseSixRoll(fieldData, currentDownData, firstDownChecker){
	let offenseSix = sixDice();
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Attempt for " + offenseSix + " yards!");
	alert("Attempt for " + offenseSix + " yards!");
	offenseAttempt(offenseSix, fieldPosition, currentDown, firstDownCheck);
}

function offenseEightRoll(fieldData, currentDownData, firstDownChecker){
	let offenseEight = eightDice();
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Attempt for " + offenseEight + " yards!");
	alert("Attempt for " + offenseEight + " yards!");
	offenseAttempt(offenseEight, fieldPosition, currentDown, firstDownCheck);
}

function offenseTenRoll(fieldData, currentDownData, firstDownChecker){
	let offenseTen = tenDice();
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Attempt for " + offenseTen + " yards!");
	alert("Attempt for " + offenseTen + " yards!");
	offenseAttempt(offenseTen, fieldPosition, currentDown, firstDownCheck);
}

function offenseTwelveRoll(fieldData, currentDownData, firstDownChecker){
	let offenseTwelve = twelveDice();
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Attempt for " + offenseTwelve + " yards!");
	alert("Attempt for " + offenseTwelve + " yards!");
	offenseAttempt(offenseTwelve, fieldPosition, currentDown, firstDownCheck);
}

function offenseAttempt(yards, fieldData, currentDownData, firstDownChecker){
	let offenseYards = yards;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	defensePlayer(offenseYards, fieldPosition, currentDown, firstDownCheck);
	return offenseYards;
}

function defenseSixRoll(offenseHold, fieldData, currentDownData, firstDownChecker){
	let defenseSix = sixDice();
	let offenseHolder = offenseHold;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Block for " + defenseSix + " yards!");
	alert("Block for " + defenseSix + " yards!");
	defenseAttempt(defenseSix, offenseHold, fieldData, currentDownData, firstDownChecker);
}

function defenseEightRoll(offenseHold, fieldData, currentDownData, firstDownChecker){
	let defenseEight = eightDice();
	let offenseHolder = offenseHold;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Block for " + defenseEight + " yards!");
	alert("Block for " + defenseEight + " yards!");
	defenseAttempt(defenseEight, offenseHold, fieldData, currentDownData, firstDownChecker);
}

function defenseTenRoll(offenseHold, fieldData, currentDownData, firstDownChecker){
	let defenseTen = tenDice();
	let offenseHolder = offenseHold;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Block for " + defenseTen + " yards!");
	alert("Block for " + defenseTen + " yards!");
	defenseAttempt(defenseTen, offenseHold, fieldData, currentDownData, firstDownChecker);
}

function defenseTwelveRoll(offenseHold, fieldData, currentDownData, firstDownChecker){
	let defenseTwelve = twelveDice();
	let offenseHolder = offenseHold;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	console.log("Block for " + defenseTwelve + " yards!");
	alert("Block for " + defenseTwelve + " yards!");
	defenseAttempt(defenseTwelve, offenseHold, fieldData, currentDownData, firstDownChecker);
}

function defenseAttempt(yards, offenseHold, fieldData, currentDownData, firstDownChecker){
	let defenseYards = yards;
	let offenseHolder = offenseHold;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	playResolution(defenseYards, offenseHolder, fieldData, currentDownData, firstDownChecker);
	return defenseYards;
}

function offensePlayer(fieldData, currentDownData, firstDownChecker){
	let option;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;

	console.log("Offense is starting at the " + fieldPosition + " yard line.");
	alert("Offense is starting at the " + fieldPosition + " yard line.");
	console.log("Current down: " + currentDown + ".");
	alert("Current down: " + currentDown);
	console.log("Offense has " + firstDownCheck + " yards to go until a 1st down.");
	alert("Offense has " + firstDownCheck + " yards to go until a 1st down.");
	
	option = fourDice();
	switch(option){
		case 2:
			console.log("Roll is 2: Short Pass");
			alert("Roll is 2: Short Pass");
			offenseEightRoll(fieldPosition, currentDown, firstDownCheck);
			break;
		case 3:
			console.log("Roll is a 3: Long Rush");
			alert("Roll is a 3: Long Rush");
			offenseTenRoll(fieldPosition, currentDown, firstDownCheck);
			break;
		case 4:
			console.log("Roll is a 4: Long Pass");
			alert("Roll is a 4: Long Pass");
			offenseTwelveRoll(fieldPosition, currentDown, firstDownCheck);
			break;
		default:
			console.log("Roll is a 1: Short Rush");
			alert("Roll is a 1: Short Rush");
			offenseSixRoll(fieldPosition, currentDown, firstDownCheck);
			break;
	}
}

function defensePlayer(offenseHold, fieldData, currentDownData, firstDownChecker){
	let option;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	let offensePlaceHold = offenseHold;

	option = fourDice();
	switch(option){
		case 2:
			console.log("Opponent rolls 2: Short Pass Cover");
			alert("Opponent rolls 2: Short Pass Cover");
			defenseEightRoll(offenseHold, fieldData, currentDownData, firstDownChecker);
			break;
		case 3:
			console.log("Opponent rolls a 3: Long Rush Cover");
			alert("Opponent rolls a 3: Long Rush Cover");
			defenseTenRoll(offenseHold, fieldData, currentDownData, firstDownChecker);
			break;
		case 4:
			console.log("Opponent rolls a 4: Long Pass Cover");
			alert("Opponent rolls a 4: Long Pass Cover");
			defenseTwelveRoll(offenseHold, fieldData, currentDownData, firstDownChecker);
			break;
		default:
			console.log("Opponent rolls a 1: Short Rush Cover");
			alert("Opponent rolls a 1: Short Rush Cover");
			defenseSixRoll(offenseHold, fieldData, currentDownData, firstDownChecker);
			break;
	}
}

function playResolution(defenseHolder, offenseHolder, fieldData, currentDownData, firstDownChecker){
	let totalYards;
	let offense = offenseHolder;
	let defense = defenseHolder;
	let fieldPosition = fieldData;
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;

	totalYards = offense - defense;

	if(totalYards > 0){
		console.log("Total gain of " + totalYards + " yards!");
		alert("Total gain of " + totalYards + " yards!");

		fieldPosition = currentPosition(fieldData, totalYards);
		currentDown = firstDownCalc(currentDown, firstDownCheck, totalYards);
		firstDownCheck = toFirstDown(currentDown, firstDownCheck, totalYards);
		touchDownCheck(fieldPosition);
	}
	else if(totalYards < 0){
		console.log("Loss of " + totalYards + " yards!");
		alert("Loss of " + totalYards + " yards!");
		
		fieldPosition = currentPosition(fieldData, totalYards);
		currentDown = firstDownCalc(currentDown, firstDownCheck, totalYards);
		firstDownCheck = toFirstDown(currentDown, firstDownCheck, totalYards);
		touchDownCheck(fieldPosition);
	}
	else {
		console.log("No gain.");
		alert("No gain.")
		
		fieldPosition = currentPosition(fieldData, totalYards);
		currentDown = firstDownCalc(firstDownCheck, totalYards);
		firstDownCheck = toFirstDown(currentDown, firstDownCheck, totalYards);
		touchDownCheck(fieldPosition);
	}
	offensePlayer(fieldPosition, currentDown, firstDownCheck);
}

function currentPosition(fieldData, resolutionYards){
	let currentPosition = fieldData;
	let yards = resolutionYards;

	currentPosition = currentPosition + yards;
	console.log("The Offense is at the " + currentPosition + " yard line.");
	alert("The Offense is at the " + currentPosition + " yard line.");
	return (currentPosition);
}

function toFirstDown(currentDownData, firstDownChecker, resolutionYards){
	let currentDown = currentDownData;
	let firstDownCheck = firstDownChecker;
	let yards = resolutionYards;

	if(yards > 0){
		firstDownCheck = firstDownCheck + yards;
	}
	else {
		firstDownCheck = yards + firstDownCheck;
	}

	if(firstDownCheck < 1){
		console.log("Offense converts a First Down!");
		alert("Offense converts a First Down!");
		firstDownCheck = 10;
		currentDown = 1;
		return (currentDown);
	}
	else {
		currentDown ++;
		console.log("It's currently " + currentDown + " Down.");
		alert("It's currently " + currentDown + " Down.");
		return (currentDown);
	}
}

function firstDownCalc(firstDownChecker, resolutionYards){
	let toFirst = firstDownChecker;	
	let yards = resolutionYards;
	let rollResult;

	if(toFirst > 3){
		let fieldGoalAttempt = prompt("Do you want to kick for the win?")

		if (fieldGoalAttempt === null || fieldGoalAttempt === "") {
			fieldGoalAttempt = null;
			console.log("You're going to kick it.")
			alert("You're going to kick it. Say yes.")
			toFirstDown();
			return fieldGoalAttempt;
		}
		else {
			fieldGoalAttempt = "Yes";
			console.log("You choose to kick.");
			alert("You choose to kick.");
			rollResult = twentyDice() * 80;
			console.log("Your kicker kicked for " + rollResult + " yards! What a leg!");
			alert("Your kicker kicked for " + rollResult + " yards! What a leg!")
			touchDownCheck(rollResult);
		}
	}
	else {
		toFirst++;
		return (toFirst);
	}
}

function touchDownCheck(fieldData){
	let currentPosition = fieldData;
	let touchDown;

	if(currentPosition >= 100){
		console.log("TOUCHDOWN!");
		alert("TOUCHDOWN!");
		currentPosition = 20;
		victoryCondition();
	}
	else {
		return currentPosition;
	}
}

function victoryCondition(){
	alert("Yay, you win. Exit to end game.");
	console.log("Yay, you win. The game will end now. Console log will show errors.");
	endGame();
}

// function endGame(){
// }

coinToss();