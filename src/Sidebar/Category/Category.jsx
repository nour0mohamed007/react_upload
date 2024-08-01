import React from 'react'
import Input from "../../Components/Input";
import "./Category.css"

const Category = ({handleChange}) => {
  return (
    <div>
        <h2 className='sidebar-title'>Category</h2>
        <div>
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="sneakers"
                   name="test"
                   title="Sneakers"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="flats"
                   name="test"
                   title="Flats"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="sandals"
                   name="test"
                   title="Sandals"
            />
            <Input
                   handleChange={handleChange}
                   className="sidebar-label-container"
                   value="heels"
                   name="test"
                   title="Heels"
            />
        </div>
    </div>
  )
}

export default Category