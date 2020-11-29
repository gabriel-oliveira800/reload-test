import React from 'react';

import Usa from '../../assets/icons/usa.svg';
import Logo from '../../assets/icons/logo.svg';

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg';
import { ReactComponent as ArrowBack } from '../../assets/icons/arrow_back.svg';

import './style.css';

export default function Header() {
  return (
    <header >
      <div className="back">
        <ArrowBack className="icon" />
        <a href="https://reload.ac">Back to home</a>
      </div>

      <div className="header-logo">
        <img src={Logo} alt="Reload" />
        <div className="header-liner"></div>
        <h1>Assessment</h1>
      </div>

      <div className="header-button">

        <div className="header-info">
          <div className="info-user">
            <h3>Iris</h3>
            <p>28 years</p>
          </div>
          <ArrowDown className="arrow-down"/>
        </div>

        <div className="locale-items">
          <div className="locale" >
            <img src={Usa} alt="USA" />
          </div>
          <ArrowDown className="arrow-down" />
        </div>
      </div>
    </header>
  );
}