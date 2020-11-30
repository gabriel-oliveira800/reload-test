import React, { useContext } from 'react';
import ItemRigth from '../ItemRigth';

import Context from '../Main/context';

import iconsComponents from '../../data';

import './style.css';

export default function SessionRigth() {
  const { hisMaxItems } = useContext(Context);

  return (
    <section className={hisMaxItems ? "container-rigth completed" : "container-rigth"}>
      <h2>Health goals</h2>
      <p className="subtitle">Drag and drop your goals (<span>5 max.</span>)</p>
      <ul className="list-item">
        {iconsComponents.map(item => {
          return <li key={item.id} >
            <ItemRigth
              item={item}
              hisMaxItems={hisMaxItems}
            />
          </li>
        })}
      </ul>
    </section>
  );
}
