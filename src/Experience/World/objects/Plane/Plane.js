import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export class Plane {
  constructor(experience) {
    this.experience = experience;
    this.clock = new THREE.Clock();

    const textureLoader = new THREE.TextureLoader();
    this.flagTexture = textureLoader.load('/flag.jpg');

    this.create();

    this.experience.debug.gui
      .add(this.material.uniforms.uFrequency.value, 'x')
      .min(0)
      .max(20)
      .step(0.01)
      .name('frequencyX');
    this.experience.debug.gui
      .add(this.material.uniforms.uFrequency.value, 'y')
      .min(0)
      .max(20)
      .step(0.01)
      .name('frequencyY');
  }

  create() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    this.material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uFrequency: { value: new THREE.Vector2(10, 5) },
        uTime: { value: 0 },
        uTexture: { value: this.flagTexture }
      }
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.experience.scene.add(this.mesh);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();

    this.material.uniforms.uTime.value = elapsedTime;
  }
}
