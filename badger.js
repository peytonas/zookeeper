export default class Badger {
  constructor(data) {
    this.name = data.name;
    this.color = data.color;
    this.gender = data.gender;
    this.weight = data.weight;
    this.clawLength = data.clawLength;
    this.food = data.food;
    this.noise = data.noise;
  }
  eat(food) {
    console.log(`I eat ${food}!`)
  }
  speak(noise) {
    console.log(`The ${this.constructor.name} says ${noise}!!!`)
  }
}