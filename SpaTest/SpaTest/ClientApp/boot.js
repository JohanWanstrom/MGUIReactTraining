//import * as React from 'react';
//import * as ReactDOM from 'react-dom';
//import Header from './components/Header'
//import App from './App'
import React from 'react';
import { render } from 'react-dom';
import EnhancedTable from './components/ManualControl';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

function renderApp() {
    render(
        <Router history={browserHistory} routes={routes}/>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept(() => {
        renderApp();
    });
}