import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    // Make a constructor in order to pass props up
    constructor(props) {
        super(props);
        
        //
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        // REMINDER: ({description}) is equivalent to returning this object --> description: description
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        // The !amount part allows the user to highlight and press backspace to delete the data
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }
    onDateChange = (createdAt) => {
        // Disallow user to clear date by using if statement
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        // If there is no description or amount, set error's state to the string below
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Provide a description and amount!' }));
        }
        else {
            // If there are no errors, then clear the input and submit the info
            this.setState(() => ({ error: '' }));
            // onSubmit passes the description, amount, createdAt, and note properties up to a parent component
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    // For the functions, value is where it comes from, so it starts out as an empty string
    // Upon changing, the updater function is called, updating the state
    render() {
        return (
            <div>
                {this.state.error && <p>Provide a description and amount!</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} 
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        value={this.state.note} 
                        onChange={this.onNoteChange}
                        placeholder="Add a note(optional)">

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}