import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import "./index.css";

const App = () => <h1>Hello World</h1>;

// eslint-disable-next-line no-undef
ReactDOM.render(<Index />, document.querySelector('#root'));