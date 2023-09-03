// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create camera controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

// Create a desert-like ground
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xd2b48c }); // Sandy brown color
const groundGeometry = new THREE.PlaneGeometry(20, 20);
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Define animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Update camera controls
    controls.update();

    renderer.render(scene, camera);
};

// Start animation loop
animate();
