#pragma strict

var score : int = 0;

function Start () {

}

function Update () {

}

function OnGUI(){
	guiText.text = "Score : " + score;
}

function addScore(s : int){
	score += s;
}