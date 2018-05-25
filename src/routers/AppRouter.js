import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink } 
from 'react-router-dom';
import AppVideos from '../componentes/AppVideos';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route 
            path="/" 
            component={AppVideos} 
            exact={true} 
        /> </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;