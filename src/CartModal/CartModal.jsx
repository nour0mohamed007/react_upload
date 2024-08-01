import React, { Fragment } from 'react';
import ReactDom from "react-dom";
import Styles from"./CartModal.module.css";

const BackDrop = ({close , show}) =>{
    return <div className={`${Styles.BackDrop} ${show ? Styles.showBackDrop :null}`} onClick={close}></div>
}
const Overlay = ({children , show}) => {
    return <div className={`${Styles.Overlay} ${show ? Styles.showOverlay : null}`}>{children}</div>
}

const Cart = ({children , show , closeCart}) => {
  return (
    <Fragment>
        {ReactDom.createPortal(
            <Fragment>
                <BackDrop close={closeCart} show={show}/>
                <Overlay show={show}>{children}</Overlay>
            </Fragment>,
            document.getElementById('cart')
        )}
    </Fragment>
  )
}

export default Cart