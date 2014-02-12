// JavaScript Document

console.log("At threeApp.js");

function threeApp () {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
	directionalLight.position.set(-5, 4, 5);
	scene.add( directionalLight );
	
	var directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.1 );
	directionalLight2.position.set(5, 4, 5);
	scene.add( directionalLight2 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);
	
	var geometry = new THREE.CubeGeometry(2,2,2);
	
	var geo10 = new THREE.CubeGeometry(2,2,2);
	
	//var material = new THREE.MeshBasicMaterial( { color: 0xBABABA, wireframe:true } );
	
	var material = new THREE.MeshLambertMaterial( { color: 0xBABABA, shading: THREE.FlatShading} );
		
	var cubeContainer = new Object();
	
	var xC;
	var yC;
	var zC;
	
	var cubes2 = new THREE.Object3D();
	
	for (c=0; c<26; c++){
		cubeContainer["cube" + c] = new THREE.Mesh( geometry, material );
		
		var plusMinusX = Math.random();
		if (plusMinusX < 0.5){
			plusMinusX = -1;
		} else {
			plusMinusX = 1;
		}
		//console.log(plusMinusX);
		
		var xC = (Math.random())*12;
		xC = xC * plusMinusX;
		
		cubeContainer["cube" + c].position.x = xC;
		
		var plusMinusY = Math.random();
		if (plusMinusY < 0.5){
			plusMinusY = -1;
		} else {
			plusMinusY = 1;
		}
		//console.log(plusMinusY);
		
		var yC = (Math.random())*5;
		yC = yC * plusMinusY;
		
		cubeContainer["cube" + c].position.y = yC;
		
		var zC = (((Math.random())*30) + 2) * -1;
		
		cubeContainer["cube" + c].position.z = zC;
		cubes2.add( cubeContainer["cube" + c] );
	}
	
	var xSpeed;
	
	scene.add(cubes2);

	camera.position.z = 5;
	
	xSpeed = 0.06;
	zSpeed = -0.12;

	function render() 
		{
			requestAnimationFrame(render);
		
			//movement();
			
			renderer.render(scene, camera);
			
		}

	render();
	
	function movement() 
	{
	
		for (i=0; i<cubes2.children.length; i++){
		
			cubes2.children[i].position.x += xSpeed;
			
			if (cubes2.children[i].position.x  >= 15 || cubes2.children[i].position.x  <= -15){
					xSpeed *= -1;
				} 
			
		}
		
	}

}



