import React, { useContext } from 'react';

import Context from  '../Main/context';

import ItemLeft from '../ItemLeft';

import './style.css';

export default function SessionLeft() {
  const { hisMaxItems } = useContext(Context);

  return (
    <section className="container-left">
      <ItemLeft/>
      <ul className={hisMaxItems ? "level-wrraper completed" : "level-wrraper"} >
        <li className="level-item">
          <div className="item"></div>
          <p>High</p>
        </li>
        <li className="level-item">
          <div className="item"></div>
          <p>Medium</p>
        </li>
        <li className="level-item">
          <div className="item"></div>
          <p>Low</p>
        </li>
      </ul>
    </section>
  );
}