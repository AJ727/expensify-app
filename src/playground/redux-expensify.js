import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = ' ', 
        amount = 0, 
        createdAt = 0 
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
// ... is the spreader operator
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => 
            id !== action.id
        );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else {
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default: 
            return state;
    }
};

// Store creation
// combineReducers expects an object, the root object and the reducer that manages it
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters:  filtersReducer 
    })
);

const unsub = store.subscribe(() => {
    console.log(store.getState());    
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'Shotty', amount: 14000}))

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount : 500}));

store.dispatch(setTextFilter('rent'));

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


// const user = {
//     name: 'Jen',
//     age: 23
// }
// console.log({
//     age: 27,
//     ...user,
//     location: 'philyy',
// });