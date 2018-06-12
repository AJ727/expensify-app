import React from 'react';


// For the functions, value is where it comes from, so it starts out as an empty string
// Upon changing, the updater function is called, updating the state
export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount : ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }
    render() {
        return (
            <div>
                <form>
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