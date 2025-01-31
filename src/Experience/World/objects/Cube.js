import * as THREE from 'three';

export class Cube {
  constructor(experience) {
    this.experience = experience;

    this.create();
  }

  create() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ color: 'white' });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.experience.scene.add(this.mesh);

    this.experience.debug.gui
      .add(this.mesh.position, 'x')
      .min(-5)
      .max(5)
      .step(1);
    this.experience.debug.gui
      .add(this.mesh.position, 'y')
      .min(-5)
      .max(5)
      .step(1);
    this.experience.debug.gui
      .add(this.mesh.position, 'z')
      .min(-5)
      .max(5)
      .step(1);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.mesh.rotation.z += 0.01;
  }
}
