class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome");
    } else {
      console.log("The door is closed");
    }
  }

  abstract openDoor(key: number): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: number): void {
    if (key === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened");
    } else {
      console.log("The key is wrong");
    }
  }
}

const key = new Key();

const person = new Person(key);

const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
