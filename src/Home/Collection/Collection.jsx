import React from 'react';
import products from "../../DB/data";
import "./Collection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Collection = ({navigate}) => {

    const displayedProducts = products.slice(0,6);
  return (
    <div className="collection">
        <div className="heading">
            <h2>Our Collection</h2>
        </div>
        <div className="container">
            <div className="collection-products">
 
        {displayedProducts.map((product , index) => (
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
            <div className="button">
                <button className='collection-button' onClick={() => navigate('store')}>See All <FontAwesomeIcon className='arrow' icon={faArrowRight} style={{color: "#333458"}} /></button>
            </div>
        </div>
    </div>
  )
}

export default Collection