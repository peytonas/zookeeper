import Aardvark from "./aardvark.js";
import Badger from "./badger.js";
import Chinchilla from "./chinchilla.js";
import Dingo from "./dingo.js";

let value = 0;

class Zoo {
  constructor() {
    console.log("Hello from the zoo!")
    this.aardvark = new Aardvark({ name: "Arthur", color: "Brown", gender: "M", weight: "85lbs", tongue: "Average", food: "ants" });
    this.badger = new Badger({ name: "Honey", color: "Black and White", gender: "F", weight: "45lbs", claws: "Too Long", noise: "unintelligible screeching" });
    this.chinchilla = new Chinchilla({ name: "Tiny", color: "Tan", gender: "M", weight: ".25lbs", personality: "anxious", noise: "suspicious silence" })
    this.dingo = new Dingo({ name: "Killer", color: "yellowish gold", gender: "M", weight: "15lbs", habitat: "desert", food: "babies...." })
  }

  logValue() {
    console.log(value)
  }
}
console.log(Zoo)