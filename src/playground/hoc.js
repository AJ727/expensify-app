// Higher Order Component (HOC) - A component (HOC) that renders another component

// Advantages:
// Reuse Code
// Render Hijacking
// Prop Manipulation
// Abstarct State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>THIS IS PRIVATE INFO, DO NOT SHARE</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// Function that returns a component
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p>YEET</p>} 
            <WrappedComponent {...props} />
        </div>
    );
};

// Component
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Details!!!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Details!!!" />, document.getElementById('app'));