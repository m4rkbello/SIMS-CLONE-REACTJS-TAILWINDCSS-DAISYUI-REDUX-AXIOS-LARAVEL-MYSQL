import React from 'react'

function SubjectSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 rounded-box">
    <li>
      <details open>
        <summary>Records</summary>
        <ul>
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}

export default SubjectSidebar
