import React from 'react'
import Records from './RecordsSidebar'
import SubjectSidebar from './SubjectSidebar'




export default function Sidebar() {
  return (
    <div>
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><a>Dashboard</a></li>
        <li><a>Walkin Registration</a></li>
        <li><a>Enrollees</a></li>
        <li><a>Walkin Registration</a></li>
        <li><a>Masterlist</a></li>
        <li><a>Walkin Registration</a></li>
        <label>Manage</label>
        <Records />
        <SubjectSidebar />
      </ul>
    
    </div>
  </div>
    </div>
  )
}
