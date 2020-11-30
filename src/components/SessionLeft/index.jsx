import React from 'react';

import ItemLeft from '../ItemLeft';

import './style.css';

export default function SessionLeft() {
  return (
    <section className="container-left">
      <ItemLeft/>
      <ul className="level-wrraper" >
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