import React from 'react';
import {Route, Redirect, Switch} from 'react-router';


import NotFound from '../containers/NotFound';
import {BrowserRouter} from 'react-router-dom'
import {view as TopMenu} from '../containers/TopMenu';
import Home from "../containers/Home/index";
import List from "../containers/List/index";
import Detail from "../containers/Detail/index";


const Routes = () => (
    <BrowserRouter>
        <div>
            <TopMenu/>
            <div>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/404" component={NotFound}/>
                    <Redirect to={"/404"}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);


export default Routes;

