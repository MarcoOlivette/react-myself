import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact paht="/" component={Main}></Route>
            <Route paht="/products/:id" component={Product}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;