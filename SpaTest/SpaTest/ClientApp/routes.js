import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Register from './components/Register';
import EnhancedTable from './components/ManualControl';
import ErrorPage from './components/ErrorPage';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={Register}/>
        <Route path="/manualControl" component={EnhancedTable} />
        <Route path="*" component={ErrorPage} />
    </Route>
);