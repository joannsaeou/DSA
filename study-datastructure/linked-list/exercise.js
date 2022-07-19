//reference type 
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };


//context vs scope
const object4 = {
  a: function () {
    console.log(this);
  }
}

//instantiation
//to copy 
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi I am testing ${this.name}, i'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type) 
    console.log('wizard', this);
  }
  play() {
    console.log(`weeee im a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');