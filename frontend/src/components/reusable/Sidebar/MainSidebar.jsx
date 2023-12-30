import React from 'react'
import Records from './RecordsSidebar'
import SubjectSidebar from './SubjectSidebar'
import ProgramSidebar from './ProgramSidebar'
import FinanceRecordsSidebar from './FinanceRecordsSidebar'
import ExportImportSidebar from './ExportImportSidbar'





export default function Sidebar() {
  return (
    <div>
    <div className="drawer lg:drawer-open overflow-hidden">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center overflow-hidden">
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu w-50 min-h-full bg-base-200 text-base-content">
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
        <ProgramSidebar />
        <label>Billing</label>
        <li><a>Assessment</a></li>
        <li><a>Cashier</a></li>
        <FinanceRecordsSidebar />
        <li><a>Manage Faculty and Staff</a></li>
        <ExportImportSidebar />
      </ul>
    
    </div>
    
  </div>
    </div>
  )
}
