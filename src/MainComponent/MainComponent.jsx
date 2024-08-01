import React from 'react'
import Navigation from '../Navigation/Navigation';
import Recommended from "../Recommended/Recommended";
import Products from '../Products/Products';
import Nav from "../Home/Navigation/Navigation";
import Footer from '../Home/Footer/Footer';

const MainComponent = ({handleChange,handleInputChange, query, cart,  handleClick , result, navigate }) => {
  return (
    <>
      <Nav navigate={navigate} />
      <Navigation handleChange={handleChange} handleInputChange={handleInputChange} query={query} cart={cart} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <Footer />
    </>
  )
}

export default MainComponent