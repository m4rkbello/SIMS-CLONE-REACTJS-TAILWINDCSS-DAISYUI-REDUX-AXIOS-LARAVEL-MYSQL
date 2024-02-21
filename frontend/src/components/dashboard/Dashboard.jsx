import Footer from '../reusable/Footer';
import NavBar from '../reusable/NavBar';
import MainSidebar from '../reusable/Sidebar/MainSidebar';

function Dashboard() {
    return (
        <div>
            <NavBar />
            <MainSidebar />
            <div className="flex">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
