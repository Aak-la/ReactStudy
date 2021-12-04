import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BallList from "./components/BallList"

ReactDOM.render(<h1>Hello World <span>span元素</span></h1>, document.getElementById('root'));
ReactDOM.render(<BallList/>, document.getElementById('root'));