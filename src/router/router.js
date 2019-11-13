import React from 'react';
import { MainComponent, Login } from '../components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = (props) => {
    return (
        <Router>
            <Route path="/login/" exact component={Login} />
            <Route path="/" exact component={MainComponent} />
        </Router>
    );
};

export default AppRouter;