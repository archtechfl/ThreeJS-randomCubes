// JavaScript Document

// basic side 3D starfield scroller, with more stars added

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
	
	var dimRec = 0.03;
	var geometry = new THREE.CubeGeometry(dimRec,dimRec,dimRec);//making the cubes that go in scene
	
	//var material = new THREE.MeshBasicMaterial( { color: 0xBABABA, wireframe:true } );
	
	var material = new THREE.MeshLambertMaterial( { color: 0xBABABA, shading: THREE.FlatShading} );
	
	//The location variables
	var xC;
	var yC;
	var zC;
	
	//Object3D that the cubes will go in
	var cubes = new THREE.Object3D();
	cubes.name = "cubes";
	
	function generateCubes(){
	
		for (c=0; c<10; c++){
		var jemCube = new THREE.Mesh( geometry, material );
		
		//Set X coordinate
		var plusMinusX = Math.random();
		if (plusMinusX < 0.5){
			plusMinusX = -1;
		} else {
			plusMinusX = 1;
		}
		
		var xC = ((Math.random())* 30.0) + 30;
		
		jemCube.position.x = xC;
		//Done with X
		
		//Set y coordinate
		var plusMinusY = Math.random();
		if (plusMinusY < 0.5){
			plusMinusY = -1;
		} else {
			plusMinusY = 1;
		}
		
		var yC = (Math.random())*50;
		yC = yC * plusMinusY;
		
		jemCube.position.y = yC;
		//Done with Y
		
		//Set z coordinate
		var zC = (((Math.random())*30) + 2) * -1;
		//Done with z
		
		jemCube.position.z = zC;
		
		jemCube.xSpeed = Math.random() * 0.3;
		//console.log(jemCube.xSpeed);//Debug random speed
		
		cubes.add( jemCube );//Add the cube to the Object3D object
		}
	}//end of generate cubes
	
	var xSpeed;
	
	scene.add(cubes);//Add the cubes Object3D object to the scene object

	camera.position.z = 5;
	
	xSpeed = -0.15;
	
	var frameCounter = 0;
	
	//var myTimer = setInterval(timerDisplay,1000);
	
	var timerCounter = 0;
	function timerDisplay () {
		timerCounter += 1;
		//console.log(timerCounter);
	}

	function render() 
		{
			requestAnimationFrame(render);
			
			generateCubes();
		
			movement();
			
			renderer.render(scene, camera);
			
			frameCounter++;
			console.log("Frame: " + frameCounter + " Number of cubes: " + cubes.children.length);//Debug frames and number of cubes
			
		}

	render();
	
	function movement() 
	{
	
		for (i=0; i<cubes.children.length; i++){
		
			cubes.children[i].position.x += xSpeed;
			//console.log("Cube speed: " + cubes.children[i].xSpeed);
			
			if (cubes.children[i].position.x  <= -40)
				{
					cubes.remove(cubes.children[i]);
				}
			
		}
		
	}

}



