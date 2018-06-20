import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

// expense gives us the props from ExpenseForm.js
// With those props, we call dispatch and pass in the expense with all the props,
// which are createdAt, amount, description, and note
// dispatch creates the expense and we connect to the react store, showing it to the screen
// push sends us back to the dashboard

// **Changed this from a stateless functional component, to a class based
// component, in S12L124 (Testing AddExpensePage)***
export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render(){
        return(
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// Made this to make testing easier, it returns the key addExpense
// with the value of dispatch with addExpense
const mapDispatchToProps = (dispatch) => ({
    addExpense : (expense) => dispatch(addExpense(expense))
});

// We don't need mapStateToProps, so set it as undefined
export default connect(undefined, mapDispatchToProps)(AddExpensePage);