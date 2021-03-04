import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TimerStore } from './stores/TimerStore';

// useStrict(true);

const timerStore = new TimerStore();

ReactDOM.render(
  <React.StrictMode>
    <App timerStore={timerStore} />
  </React.StrictMode>,
  document.getElementById('root')
);


