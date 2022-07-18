import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context/Context';
import U_Context from './Context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <U_Context>
      <Context>
        <App />
      </Context>
    </U_Context>
  </React.StrictMode>,
  document.getElementById('root')
);
