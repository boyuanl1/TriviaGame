$("#start").on("click", function() {
	var t = 6;
	var right = 0;
	var wrong = 0;
	var miss = 0;
	var results = [];
	
	intervalId = setInterval(count, 1000);
	$("#questions").css({"display": "block"});
	$("#start").css({"display": "none"});
		

	
	
	function count() {	
		$("#timer").html("Time left: " + t + "s");
		t--;
		
		if (t == 0) {
			result()
		}
		
	}
	
$("#submit").on("click", result);

function result() {
	for (var i = 1; i < 6; i++) {
		
		results.push($("input[name=ans" + i + "]:checked").val());
	}
	console.log(results);
	
	for (var j = 0; j < results.length; j++) {
		if (results[j] == "r") {
			right++;
		}
		else if (results[j] == "w") {
			wrong++;
		}	
		else {
			miss++;
		}
	}

	clearInterval(intervalId);
	$(".container").html("result");
	console.log(right, wrong, miss);
}
	
});