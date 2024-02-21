import Records from './RecordsSidebar'
import SubjectSidebar from './SubjectSidebar'
import ProgramSidebar from './ProgramSidebar'
import FinanceRecordsSidebar from './FinanceRecordsSidebar'
import ExportImportSidebar from './ExportImportSidbar'
import { Link } from 'react-router-dom'
import MainContent from '../content/MainContent'


export default function Sidebar() {
  return (
    <div className="flex p-0 px-0 py-0 ps-0 pe-0 pt-0 pr-0 m-0 mx-0 my-0 ms-0 me-0 mt-0 mr-0">
      <div className="drawer lg:drawer-open overflow-hidden">
        <div id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu w-50 min-h-full bg-lime-950 shadow hover:shadow-2xl">
            {/* Sidebar content here */}
            <li className='bg-lime-950 shadow hover:shadow-1xl'><Link to="/dashboard">Dashboard</Link></li>
            <li className='bg-lime-950 shadow hover:shadow-1xl'><Link to="/walkinregistration">Walkin Registration</Link></li>
            <li className='bg-lime-950 shadow hover:shadow-1xl'><a>Enrollees</a></li>
            <li className='bg-lime-950 shadow hover:shadow-1xl'><a>Walkin Registration</a></li>
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
      
{/**
<MainContent/>

*/}
     
    </div>
  )
}
