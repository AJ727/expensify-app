import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

// expense gives us the props from ExpenseForm.js
// With those props, we call dispatch and pass in the expense with all the props,
// which are createdAt, amount, description, and note
// dispatch creates the expense and we connect to the react store, showing it to the screen
// push sends us back to the dashboard
const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);