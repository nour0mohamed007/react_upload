import React, { useState, useEffect } from 'react';
import MainComponent from './MainComponent/MainComponent';
import products from "./DB/data";
import Card from "./Components/Card";
import Main from "./Home/Main/Main";
import AboutPage from './Home/About/AboutPage';
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollTo, setScrollTo] = useState(null);

  const navigate = (page, section) => {
    setCurrentPage(page);
    setScrollTo(section);
  };

  useEffect(() => {
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      setScrollTo(null); // Reset scrollTo after scrolling
    }
  }, [scrollTo]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        const existingProduct = updatedCart[existingProductIndex];
        existingProduct.newPrice = (existingProduct.newPrice / existingProduct.quantity) * (existingProduct.quantity + 1);
        existingProduct.quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, color, newPrice }) =>
          category === selected ||
          company === selected ||
          color === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ id, title, img, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          title={title}
          img={img}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          onAddToCart={() =>
            addToCart({ id, title, img, reviews, prevPrice, newPrice })
          }
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      {currentPage === 'home' && <Main navigate={navigate} />}
      {currentPage === 'store' && (
        <MainComponent
          handleChange={handleChange}
          handleClick={handleClick}
          handleInputChange={handleInputChange}
          query={query}
          cart={cart}
          result={result}
          navigate={navigate}
        />
      )}
      {currentPage === 'about' && <AboutPage navigate={navigate} />}
    </>
  );
};

export default App;
