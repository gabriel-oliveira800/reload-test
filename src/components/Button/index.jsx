import React from 'react';

import './style.css';

export default function Button({ label, onClick }) {
  return (
    <button className="default-button" onClick={onClick} >
      {label}
    </button>
  );
}
