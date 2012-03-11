#pragma strict

var speed : float = 10.0;
private var nextTime : float = 0.0;
var targetObject : GameObject;

function Start () {

}

function Update () {
	if(Time.time > nextTime){
		var x = Random.Range(-3, 4) * 30;
		var y = Random.Range(-2, 3) * 30;
		
		if(checkCollision(Vector3(x, y, transform.position.z))){
			//
		} else {
			var clone : GameObject = Instantiate(targetObject, Vector3(x, y, transform.position.z), transform.rotation);
			clone.transform.parent = transform;
			clone.transform.localScale = Vector3(1,1,1);
			nextTime = Time.time + speed;
		}
	}
}

private function checkCollision(checkPosition : Vector3) {
    var hitFlag = false;
    for (var collider in Physics.OverlapSphere(checkPosition, 1)) {
        if (collider.gameObject.tag == "Target") {
            hitFlag = true;
        }
    }
    return hitFlag;
}