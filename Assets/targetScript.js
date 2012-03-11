#pragma strict

var boom : GameObject;
private var scoreObject : GameObject;

function Start () {
	scoreObject = GameObject.Find("Score");
	
}

function Update () {

}

function Damage (){
	Destroy(gameObject);
	var clone = Instantiate(boom, transform.position, Quaternion(0,0,0,0)) as GameObject;
	scoreObject.SendMessage("addScore", 100);
}