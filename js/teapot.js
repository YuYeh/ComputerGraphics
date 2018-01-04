class Teapot {
	constructor(name) {
		this.angle = 0;
		this.life = 100;
		this.on = true;
		this.name = name;
		this.obj = this.makeTeapot(name);
	}

	getIsOn() {
		return this.on;
	}

	getNumber() {
		return this.name;
	}

	getAngle() {
		return this.angle;
	}

	getLife() {
		return this.life;
	}

	toggle() {
		this.on = !this.on;
		this.update();
	}

	update () {
		if(this.on && this.life > 0){
			if(this.life>75)
				this.angle += 0.07;
			else if (this.life>50)
				this.angle += 0.05;
			else if (this.life >25)
				this.angle += 0.03;
			else
				this.angle +=0.01;
			this.life  -= 0.2;
			this.mtl.uniforms.opacity.value -=0.002;
		}
	}
	makeTeapot(name) {
		let teapot = new THREE.Object3D();
		let teapotMaterial = new THREE.ShaderMaterial({
			uniforms: {
				lightpos: {type:'v3', value: new THREE.Vector3(0, 30, 20) },
				opacity:{type:'f', value: 1.0}
			},
			vertexShader: document.getElementById('myVertexShader').textContent,
			fragmentShader: document.getElementById('myFragmentShader').textContent
		});
		teapotMaterial.transparent = true;
		this.mtl = teapotMaterial;
		let jsonLoader = new THREE.JSONLoader();

		let url = 'https://raw.githubusercontent.com/jyunming-chen/tutsplus/master/models/teapot.json';
		jsonLoader.load(url, function(geometry, materials) {
			let jsonModel = new THREE.Mesh(geometry, teapotMaterial);

			let theTeapot = unitize (jsonModel, 50);
			theTeapot.name = name;
			teapot.add(theTeapot);
		});
		return teapot;
	}
}
