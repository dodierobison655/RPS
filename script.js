var enemy = 0;
var you = 0;
var enemypic = document.getElementById("enemypic");
var enemyopacity = 1;
var youpic = document.getElementById("youpic");
var youopacity = 1;
function rock() {
	document.getElementById("vs").style.visibility = "visible";
	var rand = Math.floor((Math.random() * 3));
	console.log(rand);
	document.getElementById("youpic").src = "rock.jpg";
    if(rand == 0){
		document.getElementById("enemypic").src = "rock.jpg";
		document.getElementById("result").style.color = "black";
		document.getElementById("result").innerHTML = "Draw, Try Again.";
	}
	if(rand == 1){
		document.getElementById("enemypic").src = "paper.jpg";
		document.getElementById("result").style.color = "red";
		document.getElementById("result").innerHTML = "Sorry, You Lose.";
		document.getElementById("ecounter").innerHTML = enemy+1;
		enemy += 1;
	}
	if(rand == 2){
		document.getElementById("enemypic").src = "scissors.jpg";
		document.getElementById("result").style.color = "green";
		document.getElementById("result").innerHTML = "Hey, You Win!";
		document.getElementById("ycounter").innerHTML = you+1;
		you += 1;
	}
	enemypic.style.opacity = 1;
	setTimeout(function(){
	var id = setInterval(fade, 50);
		function fade(){ 
			if(enemyopacity <= 0){
				clearInterval(id);
				enemyopacity = 1;
			} else {
				enemypic.style.opacity = enemyopacity - .05; 
				enemyopacity= enemypic.style.opacity;
			}
		}
	},1000);
}
function paper() {
	document.getElementById("vs").style.visibility = "visible";
	var rand = Math.floor((Math.random() * 3));
	document.getElementById("youpic").src = "paper.jpg";
	if(rand == 0){
		document.getElementById("enemypic").src = "rock.jpg";
		document.getElementById("result").style.color = "green";
		document.getElementById("result").innerHTML = "Hey, You Win!";
		document.getElementById("ycounter").innerHTML = you+1;
		you += 1;
	}
	if(rand == 1){
		document.getElementById("enemypic").src = "paper.jpg";
		document.getElementById("result").style.color = "black";
		document.getElementById("result").innerHTML = "Draw, Try Again."
	}
	if(rand == 2){
		document.getElementById("result").style.color = "red";
		document.getElementById("enemypic").src = "scissors.jpg";
		document.getElementById("result").innerHTML = "Sorry, You Lose.";
		document.getElementById("ecounter").innerHTML = enemy+1;
		enemy += 1;
	}
	enemypic.style.opacity = 1;
	setTimeout(function(){
	var id = setInterval(fade, 50);
		function fade(){ 
			if(enemyopacity <= 0){
				clearInterval(id);
				enemyopacity = 1;
			} else {
				enemypic.style.opacity = enemyopacity - .05; 
				enemyopacity= enemypic.style.opacity;
			}
		}
	},1000);
}
function scissors() {
	document.getElementById("vs").style.visibility = "visible";
	var rand = Math.floor((Math.random() * 3));
	document.getElementById("youpic").src = "scissors.jpg";
	if(rand == 0){
		document.getElementById("result").style.color = "red";
		document.getElementById("enemypic").src = "rock.jpg";
		document.getElementById("result").innerHTML = "Sorry, You Lose.";
		document.getElementById("ecounter").innerHTML = enemy+1;
		enemy += 1;
	}
	if(rand == 1){
		document.getElementById("result").style.color = "green";
		document.getElementById("enemypic").src = "paper.jpg";
		document.getElementById("result").innerHTML = "Hey, You Win!";
		document.getElementById("ycounter").innerHTML = you+1;
		you += 1;
	}
	if(rand == 2){
		document.getElementById("enemypic").src = "scissors.jpg";
		document.getElementById("result").style.color = "black";
		document.getElementById("result").innerHTML = "Draw, Try Again.";
	}
	enemypic.style.opacity = 1;
	setTimeout(function(){
	var id = setInterval(fade, 50);
		function fade(){ 			
			if(enemyopacity <= 0){
				clearInterval(id);
				enemyopacity = 1;
			} else {
				enemypic.style.opacity = enemyopacity - .05; 
				enemyopacity= enemypic.style.opacity;
			}
		}
	},1000);
}
function showRock() {
	document.getElementById("youpic").src = "rock.jpg";
}
function showPaper() {
	document.getElementById("youpic").src = "paper.jpg";
}
function showScissors() {
	document.getElementById("youpic").src = "scissors.jpg";
}
