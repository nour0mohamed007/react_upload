import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Card({ img, title, reviews, prevPrice, newPrice, onAddToCart }) {
  return (
    <section className='card'>
      <img src={img} alt={title} className='card-image' />
      <div className="card-details">
        <h3>{title}</h3>
        <div className="card-reviews">
          <div>
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          </div>
          <span>{reviews}</span>
        </div>
        <div className="card-price">
          <del>{prevPrice}</del> {newPrice}$
        </div>
        <div className="bag">
          <button onClick={onAddToCart}>
            Add To Cart<FontAwesomeIcon className='icon' icon={faBagShopping} style={{ color: "#777" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;
