export default class Chinchilla {
  constructor(data) {
    this.name = data.name;
    this.color = data.color;
    this.gender = data.gender;
    this.weight = data.weight;
    this.personality = data.personality;
    this.food = data.food;
    this.legs = data.legs;
  }
  eat(food) {
    console.log(`I love ${food}!`)
  }
}