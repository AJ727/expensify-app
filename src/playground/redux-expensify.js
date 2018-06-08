import {createStore, combineReducers} from 'redux';

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