import React from 'react'
import Input from '../../Components/Input'
import "../Colors/Colors.css"

function Colors({handleChange}) {
  return (
<div>
        <h2 className='sidebar-title color-title'>Color</h2>
        <div>
            <label className='sidebar-label-container'>
                <input onChange={handleChange} type="radio" value="" name="test2"/>
                <span className='checkmark all'></span>
                All
            </label>
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="black"
                   name="test2"
                   title="Black"
                   color="black"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="blue"
                   name="test2"
                   title="Blue"
                   color="blue"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="red"
                   name="test2"
                   title="Red"
                   color="red"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="green"
                   name="test2"
                   title="Green"
                   color="green"
            />
            <label className='sidebar-label-container'>
                <input onChange={handleChange} type="radio" value="white" name="test22"/>
                <span className='checkmark' style={{background : "white" , border: "2px solid #777"}}></span>
                White
            </label>
        </div>
    </div>
  )
}

export default Colors;