import React from 'react';
import logo from '../assets/logo.jpg';
import './styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__container__logo" src={logo} alt="" />
        <div className="header__container__menu">
          <a href="/">Populares</a>
          <a href="/">Viejos</a>
          <a href="/">Nuevos</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
