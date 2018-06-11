import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ErrorPage from './components/ErrorPage';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage} />
        <Route path="*" component={ErrorPage} />
    </Route>
);