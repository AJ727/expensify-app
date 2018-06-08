import {createStore, combineReducers} from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text:'', sortBy:'date', startDate:undefined, endDate:undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

// Store creation
// combineReducers expects an object, the root object and the reduce that manages it
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters:  filtersReducer 
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'aopie',
        description: 'Feb Rent',
        note: 'Just got my shotty',
        amount: 14000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};