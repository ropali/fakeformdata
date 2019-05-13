import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <span>Menu</span>
      <ul className="list-group custom-menu">
        <Link to="/identity" className="list-group-item rounded-item grow-rotate">
            Identity Generator
        </Link>

        <Link to="/address" className="list-group-item rounded-item grow-rotate">
          Address Generator
        </Link>

        <Link to="/numbers" className="list-group-item rounded-item grow-rotate">
          Numbers Generator
       </Link>

        <Link to="/images" className="list-group-item rounded-item grow-rotate">
          Image Generator
         </Link>

        <Link to="/text" className="list-group-item rounded-item grow-rotate">
          Text Generator
         </Link>
         
        <Link to="/internet" className="list-group-item rounded-item grow-rotate">
          Internet
         </Link>

      </ul>
    </div>

  )
}
