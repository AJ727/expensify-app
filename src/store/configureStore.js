import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
// combineReducers expects an object, the root object and the reducer that manages it

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters:  filtersReducer 
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

