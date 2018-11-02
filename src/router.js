import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Order from './pages/order';
import History from './pages/history';
import ThankYou from './pages/thankyou';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/order" exact component={Order} />
                <Route path="/history" exact component={History} />
                <Route path="/thankyou" exact component={ThankYou} />
            </Switch> 
        )
    }
}