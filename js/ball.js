class Ball {
	constructor() {
	this.pos = new THREE.Vector3();
	this.vel = new THREE.Vector3();
	this.force = new THREE.Vector3(0, -10, 0);
  }
  
	setPos(pos) {
	this.pos = pos;
 }
  
   getPos(){
		return this.pos;
   }
   
  update(dt) {
		this.pos.add(this.vel.clone().multiplyScalar(dt));
	this.vel.add(this.force.clone().multiplyScalar(dt));
	if(this.pos.y<0){
		this.pos.y =0;
		this.stopped = true;
	}
	}
  getIsStopped() {
	return this.stopped === true ? true:false;
  }
  start() {
		this.stopped =false;
	this.vel.set(cannon.getWorldPosition().x-turn.getWorldPosition().x,cannon.getWorldPosition().y-turn.getWorldPosition().y,cannon.getWorldPosition().z-turn.getWorldPosition().z).normalize().multiplyScalar(35);
	}
}