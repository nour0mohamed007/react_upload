import React from 'react'
import Button from "../Components/Button"
import "./Recommended.css"


function Recommended({handleClick}) {
  return (
    <div>
        <h3 className='recommended-title'>Recommended</h3>
        <div className='recommended-flex'>
            <Button handleClick={handleClick} value="" title="All Products"/>
            <Button handleClick={handleClick} value="Nike" title="Nike"/>
            <Button handleClick={handleClick} value="Adidas" title="Adidas"/>
            <Button handleClick={handleClick} value="Puma" title="Puma"/>
            <Button handleClick={handleClick} value="Vans" title="Vans"/>
        </div>
    </div>
  )
}

export default Recommended