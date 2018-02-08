$(document).ready(function(){
answers = new Object();
answers = []
$('.option').change(function(){
	var ans = ($(this).attr('value'))
	answers[answers.length] = ans
})
			
var item1 = document.getElementById('questions');
var totalQuestions = $('.questions').length;
var currentQuestion = 0;
$questions = $('.questions');
$questions.hide();
$($questions.get(currentQuestion)).fadeIn();
$('.option').click(function(){
	$($questions.get(currentQuestion)).fadeOut(function(){
		currentQuestion = currentQuestion + 1;
		if(currentQuestion === totalQuestions){
			//do stuff here
			sendArray(answers)
		}else{
			$($questions.get(currentQuestion)).fadeIn();
		}
		});
	});
});
			
			
function sendArray(answer){
	var string = answer; // What i want to pass to php
	console.log(string); 
	var mf = 1;
	var m = 0;
	var item;
	for (var i=0; i<string.length; i++)
	{
		for (var j=i; j<string.length; j++)
		{
			if (string[i] == string[j])
				m++;
			if (mf<m){
				mf=m; 
				item = string[i];
			}
		}
		m=0;
	}
	if(item === 0) { item = "M";}
	console.log(item+" ( " +mf +" times ) ") ;
	var x = document.createElement("IMG");
    x.setAttribute("src", "images/" + item + ".png");
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
	x.setAttribute("style", "{display: inline-block; vertical-align: middle; font-family: 'Harry Potter'; font-size:28px}");
	
	switch(item) {
		case "G":
			document.getElementById("result").innerHTML = "You are a Gryffindor!!! <br />";
    		$("#result").append(x);
			break;
		case "H":
			document.getElementById("result").innerHTML = "You are a Hufflepuff!!! <br />";
			$("#result").append(x);
			break;
		case "R":
			document.getElementById("result").innerHTML = "You are a Ravenclaw!!! <br />";
			$("#result").append(x);
			break;
		case "S":
			document.getElementById("result").innerHTML = "You are a Slytherin!!! <br />";
			$("#result").append(x);
			break;
		default:
			document.getElementById("result").innerHTML = "You are a Muggle!!! <br />";			
			$("#result").append(x);
			break;
	}
}	

