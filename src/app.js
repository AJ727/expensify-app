import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

// Link is used for client-side routing, it doesn't refresh the page, instead it
// just swaps things out on the fly and calls ReactDOM.render again
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

// activeClassName only gets applied when the page is the one clicked on
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

// path = where we want to show something
// component = what we want to render, when we match the route
// exact = because it doesn't look for exact matches inherently, it will serve up anything with "/"
// <Switch> --> traverses from top to bottom and stops when the correct path is found. If none is found it'll display
// the last one which is the 404 page
const routes = (
    <BrowserRouter>
        <div>
            <Header />
        <Switch>
            <Route path="/"  component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
