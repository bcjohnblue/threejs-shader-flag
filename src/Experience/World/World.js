import { Cube, Plane } from './objects';

export class World {
  constructor(experience) {
    this.experience = experience;

    // this.cube = new Cube(experience);
    this.plane = new Plane(experience);
  }

  update(...arg) {
    if (this.plane) {
      this.plane.update(...arg);
    }
  }
}
