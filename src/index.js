import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import semantic-ui-css/semantic.min.css;
/*import {BrowserRouter} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cakes from '../src/components/Products/pages/Cakes';
import Donut from '../src/components/Products/pages/Donut';
import Pie from '../src/components/Products/pages/Pie';
import SmallChops from '../src/components/Products/pages/SmallChops';
import Drinks from '../src/components/Products/pages/Drinks';
import ChinChin from '../src/components/Products/pages/ChinChin';
import reportWebVitals from './reportWebVitals';
*/
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
