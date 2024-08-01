import React, { Fragment } from 'react';
import ReactDom from "react-dom";
import Styles from"./SidebarModal.module.css";

const BackDrop = ({close , show}) =>{
    return <div className={`${Styles.BackDrop} ${show ? Styles.showBackDrop :null}`} onClick={close}></div>
}
const Overlay = ({children , show}) => {
    return <div className={`${Styles.Overlay} ${show ? Styles.showOverlay : null}`}>{children}</div>
}

const SidebarModal = ({children , show , closeSidebar}) => {
  return (
    <Fragment>
        {ReactDom.createPortal(
            <Fragment>
                <BackDrop close={closeSidebar} show={show}/>
                <Overlay show={show}>{children}</Overlay>
            </Fragment>,
            document.getElementById('sidebar')
        )}
    </Fragment>
  )
}

export default SidebarModal