import React from 'react';
import {Route, Redirect, Switch} from 'react-router';

import {BrowserRouter} from 'react-router-dom'
import Home from "../containers/Home";
import {view as TopMenu} from '../containers/TopMenu';
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'
import List from '../containers/List'




const Rt = () => (
    <BrowserRouter>
        <div>
            <TopMenu/>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path={"/404"} component={NotFound}/>
                    <Redirect to={"/404"}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);


// const Rt = () => (
//     <BrowserRouter>
//         <div>
//             <TopMenu/>
//
//             <hr/>
//             <Switch>
//                 <Route exact path="/" component={Home}/>
//                 <Route path="/home" component={Home}/>
//                 <Route path="/detail" component={Detail}/>
//                 <Route path="/list" component={List}/>
//                 <Route path={"/404"} component={NotFound}/>
//                 <Redirect to={"/404"}/>
//             </Switch>
//         </div>
//     </BrowserRouter>
// );

export default Rt;

