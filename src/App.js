import React from 'react';
import './App.css';
import {view as TopMenu} from './containers/TopMenu';

import {Route, Redirect, Switch} from 'react-router';

import Home from './containers/Home';
import List from './containers/List';
import Detail from './containers/Detail';
import NotFound from './containers/NotFound';

const App = () => {
    return (
        <div>
            <TopMenu/>
            <div>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path={"/404"} component={NotFound}/>
                    <Redirect to={"/404"}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
