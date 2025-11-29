class Animal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    makeSound(): string {
        return `Some generic sound.`;
    }
}

class Dog extends Animal {
    makeSound(): string {
        return `Woof! Woof!`;
    }
}

const dog = new Dog("Buddy");

console.log(`${dog.name} says: ${dog.makeSound()}`);