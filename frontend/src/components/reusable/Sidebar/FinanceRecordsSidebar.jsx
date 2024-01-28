import React from 'react'

function FinanceRecordsSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 rounded-box">
    <li>
      <details close>
        <summary>Finance Records</summary>
        <ul>
          <li><a>Transaction History</a></li>
          <li><a>Add</a></li>
          <li><a>Add</a></li>
       
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}

export default FinanceRecordsSidebar
