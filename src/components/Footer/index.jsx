import React, { useContext } from 'react';

import DefaultButton from '../Button';

import Context from '../Main/context';

import './style.css';

export default function Footer() {
  const { hisMaxItems, toggleMaxItems } = useContext(Context);

  return (
    <footer>
      <DefaultButton 
        label={ hisMaxItems ? "NEXT" : "OK" }
        onClick={toggleMaxItems}
      />
    </footer>
  );
}
