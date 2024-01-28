import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import WrappedComponent from "./components/index";
import MainContent from "./components/reusable/content/MainContent";
import ProtectedComponents from "./components/ProtectedComponents";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/auth" element={<ProtectedComponents isAuthenticated={false} />} />
          <Route exact path="/" element={<WrappedComponent />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/main" element={<MainContent />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>



    </div>
  );
}
