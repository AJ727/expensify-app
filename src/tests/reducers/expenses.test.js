import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


// type: '@@INIT' is the action object for it's initial setup(default)
// created automatically by the redux store I believe
test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [expenses[0], expenses[2] ]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '104',
        description: 'GTX 1080',
        note: '',
        createdAt: 20000,
        amount: 80000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    // Spread out array(from the fixtures/expenses file), then add the new expense item to the array
    expect(state).toEqual( [...expenses, expense] );
});

test('Should edit an expense', () => {
    const note = 'new card!';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            note
        }
    };
    // First param is starting point(expenses array, from fixtures/expenses)
    const state = expensesReducer(expenses, action);
    expect(state[2].note).toBe(note);
});

test('Should not edit expense if expense not found', () => {
    const note = 'new card!';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note
        }
    };
    // First param is starting point(expenses array, from fixtures/expenses)
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(state);
});

