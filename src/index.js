import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TimerStore } from './stores/TimerStore';
// import { DoubleClickStore } from './stores/DoubleClickStore';

let timerStore = new TimerStore();
// let doubleClickStore = new DoubleClickStore()

ReactDOM.render(
  <React.StrictMode>
    <App timerStore={timerStore} />
  </React.StrictMode>,
  document.getElementById('root')
);


