import {createStore} from 'redux';

// Action Generators - functions that return action objects
// Implicitly returns increment (no return statement needed)
const add = ({a, b}, c) => {
    return a + b +c;
}
//console.log(add({a: 1, b:12}, 100))

// incrementBy's default is 1, and if it doesn't exist set it to an empty object
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Creates a store, expects a function as an argument
// count is the default state object
// action is second param
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + action.incrementBy};
        case 'DECREMENT':
            return {count: state.count - action.decrementBy};
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

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 127 }));

store.dispatch(incrementCount());