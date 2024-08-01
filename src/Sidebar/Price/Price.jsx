import React from 'react'
import Input from "../../Components/Input"
import "./Price.css"

function Price({handleChange}) {
  return (
    <div className='ml'>
        <h2 className='sidebar-title price-title'>Price</h2>
        <div>
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="50"
                   name="test1"
                   title="0$-50$"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="100"
                   name="test1"
                   title="50$-100$"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="150"
                   name="test1"
                   title="100$-150$"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="200"
                   name="test1"
                   title="Over 150$"
            />
        </div>
    </div>
  )
}

export default Price