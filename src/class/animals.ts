class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('Sound!');
  }
}

class Dog extends Animal {
  breed: string;

  constructor(breed: string, name: string) {
    super(name);
    this.breed = breed;
  }

  makeSound(): void {
    console.log('Guau guau');
  }
}

const dog = new Dog('Labrador', 'Buddy');
dog.makeSound();
