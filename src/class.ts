class User {
    firstName: string;
    lastName: string;
    age: number;
    address: string;

    constructor(firstName: string, lastName: string, age: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    greet(): string {
        return `${this.firstName} ${this.lastName}.
                Age: ${this.age} years old.
                Address: ${this.address}.
                Welcome!
                ............................
                ${this.getAge(this.age)}`;
    }

    private getAge(age: number): string {
        if (age > 18) {
            return `He/She is old`;
        } else {
            return `He/She is young`;
        }
    }
}

const user = new User("John", "Smith", 21, "123 Main St");
console.log(user.greet());