

export default function RecordsSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 w-80 rounded-box">
    <li>
      <details close>
        <summary className="menu bg-base-400 w-50 rounded-box">Records</summary>
        <ul>
          <li ><a>Archived Enrollees</a></li>
          <li><a>Student Records</a></li>
          <li ><a>Manage Student Status</a></li>
          <li><a>Manage Student Type</a></li>
          <li ><a>Manage Scholarship</a></li>
          <li><a>Manage Special Group & Type</a></li>
          <li><a>Manage Preffered Session</a></li>
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}
