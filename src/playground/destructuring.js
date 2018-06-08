// Object Destructuring

const person = {
    name: 'Aj',
    age: '23',
    location: {
        city: 'Tampa',
        temp: 100
    }
};

// Equivalent to:
// const name = person.name;
// const age = person.age;
const {name: firstName = 'the default!', age} = person;
console.log(`${firstName} is ${age}`)

// the : renames it to temperature
const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

// CHALLENGE
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holliday',
    publisher: {
        name: 'Penguin'
    }
}

const {name:publisherName = 'self-published'} = book.publisher;

console.log(publisherName); // Penguin, default is self-published


// ------------------Array Destructuring------------------
// *using city1 because city is already defined above

const address = ['1299 S Juniper Street', 'Philly', 'PA', '19147'];

// Leaving a comma indicates you're not using an item from an array
const [, city1, state = 'New York'] = address;
console.log('-----------------------------------------');
console.log(`You are in ${city1} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);