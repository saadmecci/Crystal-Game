$(document).ready(function() {

	userScore = 0;
	$("#userScore").html(userScore);

	var targetNumberChooser = function () {
		return Math.floor(Math.random()*(120-19+1)+19);
	};

	var targetNumber = targetNumberChooser();
	$("#targetNumber").html(targetNumber);

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

	var crystal1Number = crystal1NumberChooser();
	var crystal2Number = crystal2NumberChooser();
	var crystal3Number = crystal3NumberChooser();
	var crystal4Number = crystal4NumberChooser();

	$("#crystal1").on("click", function() {

		userScore += crystal1Number;

		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		$("#userScore").html(userScore);

	});

	$("#crystal2").on("click", function() {

		userScore += crystal2Number;

		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();		
		}

		if (userScore > targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		$("#userScore").html(userScore);

	});

	$("#crystal3").on("click", function() {

		userScore += crystal3Number;

		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		$("#userScore").html(userScore);
	});

	$("#crystal4").on("click", function() {

		userScore += crystal4Number;

		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			targetNumber = targetNumberChooser();
			$("#targetNumber").html(targetNumber);
			crystal1Number = crystal1NumberChooser();
			crystal2Number = crystal2NumberChooser();
			crystal3Number = crystal3NumberChooser();
			crystal4Number = crystal4NumberChooser();
		}

		$("#userScore").html(userScore);

	});

});
