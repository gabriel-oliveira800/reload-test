import React from 'react';

import ItemRigth from '../ItemRigth';

import './style.css';

export default function SessionRigth({ items }) {
  return (
    <section className="container-rigth">
      <h2>Health goals</h2>
      <p className="subtitle">Drag and drop your goals (<span>5 max.</span>)</p>

      <ul className="list-item">
        {items.map(item => {
          return <li key={item.id}>
            <ItemRigth item={item} hisMaxItems={false} />
          </li>
        })}
      </ul>
    </section>
  );
}
