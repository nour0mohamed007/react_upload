import React from 'react';
import products from "../../DB/data";
import "../TopSelling/TopSelling.css"

const TopSelling = () => {
    const displayedProducts = products.slice(0,3);
  return (
    <div className="collection">
        <div className="heading">
            <h2>Top Selling Products</h2>
        </div>
        <div className="container">
            <div className="collection-products">
 
        {displayedProducts.map((product, index) => (
            <div key={index} className="product-card" data-aos="fade-up">
                    <div className="card-img">
                            <img src={product.img} alt="" />
                    </div>
                    <div className="card-title">
                            <p>{product.title}</p>
                            <p>{product.newPrice}$</p>
                    </div>
            </div>
        ))}
            </div>
        </div>
    </div>
  )
}

export default TopSelling