import {createStore} from 'redux';

// Creates a store, expects a function as an argument
// count is the default state object
// action is second param
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
});

// Returns current state object
console.log(store.getState());

// Actions - an object that gets sent to the store
// walk, stop walking, work, stop_working <-- all actions that change a state

// Increment the count
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});


console.log(store.getState());
