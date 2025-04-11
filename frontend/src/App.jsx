import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./styles/userlogin.css";


import BusinessSignup from "./pages/BusinessSignup";
import Dashboard from "./pages/Dashboard";
import EmailVerify from "./pages/EmailVerify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NearMe from "./pages/NearMe";
import UploadImages from "./pages/UploadImages";
import UserSignup from "./pages/UserSignup";


axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/businessSignup" element={<BusinessSignup />} />
      <Route path="/emailverify" element={<EmailVerify  verificationEndpoint="/emailverify" />} />
      <Route path="/businessemailverify" element={<EmailVerify verificationEndpoint="/BusinessEmailVerify"  />} />
      <Route path="/uploadImages" element={<UploadImages />} />
    
      <Route path="/docs" element={<Dashboard />} />
      <Route path="*" element={<Home />} />
      <Route path="/nearme" element={<NearMe />} />
     


{/* Following files are pending for check */}

      <Route path="/Nearme" element={<NearMe />} />
    </Routes>
  );
}

export default App;
