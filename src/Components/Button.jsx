import React from 'react'

function Button({handleClick , value , title}) {
  return (
    <button onClick={handleClick} value={value} className='btns'>{title}</button>
  )
}

export default Button