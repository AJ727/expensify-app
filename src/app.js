import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        DASHBOARD
    </div>
);

const AddExpensePage = () => (
    <div>
        ADD EXPENSE
    </div>
);

const EditExpensePage = () => (
    <div>
        EDIT EXPENSE
    </div>
);

const HelpPage = () => (
    <div>
        HELP PAGE
    </div>
);

const NotFoundPage = () => (
    <div>
        404!
    </div>
);

// path = where we want to show something
// component = what we want to render, when we match the route
// exact = because it doesn't look for exact matches inherently, it will serve up anything with "/"
// <Switch> --> traverses inorder and stops when the correct path is found. If none is found it'll display
// the last one which is the 404 page
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/"  component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
