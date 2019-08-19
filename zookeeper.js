import Aardvark from "./aardvark.js";
import Badger from "./badger.js";
import Chinchilla from "./chinchilla.js";
import Dingo from "./dingo.js";
import Emu from "./emu.js";
import Flubber from "./flubber.js"
import Gargoyle from "./gargoyle.js"
import Hobbit from "./hobbit.js"

let value = 0;

class Zoo {
  constructor() {
    console.log("Hello from the zoo!")
    this.aardvark = new Aardvark({ name: "Arthur", color: "Brown", gender: "M", weight: "85lbs", tongue: "Average", food: "ants" });
    this.badger = new Badger({ name: "Honey", color: "Black and White", gender: "F", weight: "45lbs", claws: "Too Long", noise: "unintelligible screeching" });
    this.chinchilla = new Chinchilla({ name: "Tiny", color: "Tan", gender: "M", weight: ".25lbs", personality: "anxious", noise: "suspicious silence" })
    this.dingo = new Dingo({ name: "Killer", color: "yellowish gold", gender: "M", weight: "15lbs", habitat: "desert", food: "babies...." })
    this.emu = new Emu({ name: "Emo", color: "black", gender: "F", weight: "undetermined", claws: "Long enough for murder", noise: "GOBBOBLBOBLBOBLGOBLGOBLEBOLEB", hobbies: "running people up trees" });
    this.flubber = new Flubber({ name: "Flubber", color: "green", gender: "Unknown", weight: ".5lbs", hobbies: "partying" });
    this.gargoyle = new Gargoyle({ name: "Dmitri", color: "grey", gender: "none", weight: "500lbs", hobbies: "brooding" });
    this.hobbit = new Hobbit({ name: "Peregrine", color: "pale", gender: "male", weight: "85lbs and falling", background: "Picked up late after too much smoking and drinking; excellent singer." });
  }

  logValue() {
    console.log(value)
  }
}
window["Zoo"] = new Zoo()