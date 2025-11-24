let userAge: number;
let userName: string;

userName = "Bohdan";
userAge = 21;

function greetUser(name: string, age: number) {
    if (age > 18) {
        return `Hi big boy)) Nice to see you here, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

function farewellUser(name: string) {
    return `Goodbye, ${name}! I have to go.`;
}

// try to run the function in other function
function run(name: string, age: number) {
    console.log(greetUser(name, age));

    setTimeout(() => {
        console.log(":)");
    }, 3000);

    setTimeout(() => {
        console.log(farewellUser(name));
    }, 8000);
}

run(userName, userAge);