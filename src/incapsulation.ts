class Person {
    private _age = 0;

    get age() {
        return this._age;
    }

    set age(value: number) {
        if (value < 0 || value > 120) {
            throw new Error("Invalid age value");
        }

        this._age = value;
    }
}

const person = new Person();
person.age = 25;
person.age = -5; // This will throw an error