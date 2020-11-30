import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

import Header from './components/Header';
import LineProcess from './components/LineProcess';
import Footer from './components/Footer';
import Main from './components/Main';

import './assets/style/global.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <LineProcess />
      <Main />
      <Footer />
    </DndProvider>
  );
}

export default App;
