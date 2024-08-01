import React, { useState } from 'react';
import logo from "./nike.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from "./Navigation.module.css";

function Navigation({ navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={Styles.nav}>
      <div className={Styles.container}>
        <div className={Styles.navItems}>
          <div className={Styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={menuOpen ? `${Styles.menu} ${Styles.showMenu}` : Styles.menu}>
            <ul>
              <li><a href="#home" onClick={() => { navigate('home', 'home') }}>Home</a></li>
              <li><a href="#products" onClick={() => { navigate('store') }}>Products</a></li>
              <li><a href="#about" onClick={() => { navigate('home', 'about') }}>About</a></li>
              <li><a href="#contact" onClick={() => { navigate('home', 'contact') }} className={Styles.last}>Contact</a></li>
            </ul>
          </div>
          <div className={Styles.burger} onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2xl" className={Styles.burgerIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
