$(document).ready(function() {

	//create variables to store wins and losses starting at 0
	var wins = 0;
	var losses = 0;

	//display variables on the html page
	$("#winCount").html(wins);
	$("#lossCount").html(losses);

	//this will be the score of the user as they click on the crystals; starts off at 0
	userScore = 0;
	$("#userScore").html(userScore);

	//function to generate a random target number between 19-120 that the user has to try to reach
	var targetNumberChooser = function () {
		return Math.floor(Math.random()*(120-19+1)+19);
	};

	//stores value of targetNumberChooser into a var
	var targetNumber = targetNumberChooser();
	//displays the random number on html page
	$("#targetNumber").html(targetNumber);

	//4 functions to generate random numbers between 1-12 for each crystal
	var crystal1NumberChooser = function() {
		return Math.floor(Math.random()*(12-1+1)+1);
	};
	var crystal2NumberChooser = function() {
		return Math.floor(Math.random()*(12-1+1)+1);
	};
	var crystal3NumberChooser = function() {
		return Math.floor(Math.random()*(12-1+1)+1);
	};
	var crystal4NumberChooser = function() {
		return Math.floor(Math.random()*(12-1+1)+1);
	};

	//stores the 4 random numbers into 4 different variables; 1 for each crystal
	var crystal1Number = crystal1NumberChooser();
	var crystal2Number = crystal2NumberChooser();
	var crystal3Number = crystal3NumberChooser();
	var crystal4Number = crystal4NumberChooser();

	//click function when 1st crystal is clicked
	$("#crystal1").on("click", function() {

		//add the random number generated from clicking on the crystal to the user score
		userScore += crystal1Number;
		$("#userScore").html(userScore);

		//if the user score equals the target number, count up the user's wins
		//reset the user score to "reset" the game
		//display the updated wins on the html page
		//rerun the random function of crystal 1,2,3 and 4 so they can change to a diff number
		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		//if the user score goes over the target number, count up user's losses
		//reset user score to "reset" the game
		//display updated losses on html page
		//rerun the random function of crystal 1,2,3 and 4 so they can change to a diff number
		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

	});

	//the same logic from above is followed for the next 3 click functions of crystals 2,3, and 4

	$("#crystal2").on("click", function() {

		userScore += crystal2Number;
		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();		
		}

		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

	});

	$("#crystal3").on("click", function() {

		userScore += crystal3Number;
		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

	});

	$("#crystal4").on("click", function() {

		userScore += crystal4Number;
		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

	});

});
