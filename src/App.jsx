import React from 'react';
import Products from './components/Products/Product.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="shopping cart logo"
          />
          <h1>My Ecommerce App</h1>
        </div>
      </header>
      <Products className="Product"/>
      <Footer lassName="Footer"/>
    </div>
  );
}

export default App;


