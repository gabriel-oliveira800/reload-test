import React from 'react';

import Header from './components/Header';
import LineProcess from './components/LineProcess';
import Footer from './components/Footer';
import Main from './components/Main';

import './assets/style/global.css';

function App() {
  return (
    <>
      <Header />
      <LineProcess/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
