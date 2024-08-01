import React from 'react';
import img from "./nike-dunk-high-game-royal-1-1000.webp";
import "./Landing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield ,faRotateRight, faTruck } from '@fortawesome/free-solid-svg-icons';

const Landing = ({navigate}) => {
  return (
    <div className="landing">
        <div className="container">
            <div className="landingContent">
                <div className="text" data-aos="fade-left">
                    <h1>Find your <br /> dream sneakers</h1>
                    <p>Find your shoes from our various collections. here shoes
                        <br />
                        are endless and profit is also endless.
                    </p>
                    <div className="btn">
                        <button className='landing-button' onClick={() => navigate('store')}>Explore More</button>
                    </div>
                </div>
                <div className="image" data-aos="fade-right">
                <svg class="scribble" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 50 L150 50 L100 150 Z" stroke="#9b59b6" stroke-width="0.3" fill="none" />
                    <path d="M60 60 L160 60 L110 160 Z" stroke="#9b59b6" stroke-width="0.3" fill="none" />
                    <path d="M70 70 L170 70 L120 170 Z" stroke="#9b59b6" stroke-width="0.3" fill="none" />
                </svg>
                    <img  src={img} alt=""  />
                </div>
            </div>
            <div className="features">
                <div className="features-cards">
                    <div className="feature-icon">
                    <FontAwesomeIcon className="icon" size='xl' icon={faShield} style={{color: "#ebeced",}} />
                    </div>
                    <div className="feature-text">
                        <h4>Secure Payment</h4>
                        <p>Secure on order</p>
                    </div>
                </div>
                <div className="features-cards">
                    <div className="feature-icon">
                    <FontAwesomeIcon className="icon" size='xl' icon={faRotateRight} style={{color: "#ebeced",}} />
                    </div>
                    <div className="feature-text">
                        <h4>24/7 Support</h4>
                        <p>Contact us 24 hrs a day</p>
                    </div>
                </div>
                <div className="features-cards">
                    <div className="feature-icon">
                    <FontAwesomeIcon className="icon" size='xl' icon={faTruck} style={{color: "#ebeced",}} />
                    </div>
                    <div className="feature-text">
                        <h4>Fast Delivery</h4>
                        <p>Fast delivery on order</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing