class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greeting() {
    console.log(`MY name is ${this.name}`);
  }
}

module.exports = Person;
