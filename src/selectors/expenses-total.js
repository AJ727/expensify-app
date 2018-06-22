// This file will total up the expenses, and display
// jsx like this, "4 expenses totaling $32.67"
// expenses is an array of objects?

export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};

// MY ATTEMPT AT THIS FUNCTION(1 and 3 work, 2 does not):
//      ***actually I got kind of close with the mapping!
//
// export default (expenses) => {
//     let amount;
//     if (!expenses) { 
//         return 0; 
//     }
//     else if (expenses.length === 1) {
//         return expenses[0].amount;
//     }
//     else {
//         return expenses.map((expense) => 
//             amount = expense.amount).reduce((amount, count) => amount + count
//         );
//     }
// };