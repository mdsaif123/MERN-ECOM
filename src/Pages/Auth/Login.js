import React, { useState } from "react";
import axios from "axios"
import Layout from "../../Components/Layout/Layout";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import "../Auth/login.css"

const Login = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate=useNavigate()
  
    const HandleForm=async(e)=>{
    e.preventDefault()
   try {
      const res=await axios.post("/api/v1/auth/login",{
          email,password
        })
        if(res && res.data.success){
          toast.success(res.data.message)
          navigate("/")
        }else{
          toast.error(res.data.message)
        }
   } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
      
   }
   
    }
  return (
    
      <Layout title={"Login"}>
      <div className="login">
     

        <form onSubmit={HandleForm} >
          <div className="login-form">
          <h1 className="text-white mb-4">Login</h1>
          

            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="password"
              />
            </div>

       
          

            

            <button type="submit" className="btn btn-primary rounded-pill w-100">
           Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
    
  )
}

export default Login
