import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Pop from "./Pages/Pop";

import "./App.css"
import Register from "./Pages/Auth/Register";

import toast, { Toaster } from 'react-hot-toast';
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<PrivacyPolicy/>}/>
    <Route path="*" element={<Pop/>}/>
   </Routes>
      
    </>
  );
}

export default App;
