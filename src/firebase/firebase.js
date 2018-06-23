import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC5MXuNjLiXygZ7tRvscjKwkuq0jTQdgo4",
    authDomain: "expensify-b23c3.firebaseapp.com",
    databaseURL: "https://expensify-b23c3.firebaseio.com",
    projectId: "expensify-b23c3",
    storageBucket: "expensify-b23c3.appspot.com",
    messagingSenderId: "498621701079"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'AJ'
});