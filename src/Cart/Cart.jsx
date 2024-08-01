import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ items }) => {
  if (!items || !Array.isArray(items)) {
    return (
      <div className="cart">
        <h2 className='cart-title'>Shopping Cart</h2>
        <p className='cart-text'>Your Cart Is Empty!</p>
      </div>
    );
  }


  return (
    <div className="cart">
      <h2 className='cart-title'>Shopping Cart</h2>
      {items.length === 0 ? (
        <p className='cart-text'>Your Cart Is Empty!</p>
      ) : (
        <div className="items">
          {items.map((item, index) => {
            const { id = index, title, img, reviews, prevPrice, newPrice, quantity } = item;
            return (
              <section className='card' key={id}>
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
                    <del>{prevPrice}</del> {newPrice}$ x {quantity}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
