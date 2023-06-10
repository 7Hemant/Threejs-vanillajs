import * as Three from "three";

// // console.log("threejs",Three);

// const scene = new Three.Scene();
// const camera = new Three.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new Three.WebGLRenderer();
// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
// document.body.append(renderer.domElement);

// const geometry = new Three.BoxGeometry(1, 1, 1);
// const material = new Three.MeshBasicMaterial({ color: "#eee" });
// const cube = new Three.Mesh(geometry, material);

// scene.add(cube);
// camera.position.z = 5;
// // renderer.render(scene, camera);

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();

/* 
drawing line
*/

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new Three.LineBasicMaterial({ color: "#eee" });
const points = [];
points.push(new Three.Vector3(-10, 0, 0));
points.push(new Three.Vector3(0, 10, 0));
points.push(new Three.Vector3(10, 0, 0));

const geometry = new Three.BufferGeometry().setFromPoints(points);
const line = new Three.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);
