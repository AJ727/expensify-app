// NOTE: This is the exact same as firebase/firebase.js
// This doesn't contain the API key, and isn't the real file I'm using

import * as firebase from 'firebase';

firebase.initializeApp(config);

// Connect to database
const database = firebase.database();

// child_removed (is an event that fires whenever a child is removed)
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed (an event that fires whenever a child is changed)
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added (fires whenever a child gets added)
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     });

// database.ref('expenses').push({
//     description: 'my first item yeet',
//     note: '1st note neighbor',
//     amount: 123.34,
//     createdAt: 454747
// });

// // .push() creates a new property on our reference
// database.ref('notes').push({
//     title: 'to do',
//     body: 'runnn'
// });

// const firebaseNotes = {
//     notes: {
//         aeoijfaio: {
//             title: '1st note',
//             body: 'the bodyyy'
//         },
//         awefeafaef: {
//             title: '2nd note',
//             body: 'boeee'
//         }
//     }
// };


// // 'value' is event type
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('Error: ', e);
// });

// // .on() listens for something over and over again
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(39);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(40);
// }, 10500);

// // .once() returns a Promise, returns data a single time
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// ref = reference (in this case we are referencing root)
// .then() = uses Promise(set() returns a Promise) to run a function if the change is successful
// database.ref().set({
//     name: 'AJ',
//     age: 23,
//     stressLevel: 6, 
//     job: {
//         title: 'Software dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Tampa',
//         country: 'USA'
//     }
// // If successful
// }).then(() => {
//     console.log('Data is saved');
// // If failed
// }).catch((e) => {
//     console.log('FAILED:', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

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