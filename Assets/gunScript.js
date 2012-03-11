#pragma strict

function Start () {

}

function Update () {
	for (var touch in Input.touches) {
        if (touch.phase == TouchPhase.Began) {
            Debug.Log("Touch!");
            
            var ray : Ray = Camera.main.ScreenPointToRay(touch.position);
            var hit : RaycastHit;
            if (Physics.Raycast (ray, hit)){
            	if(hit.collider.gameObject.tag == "Target"){
            		Debug.Log("Hit!");
            		hit.collider.gameObject.SendMessage("Damage");
            	}
            }
        }
    }
}