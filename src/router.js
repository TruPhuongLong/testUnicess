import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './view/pages/home';
import Order from './view/pages/order';
import History from './view/pages/history';
import ThankYou from './view/pages/thankyou';
import Product from './view/pages/product';
import Login from './view/pages/login';
import ProductPostForm from './view/pages/product.postform';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/order" exact component={Order} />
                <Route path="/history" exact component={History} />
                <Route path="/thankyou" exact component={ThankYou} />
                <Route path="/product" exact component={Product} />
                <Route path="/admin/login" exact component={Login} />
                <Route path="/admin/postproduct" exact component={ProductPostForm} />
            </Switch> 
        )
    }
}