import React, { useState } from "react";
import axios from "axios"
import Layout from "../../Components/Layout/Layout";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import "../Auth/register.css"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate=useNavigate()

  const HandleForm=async(e)=>{
  e.preventDefault()
 try {
    const res=await axios.post("/api/v1/auth/register",{
        name,email,password,phone,address
      })
      if(res && res.data.success){
        toast.success(res.data.message)
        navigate("/login")
      }else{
        toast.error(res.data.message)
      }
 } catch (error) {
    console.log(error)
    toast.error("Something went wrong")
    
 }
 
  }

  return (
    <Layout title={"Register"}>
      <div className="register">
       

        <form onSubmit={HandleForm}>
          <div className="form">
          <h1 className="text-white mb-3">Regsiter</h1>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="name"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="password"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Phone"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
              />
            </div>

            <button type="submit" className=" btn btn-primary rounded-pill  p-2 w-100 mb-4">
             Register
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
