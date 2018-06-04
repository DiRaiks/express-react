import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App.jsx';

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
