// ############ reference type ##########//
let obj = { value: 3 };
let obj1 = obj;
let obj2 = { value: 3 };
console.log(obj === obj1);
console.log(obj === obj2);

// ########### context vs scope ##########//
const object = {
  a: function () {
    console.log(this);
  },
};
object.a();

// ############ instantiation ###########//
class player {
  constructor(name, type = newbie) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class cricketer extends player {
  constructor(name, type = newbie) {
    super(name, type);
  }
  play() {
    console.log(`Hit a ball`);
  }
}
const sachin = new cricketer("sachin", "bastman");
sachin.introduce();
sachin.play();
