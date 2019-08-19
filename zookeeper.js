import Aardvark from "./aardvark.js";
import Badger from "./badger.js";
import Chinchilla from "./chinchilla.js";
import Dingo from "./dingo.js";
import Emu from "./emu.js";
import Flubber from "./flubber.js";
import Gargoyle from "./gargoyle.js";
import Hobbit from "./hobbit.js";
import IllegitimateChild from "./illegitimateChild.js";
import Jackalope from "./jackalope.js";

class Zoo {
  constructor() {
    console.log("Hello from the zoo!")
    this.aardvark = new Aardvark({ name: "Arthur", color: "Brown", gender: "M", weight: "85lbs", tongue: "Average", food: "ants", legs: 4 });
    this.badger = new Badger({ name: "Honey", color: "Black and White", gender: "F", weight: "45lbs", claws: "Too Long", noise: "unintelligible screeching", legs: 4 });
    this.chinchilla = new Chinchilla({ name: "Tiny", color: "Tan", gender: "M", weight: ".25lbs", personality: "anxious", food: "pellets", noise: "suspicious silence", legs: 4 });
    this.dingo = new Dingo({ name: "Killer", color: "yellowish gold", gender: "M", weight: "15lbs", habitat: "desert", food: "babies....", legs: 4 });
    this.emu = new Emu({ name: "Emo", color: "black", gender: "F", weight: "undetermined", claws: "Long enough for murder", noise: "GOBBOBLBOBLBOBLGOBLGOBLEBOLEB", hobbies: "running people up trees" });
    this.flubber = new Flubber({ name: "Flubber", color: "green", gender: "Unknown", weight: ".5lbs", hobbies: "partying" });
    this.gargoyle = new Gargoyle({ name: "Dmitri", color: "grey", gender: "None", weight: "500lbs", hobbies: "brooding" });
    this.hobbit = new Hobbit({ name: "Peregrine", color: "pale", gender: "M", weight: "85lbs and falling", background: "Picked up late after too much smoking and drinking; excellent singer." });
    this.illegitimateChild = new IllegitimateChild({ name: "Mose", color: "white", gender: "M", weight: "175lbs", background: "Ran away from Schrute Farms, asked to join the zoo." });
    this.jackalope = new Jackalope({ name: "Pedro", color: "white with brown spots", gender: "M", weight: "7lbs", appearance: "Is clearly a rabbit with antlers glued to its head." });
  }
}



class fourLeggers {
  constructor() {
    console.log("Not as good as us bipeds!")
    if ()
  }
}

window["Zoo"] = new Zoo()