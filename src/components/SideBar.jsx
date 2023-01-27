import React from 'react'
import "../Styles/sidebar.scss"
import { categories } from '../utilis/category';
function SideBar({ setCategory}) {

    return (
      
      
      
      <div className='sidebar'>
         <div className="sidebar-logo">
          Category
        </div>
        {categories.map((category) => (
          <button
          onClick={() => setCategory(category.name)}
           className="category-btn"
            key={category.name}>
            <span className='category-name'>{category.name }</span>
           </button>
        ))}
      
    </div>

  )
}




export default SideBar;
