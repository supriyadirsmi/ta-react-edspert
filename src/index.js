import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import '../src/assets/css/global.css'
import Header from './containers/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Home />
  </>
);
