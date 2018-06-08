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
