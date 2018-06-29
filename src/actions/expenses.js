import uuid from 'uuid';
import database from '../firebase/firebase';

// PRE-FIREBASE USAGE
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// NEW USAGE
// component calls action generator
// action generator returns function
// component dispatches function
// function runs (has ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// Returning a function works because we're using thunk middleware
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        // Destructuring stuff from expenseData, it's equivalent to copy and pasting addExpense above
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE (from the Redux Store)
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};


// Manipulates Redux Store
// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


// Fetches data (Async)
export const startSetExpenses = () => {
    return (dispatch) => {
       return database.ref('expenses').once('value').then((snapshot) => {
           const expenses = [];
           snapshot.forEach((childSnapshot) => {
               expenses.push({
                   id: childSnapshot.key,
                   ...childSnapshot.val()
               });
           });
           dispatch(setExpenses(expenses));
       }); 
    };
};