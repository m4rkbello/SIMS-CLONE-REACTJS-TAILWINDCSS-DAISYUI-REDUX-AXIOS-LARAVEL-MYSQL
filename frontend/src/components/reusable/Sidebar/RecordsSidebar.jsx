

export default function RecordsSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 w-80 rounded-box">
    <li>
      <details open>
        <summary className="menu bg-base-400 w-50 rounded-box">Records</summary>
        <ul>
          <li ><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}
