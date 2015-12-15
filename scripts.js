var charCount;
var value;
var str = ["Keep it up! You can do it", "Is that what you call writing!? I know you can do better!", "This is pathetic. Come on you can do better!", "Not there yet. Keep it up!"];

$(document).ready(function(){
	$('#input').change(function(){
		value = $('#input').val();
	});

	function loadStr(i) {
		return str[i];
	}

	function randStr() {
		return Math.floor(Math.random()*str.length);
	}

	function changeText(){
		if (charCount < value){
			$("#output").html(loadStr(randStr()));
		} else {
			return;
		}
	}

	var interval = window.setInterval(function(){
				changeText();
			}, 3000);
	window.clearInterval(interval);
			changeText();
			

	$('#comment').on("keyup", function(){
		charCount = $('#comment').val().length;
		$("#charCount").html(charCount);
		if (charCount < value){
			$("#charCount").css("color", "red");
			changeText();
		} else {
			$("#charCount").css("color", "green");	
			$('#output').html("Good Job!");
		}

	});
});