var enemy = 0;
var you = 0;
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
}
function showRock() {
	document.getElementById("youpic").src = "rock.jpg";
	document.getElementById("youpic").style.visibility = "visible";
}
function showPaper() {
	document.getElementById("youpic").src = "paper.jpg";
	document.getElementById("youpic").style.visibility = "visible";
}
function showScissors() {
	document.getElementById("youpic").src = "scissors.jpg";
	document.getElementById("youpic").style.visibility = "visible";
}
function removeRock() {
	document.getElementById("youpic").style.visibility = "hidden";
}
function removePaper() {
	document.getElementById("youpic").style.visibility = "hidden";
}
function removeScissors() {
	document.getElementById("youpic").style.visibility = "hidden";
}