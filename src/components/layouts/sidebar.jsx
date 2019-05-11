import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <span>Menu</span>
      <ul className="list-group custom-menu">
        <li className="list-group-item rounded-item grow-rotate">
          Identity Generator
        </li>

        <li className="list-group-item rounded-item grow-rotate">
          Address Generator
        </li>
        <li className="list-group-item rounded-item grow-rotate">
          Numbers Generator
        </li>
        <li className="list-group-item rounded-item grow-rotate">
          Image Generator
          </li>
        <li className="list-group-item rounded-item grow-rotate">
          Text Generator
          </li>
        <li className="list-group-item rounded-item grow-rotate">
          Internet
          </li>

      </ul>
    </div>

  )
}
