import {createStore} from 'redux';

// Creates a store, expects a function as an argument
// count is the default state object
// action is second param
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {count: state.count + incrementBy};
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {count: state.count - decrementBy};
        case 'SET':
            return {count: action.count};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
});

// Runs whenever the state changes
// Call unsubscribe to end it
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - an object that gets sent to the store
// walk, stop walking, work, stop_working <-- all actions that change a state

// Increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 20
});

store.dispatch({
    type: 'SET',
    count: 101
})
