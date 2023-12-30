import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Main from "./components/index";




export default function App() {

  return (
  <div>
    <Router>
    <Routes>
    <Route exact path="/" element={<Main />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/Register" element={<Register />} />

    </Routes>
    </Router>




    {/* 

     <Register />
        <Login />
    
  
   
      //
        
  */}
    
    </div>
  );
}
