import * as THREE from 'three'; // importing as tree object

//declaring the scene and the camera view point
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//using the rendere to render the animation
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );// setting size to window lenght per each browser
renderer.setAnimationLoop( animate ); // animate after the page closes and refreshes
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // creating the geometry object of box
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // adding a mesh matrial with color 
const cube = new THREE.Mesh( geometry, material ); //then joing them to create a cube 
scene.add( cube );  // we add the cube to the scene

camera.position.z = 5;  

function animate() {

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );

}