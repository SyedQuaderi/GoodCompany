import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import {store} from './redux';
import App from './app'




ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

