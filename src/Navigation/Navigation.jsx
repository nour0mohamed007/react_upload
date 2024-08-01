import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartModal from '../CartModal/CartModal';
import Cart from '../Cart/Cart';
import './Navigation.css';
import SidebarModal from '../SidebarModal/SidebarModal';
import Sidebar from "../Sidebar/Sidebar";

const Navigation = ({handleChange , handleInputChange, query, cart }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isSidebarModalOpen, setIsSidebarModalOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-container">
          <input
            onChange={handleInputChange}
            value={query}
            type="text"
            className="search-input"
            placeholder="Enter A Shoes Name..."
          />
        </div>
        <div className="profile-icons">
          <a href="#filter" onClick={() => setIsSidebarModalOpen(true)} >
            <FontAwesomeIcon icon={faFilter} size='2xl' className="nav-icons" />
          </a>
          <a href="#C" className='cart' onClick={() => setIsCartModalOpen(true)}>
            <span className='counter'>{cart.length}</span>
            <FontAwesomeIcon icon={faCartShopping}  size="2xl" className="nav-icons" />
          </a>
        </div>
      </nav>
      <SidebarModal show={isSidebarModalOpen} closeSidebar={() => setIsSidebarModalOpen(false)}>
        <Sidebar handleChange={handleChange} closeSidebar={() => setIsSidebarModalOpen(false)}/>
      </SidebarModal>
      <CartModal show={isCartModalOpen} closeCart={() => setIsCartModalOpen(false)}>
        <Cart items={cart} closeCart={() => setIsCartModalOpen(false)} />
      </CartModal>

    </>
  );
};

export default Navigation;
