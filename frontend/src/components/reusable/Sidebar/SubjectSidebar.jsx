import React from 'react'

function SubjectSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 rounded-box">
    <li>
      <details close>
        <summary>Subjects</summary>
        <ul>
          <li><a>Subject Loads</a></li>
          <li><a>Manage Subjects</a></li>
          <li><a>Manage Sections</a></li>
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}

export default SubjectSidebar
