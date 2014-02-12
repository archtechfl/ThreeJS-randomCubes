// JavaScript Document

console.log("At threeApp.js");

function threeApp () {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	
	//Lighting for the scene, two lights from different sides
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
	directionalLight.position.set(-5, 4, 5);
	scene.add( directionalLight );
	
	var directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.1 );
	directionalLight2.position.set(5, 4, 5);
	scene.add( directionalLight2 );

	//WebGL renderer creation
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);
	
	var geometry = new THREE.CubeGeometry(0.03,0.03,0.03);//making the cubes that go in scene
	
	//var material = new THREE.MeshBasicMaterial( { color: 0xBABABA, wireframe:true } );
	
	var material = new THREE.MeshLambertMaterial( { color: 0xBABABA, shading: THREE.FlatShading} );
	
	//Temporary holding container for THREE.mesh objects
	var cubeContainer = new Object();
	
	//The location variables
	var xC;
	var yC;
	var zC;
	
	//Object3D that the cubes will go in
	var cubes = new THREE.Object3D();
	cubes.name = "cubes";
	
	//Loop for cube position setting
	for (c=0; c<20000; c++){
		cubeContainer["cube" + c] = new THREE.Mesh( geometry, material );
		
		//Set X coordinate
		var plusMinusX = Math.random();
		if (plusMinusX < 0.5){
			plusMinusX = -1;
		} else {
			plusMinusX = 1;
		}
		
		var xC = (Math.random())*15;
		xC = xC * plusMinusX;
		
		cubeContainer["cube" + c].position.x = xC;
		//Done with X
		
		//Set y coordinate
		var plusMinusY = Math.random();
		if (plusMinusY < 0.5){
			plusMinusY = -1;
		} else {
			plusMinusY = 1;
		}
		
		var yC = (Math.random())*5;
		yC = yC * plusMinusY;
		
		cubeContainer["cube" + c].position.y = yC;
		//Done with Y
		
		//Set z coordinate
		var zC = (((Math.random())*100) + 2) * -1;
		//Done with z
		
		cubeContainer["cube" + c].position.z = zC;
		
		cubes.add( cubeContainer["cube" + c] );//Add the cube to the Object3D object
	}
	
	var xSpeed;
	
	scene.add(cubes);//Add the cubes Object3D object to the scene object
	
	console.log(cubes.children);

	camera.position.z = 5;
	
	zSpeed = 0.2;

	function render() 
		{
			requestAnimationFrame(render);
		
			movement();
			
			renderer.render(scene, camera);
			
		}

	render();
	
	function movement() 
	{
	
		for (i=0; i<cubes.children.length; i++){
		
			cubes.children[i].position.z += zSpeed;
			
			/*
			if (cubes.children[i].position.z  >=0 || cubes.children[i].position.z  <= -600){
					zSpeed *= -1;
				} 
			*/
			
		}
		
	}

}



