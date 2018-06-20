import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import MainContent from './components/common/main-content';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MainContent />, document.getElementById('main-content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
