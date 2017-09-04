import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './com.less'
import Rt from './router/Rt';
import registerServiceWorker from './registerServiceWorker';
import BasicExample from './containers/BasicExample';
import {Provider} from 'react-redux';

import configureStore from './stores/configureStore';

import fn from './redux-demo';

const store = configureStore();

fn();


ReactDOM.render(
    <Provider store={store}>
        <Rt/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();





