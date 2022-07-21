import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context/Context';
import U_Context from './Context/UserContext';
import A_Context from './Context/Admin';

ReactDOM.render(
  <React.StrictMode>
    <A_Context>
    <U_Context>
      <Context>
        <App />
      </Context>
    </U_Context>
    </A_Context>
  </React.StrictMode>,
  document.getElementById('root')
);
