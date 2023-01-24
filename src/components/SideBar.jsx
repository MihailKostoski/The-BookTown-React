import React from 'react'
import "../Styles/sidebar.scss"

function SideBar() {

    return (
        <div className='sidebar'>
        <div className="sidebar-logo">
          Category
        </div>
        <div  className="sidebar-menu">
                <ul>
                    <li>Psychology</li>
                    <li>Poetry</li>
                    <li>Historical fiction</li>
                    <li>Busines</li>
                    <li>Science</li>
          </ul>
           
        </div>
    </div>

  )
}




export default SideBar;
