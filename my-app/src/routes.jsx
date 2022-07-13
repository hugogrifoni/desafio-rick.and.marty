import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router-dom'

import Home from './home'
import Details from './details'

export default props => (
    <Router>
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/details' component={Details} />
            <Redirect from='*' to='/' />
        </Switch>
    </Router>
)