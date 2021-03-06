// Global Variables
var answers = ["KarlFranz", "LeonardoMiragliano", "LordKroak", "LordSkrolk", "SlayerofKings", "2016"], 
 	data = $("input"), 
 	correctAnswers = 0, 
 	incorrectAnswers = 0, 
 	unanswrd = 0,
 	timer = 60;

// click start button to activate game
// refresh to restart
function startGame() {
	$(".data").css("display", "none");

    // for loop with the usual math statement
    // with an if else statement for correct and incorrect answers
	for (var i = 0; i < data.length; i++) {
		if (data[i].checked) {
			if (answers.indexOf(data[i].value) !== -1) {
				correctAnswers++;
			}

			else {
				incorrectAnswers++;
			}
		} 
	} 
	// variable
	var sum = correctAnswers + incorrectAnswers;

	// if statement
	if (sum !== 4) {
		unanswrd = 4 - sum; 

	}

	$(".correct").html("Correct Answers: " + correctAnswers);
	$(".incorrect").html("Incorrect Answers: " + incorrectAnswers);
	$(".unanswered").html("Unanswered: " + unanswrd );
	$(".sum p").addClass("stylish");
    
} 

// adding in a on click function to display answers and a timer
$(".start").on("click", function() {
	$(".start").css("display", "none");
	$(".data").css("display", "block");

	// fleshing out the start timer with decrementer
	var startTimer = setInterval(function() {
		timer--;
		
		// if else if statements
		if (timer > 59) {
			$(".timer").html("You have " + "00:" + timer + " remaining");
		}

		else if (timer <= 59) {
			$(".timer").html("You have " + "00:" + timer + " remaining");
		}

		if (timer <= 0) {
			clearInterval(startTimer); 
			startGame(); 

		}
	}, 60000); 

	$(".done").on("click", function() {
		clearInterval(startTimer); 
		startGame(); 
	});
}); 