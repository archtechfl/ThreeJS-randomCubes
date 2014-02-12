// JavaScript Document

console.log("At threeApp.js");

function threeApp () {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);
	
	var geometry = new THREE.CubeGeometry(2,2,2);
	
	var material = new THREE.MeshBasicMaterial( { color: 0xBABABA, wireframe:true } );
	
	var materialCenter = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
	
	var cubeContainer = new Object();
	
	var xC = 0;
	
	var cubes2 = new THREE.Object3D();
	
	for (c=0; c<30; c++){
		cubeContainer["cube" + c] = new THREE.Mesh( geometry, material );
		cubeContainer["cube" + c].position.x = xC;
		cubeContainer["cube" + c].position.y = -5;
		cubeContainer["cube" + c].position.z = -5;
		cubes2.add( cubeContainer["cube" + c] );
		xC += 0.2;
	}
	
	console.log(cubeContainer);
	
	var cube = new THREE.Mesh( geometry, material );
	var cube2 = new THREE.Mesh( geometry, material );
	var cube3 = new THREE.Mesh( geometry, material );
	var cube4 = new THREE.Mesh( geometry, material );
	var cube5 = new THREE.Mesh( geometry, material );
	
	var xSpeed;
	
	cube.position.z = -5;
	cube.position.y = -5;
	cube.position.x = -3;
	
	cube2.position.z = -10;
	cube2.position.y = -5;
	cube2.position.x = -3;
	
	cube3.position.z = -15;
	cube3.position.y = -5;
	cube3.position.x = -3;
	
	cube4.position.z = -20;
	cube4.position.y = -5;
	cube4.position.x = -3;
	
	cube5.position.z = -25;
	cube5.position.y = -5;
	cube5.position.x = -3;
	
	var cubes = new THREE.Object3D();
	
	cubes.add( cube );
	cubes.add( cube2 );
	cubes.add( cube3 );
	cubes.add( cube4 );
	cubes.add( cube5 );
	
	scene.add(cubes);
	scene.add(cubes2);
	
	camera.position.z = 5;
	
	xSpeed = 0.06;
	zSpeed = -0.12;

	function render() 
		{
			requestAnimationFrame(render);
			
			for (i=0; i<cubes.children.length; i++){
			
				if (cubes.children[i].position.x  >= 10 || cubes.children[i].position.x  <= -10){
					xSpeed *= -1;
				} 
				
			}
			
			movement();
			
			renderer.render(scene, camera);
			
		}

	render();
	
	function movement() 
	{
	
		for (i=0; i<cubes.children.length; i++){
			cubes.children[i].position.x += xSpeed;
		}
		
	}

}


