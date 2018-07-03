import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';

// expense gives us the props from ExpenseForm.js
// With those props, we call dispatch and pass in the expense with all the props,
// which are createdAt, amount, description, and note
// dispatch creates the expense and we connect to the react store, showing it to the screen
// push sends us back to the dashboard

// **Changed this from a stateless functional component, to a class based
// component, in S12L124 (Testing AddExpensePage)***
export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

// Made this to make testing easier, it returns the key addExpense
// with the value of dispatch with addExpense
const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (expense) => dispatch(startAddExpense(expense))
});

// We don't need mapStateToProps, so set it as undefined
export default connect(undefined, mapDispatchToProps)(AddExpensePage);