import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

// editExpense takes two arguments, the id and the updates (expense)
const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                    console.log('updated', expense)
                }}
           />
           <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
};

// We want to pass in the current expense object
// We then search the expenses array, to find a matching id 
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);