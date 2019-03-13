class animal {
  constructor(sound) {
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends animal {
  constructor() {
    super('woof');
  }

  bark() {
    this.makeSound();
  }
}

class Cat extends animal {
  constructor() {
    super('meow');
  }

  meow() {
    this.makeSound();
  }
}

const dog = new Dog();
dog.bark();
const cat = new Cat();
cat.meow();

// functional

const makeSound = sound => () => console.log(sound);
const bark = makeSound('woof');
const meow = makeSound('meow');
// const rage = makeSound('whrr-tschzz-tschzz-tschzz-chk')
bark();
meow();
// rage();


// const anotherDog = {sound:'woof'}
// const anotherCat = {sound:'meow'}
// const robot = {sound:'whrr-tschzz-tschzz-tschzz-chk'}
// const makeObjSound = obj => () => console.log(obj.sound);
//
// const oBark = makeObjSound(anotherDog)
// const oMeow = makeObjSound(anotherCat)
// const oRage = makeObjSound(robot)
//
// oBark()
// oMeow()
// oRage()
