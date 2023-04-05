import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <a href="#home">My Ecommerce App</a>
        <input type="checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle">
          <span></span>
        </label>
        <ul>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
