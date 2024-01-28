import React from 'react'

function ExportImportSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 rounded-box">
    <li>
      <details close>
        <summary>Export/Import</summary>
        <ul>
          <li><a>Batch Upload Grades</a></li>
          <li><a>Batch Upload Students</a></li>
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}

export default ExportImportSidebar
