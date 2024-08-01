import React from 'react';
import Navigation from "../Navigation/Navigation";
import Landing from "../Landing/Landing";
import Collection from "../Collection/Collection";
import About from "../About/About";
import TopSelling from "../TopSelling/TopSelling";
import ClientReview from "../ClientReview/ClientReview";
import Footer from "../Footer/Footer";

const Main = ({ navigate, cart }) => {
  return (
    <>
      <Navigation navigate={navigate} cart={cart} />
      <Landing navigate={navigate} />
      <Collection navigate={navigate} />
      <div id="about">
        <About navigate={navigate}/>
      </div>
      <TopSelling />
      <ClientReview />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default Main;
