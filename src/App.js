import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

import prodecer from 'immer'

import Context from './components/Main/context';

import Header from './components/Header';
import LineProcess from './components/LineProcess';
import Footer from './components/Footer';
import Main from './components/Main';

import './assets/style/global.css';

function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [hisMaxItems, setHisMaxItems] = useState(false);

  function addItem(item) {
    if (goalsList.length < 5) {
      setGoalsList([...goalsList, item]);
    }
  }

  function removeItem(value) {
    setGoalsList(prodecer(goalsList, draft => {
      draft.splice(draft.indexOf(value), 1);
    }));
  }

  function toggleMaxItems(){
    if(goalsList.length > 0){
      setHisMaxItems(!hisMaxItems);
    }else{
      alert('Insert a item')
    }
  }

  
  return (
    <DndProvider backend={HTML5Backend}>
      <Context.Provider value={{
        add: addItem,
        data: goalsList,
        remove: removeItem,
        hisMaxItems: hisMaxItems,
        toggleMaxItems: toggleMaxItems
      }}>
        <Header />
        <LineProcess />
        <Main />
        <Footer />
      </Context.Provider>
    </DndProvider>
  );
}

export default App;
