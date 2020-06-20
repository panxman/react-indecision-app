class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
      return `Hi, I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their Major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Student("Panos", 27, "Information and Communication Systems Engineering");

console.log(me.getDescription());

const you = new Traveler("Takhs", 30, "Ptolemaida");

console.log(you.getGreeting());
