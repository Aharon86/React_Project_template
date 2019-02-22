import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './App_js/Header';
import BottomHeader from './App_js/BottomHeader';
import Section from './App_js/Section';
import Footer from './App_js/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render([<Header />, <BottomHeader />, <Section />, <Footer /> ], document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
