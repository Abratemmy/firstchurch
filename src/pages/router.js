import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Audios from './audio';
import Upcoming from './upcoming';
import About2 from './about2';
import Gallery from './gallery';
import Contact from './contact';
import Donation from './donation';

const Router = ()=>(
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/about2' component = {About2} />
        <Route exact path = '/audio' component= {Audios} />
        <Route exact path = '/gallery' component= {Gallery} />
        <Route exact path = '/upcoming' component= {Upcoming} />
        <Route exact path = '/contact' component= {Contact} />
        <Route exact path = '/donation' component= {Donation} />
    </Switch>
)
export default Router