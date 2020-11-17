import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Star DB</Link>
      </h1>
      <ul className="header__menu">
        <li className="header__menu-item">
          <Link to="/people">People</Link>
        </li>
        <li className="header__menu-item">
          <Link to="/planets">Planets</Link>
        </li>
        <li className="header__menu-item">
          <Link to="/starships">Starships</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
