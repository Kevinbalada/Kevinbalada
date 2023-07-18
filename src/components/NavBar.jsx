import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <div className="navbar-container">
      <span className="logo">RUP</span>
      <Dropdown>
        <Dropdown.Toggle as={Button} className="dropdown-btn" id="dropdown-basic">
          Actions
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item className="dropdown-item">Campera</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Remera</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Pantalones</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Buzos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    <CartWidget />
    </div>
  );
}

export default NavBar;
