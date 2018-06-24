// NOTE: This is the exact same as firebase/firebase.js
// This doesn't contain the API key, and isn't the real file I'm using

import * as firebase from 'firebase';

firebase.initializeApp(config);

// Connect to database
const database = firebase.database();

// ref = reference (in this case we are referencing root)
// .then() = uses Promise(set() returns a Promise) to run a function if the change is successful
database.ref().set({
    name: 'AJ',
    age: 23,
    stressLevel: 6, 
    job: {
        title: 'Software dev',
        company: 'Google'
    },
    location: {
        city: 'Tampa',
        country: 'USA'
    }
// If successful
}).then(() => {
    console.log('Data is saved');
// If failed
}).catch((e) => {
    console.log('FAILED:', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

// We must use the 'location/city' key in order to keep country
// database.ref().update({
//     job: 'banana farmer',
//     'location/city': 'Boston'
// });

// Updating multiple and can create new properties
// database.ref().update({
//     name: 'Ajjj',
//     age: 28,
//     job: 'software dev in training',
//     isSingle: null
// });

// Both below are the same
// database.ref('isSingle').remove();
// database.ref('isSingle').set(null);