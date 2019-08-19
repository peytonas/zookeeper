export default class Dingo {
  constructor(data) {
    this.name = data.name;
    this.color = data.color;
    this.gender = data.gender;
    this.weight = data.weight;
    this.habitat = data.habitat;
    this.food = data.food;
    this.legs = data.legs;
  }
  eat(food) {
    console.log(`I love ${food}!`)
  }
}