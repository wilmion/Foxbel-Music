import React from 'react'
import ReactDOM from 'react-dom';

import App from './routes/index';

import "./static/sass/index.scss";

const container = document.getElementById('app');

ReactDOM.render( <App /> , container )
