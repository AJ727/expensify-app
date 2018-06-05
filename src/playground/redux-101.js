import {createStore} from 'redux';

// Creates a store, expects a function as an argument
// count is the default state object
const store = createStore((state = { count: 0 }) => {
    return state;
});

// Returns current state object
store.getState();