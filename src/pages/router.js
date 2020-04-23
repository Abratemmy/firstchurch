import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Ministries from './ministries';
import Home from './home';
import About from './about';
import Audios from './audio';
import Upcoming from './upcoming';

const Router = ()=>(
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/ministry' component={Ministries}/>
        <Route exact path = '/audio' component= {Audios} />
        <Route exact path = '/upcoming' component= {Upcoming} />
       
    </Switch>
)
export default Router