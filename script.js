// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a ball
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const ball = new THREE.Mesh(geometry, material);
scene.add(ball);

// Position the camera
camera.position.z = 5;

// Create physics for the ball
const ballPhysics = { velocity: new THREE.Vector3(0, 0, 0) };

// Define animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Apply gravity to the ball
    ballPhysics.velocity.y -= 0.005; // Adjust gravity as needed

    // Update ball position based on physics
    ball.position.add(ballPhysics.velocity);

    // Check for collisions with ground
    if (ball.position.y < -1) {
        // Simulate a bounce
        ballPhysics.velocity.y *= -0.8;
        ball.position.y = -1;
    }

    renderer.render(scene, camera);
};

// Start animation loop
animate();

// Simulate an error
setTimeout(() => {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Error: Something went wrong!';
}, 5000); // Display the error after 5 seconds
