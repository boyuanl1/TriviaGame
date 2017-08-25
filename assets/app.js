var t = 60;
var right = 0;
var wrong = 0;
var miss = 0;
var results = [];
var count = 1;
var intervalId;
var questions = [
	["(1 of 5) Howard Saint is a villain that appears in which superhero movie?", "The Punisher", "Spider-Man 2", "Fantastic Four"], 
	["(2 of 5) Enemy of the State was released in which year?", "1998", "2002", "2004"], 
	["(3 of 5) The Louisiana Gator Boys appears in which movie?", "Blues Brothers 2000", "This is Spinal Tap", "Velvet Goldmine"], 
	["(4 of 5) What kind of animal is Maggie(Home on the Range)?", "cow", "sheep", "owl"], 
	["(5 of 5) In which of these James Bond movies a space shuttle is hijacked by Hugo Drax?", "Moonraker", "You Only Live Twice", "Goldeneye"]];


$("#start").on("click", function() {

	
	intervalId = setInterval(counter, 1000);
	$("#questions").css({"display": "block"});
	
	$("#start").css({"display": "none"});
			
	function counter() {	
		$("#timer").html("Time left: " + t + "s");
		t--;

		if (t == 0) {
			alert("Time is up!");
			result();
		}		
	}
	
$("#submit").on("click", function() {
	
	results.push($("input[name = ans]:checked").val());
	if (count == questions.length) {
		result();
	}
	else {
		$("#question").text(questions[count][0]);
		$("#a1").text(questions[count][1]);
		$("#a2").text(questions[count][2]);
		$("#a3").text(questions[count][3]);
		count++;
	}	
	
	$("input[name = ans]").prop("checked", false);
});

function result() {	
	
	for (var j = 0; j < results.length; j++) {
		if (results[j] == "r") {
			right++;
		}
		else if (results[j] == "w") {
			wrong++;
		}	
	}
	miss = questions.length - right - wrong;

	clearInterval(intervalId);
	$(".container").html("<div id = 'result'><h3>Result</h3><p>Right: " + right + "</p><p>Wrong: "+ wrong + "</p><p>Unanswered: " + miss + "</div>");
}
	
});