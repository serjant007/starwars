import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="logo">Star DB</h1>
      <ul className="header__menu">
        <li className="header__menu-item">
          <a href="#">People</a>
        </li>
        <li className="header__menu-item">
          <a href="#">Planets</a>
        </li>
        <li className="header__menu-item">
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
