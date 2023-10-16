import './style.css';
import * as THREE from 'three'; // Import Three.js
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

//the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("lightskyblue");

//the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 40;

// Create a directional light (dLighting)
const dLighting = new THREE.DirectionalLight(0xffffff, 1); //(light color, intensity)
dLighting.position.set(1, 1, 1); // Set the direction of the light

// Create an ambient light (aLighting)
const aLighting = new THREE.AmbientLight(0x404040); // light color

// Add the lights to the scene
scene.add(dLighting);
scene.add(aLighting);

// Add renderer
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add 3d object from mlt and obj files
let robo_guy: THREE.Object3D | null = null;
const mtlLoader = new MTLLoader();
mtlLoader.load("../assets/blocky_robot/blocky_robot.mtl", function (materials) {
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("../assets/blocky_robot/blocky_robot.obj", function (object) {
        robo_guy = object;
        scene.add(robo_guy);
    });
});

// Create an animate loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the 3D object
    if (robo_guy) {
        robo_guy.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
});
