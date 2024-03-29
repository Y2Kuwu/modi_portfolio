import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Nav from './components/Nav/Nav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
   
    <App />
    <div className="footer"> 
        <img src = "mtBottom.png" id = "mistierMt"/>
        </div>
    </Router>
    //removed strict// was duplicating Intrack
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
