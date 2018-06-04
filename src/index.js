import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap';

import App from './App.jsx';
import Registration from './containers/Registration.jsx';

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/registration' component={Registration}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
