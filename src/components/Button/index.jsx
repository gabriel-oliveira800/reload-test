import React from 'react';

import './style.css';

function Button({ label, onClick }) {
  return (
    <button className="default-button" onClick={onClick} >
      {label}
    </button>
  );
}

export default Button;