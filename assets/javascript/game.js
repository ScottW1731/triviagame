// Global Variables
var answers = ["Sleezy", "Scar", "Sabor", "Maurice", "Eugene Fitzherbert", "1994"], 
 	data = $("input"), 
 	correctAnswers = 0, 
 	incorrectAnswers = 0, 
 	unanswrd = 0,
 	timer = 60;

//click start button to activate game
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

    
} 

