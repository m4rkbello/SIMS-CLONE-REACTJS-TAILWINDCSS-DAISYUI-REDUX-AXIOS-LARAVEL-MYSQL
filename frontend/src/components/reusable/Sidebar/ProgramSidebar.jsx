import React from 'react'

function ProgramSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 rounded-box">
    <li>
      <details close>
        <summary>Programs</summary>
        <ul>
          <li><a>Manage Curriculum</a></li>
          <li><a>Manage Courses</a></li>
          <li><a>Manage Majors</a></li>
          <li><a>Manage Departments</a></li>
          <li><a>Manage Grades</a></li>
          <li><a>Manage School Year</a></li>
          <li><a>Manage Semester</a></li>
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}

export default ProgramSidebar
