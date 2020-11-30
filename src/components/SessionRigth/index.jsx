import React, { useContext } from 'react';

import ItemRigth from '../ItemRigth';

import Context from '../Main/context';

import './style.css';

export default function SessionRigth({ items }) {
  const { data } = useContext(Context);

  return (
    <section className="container-rigth">
      <h2>Health goals</h2>
      <p className="subtitle">Drag and drop your goals (<span>5 max.</span>)</p>

      <ul className="list-item">
        {items.map(item => {
          return <li key={item.id} >
            <ItemRigth
              item={item}
              hisMaxItems={data.length >= 5}
            />
          </li>
        })}
      </ul>
    </section>
  );
}
