/* eslint-disable react/no-unknown-property */


function AccountSetupSidebar() {
  return (
    <div>
    <ul className="menu bg-base-400 rounded-box">
    <li>
      <details close>
        <summary>Account Setup</summary>
        <ul>
          <li><a>Manage Account Items</a></li>
          <li><a>Manage Discounts</a></li>
          <li><a>Manage Payments</a></li>
       
        </ul>
      </details>
    </li>
  </ul>
    </div>
  )
}

export default AccountSetupSidebar
