import React from 'react';

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow_back.svg'
import GraphIcon from '../../assets/icons/graph.svg'

import Context from './context';

import SessionLeft from '../SessionLeft';
import SessionRigth from '../SessionRigth';
import IconsComponents from '../../data';

import './style.css';

export default function Main() {
  return (
    <main>
      <div className="container-link">
        <ArrowBack className="link-icon" />
        <a href="https://reload.co">Previuos</a>
      </div>

      <section>
        <div className="section-header">
          <img src={GraphIcon} alt="graph ico" />
          <h1>What are your health goals?</h1>
        </div>

        <Context.Provider value={{ data: [] }}>
          <div className="container-items">
            <SessionLeft />
            <SessionRigth items={IconsComponents} />
          </div>
        </Context.Provider>
      </section>
    </main>
  );
}
