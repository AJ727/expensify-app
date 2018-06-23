import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import numeral from 'numeral';

test('Should render ExpenseSummary with 1 expense correctly (no s on expenses)', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={212} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={34} expensesTotal={18890} />);
    expect(wrapper).toMatchSnapshot();
});