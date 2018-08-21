import React from 'react';
import ReactDOM from 'react-dom';

import 'element-theme-default';
import 'font-awesome/css/font-awesome.css';
import './scss/main.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
