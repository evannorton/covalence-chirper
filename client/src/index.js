import React from 'react';
import ReactDOM from 'react-dom';
import ES6Promise from 'es6-promise';
import 'isomorphic-fetch';

import App from './components/app';

ES6Promise.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));