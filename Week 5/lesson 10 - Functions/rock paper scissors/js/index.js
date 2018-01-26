$(document).ready(function() {


$('#rock').click(selectRock);
$('#paper').click(selectPaper);
$('#scissors').click(selectScissors);


function selectRock () {
	var rock = "rock";
	console.log(rock);
	playGame();
}

function selectPaper () {
	var paper = "paper";
	playGame();
	// console.log(paper); 
}

function selectScissors () {
	var scissors = "scissors";
	playGame();
	// console.log(scissors);
}

var computerSelections = ["rock", "paper", "scissors"]; 
// console.log(computerSelections);

function randomSelect () { 
	var generateRandom = computerSelections[Math.floor(Math.random()*computerSelections.length)];
	return generateRandom;
};

function playGame () {

	if (selectRock) {
		randomSelect();
		console.log(randomSelect());
	}
}
});