import React from 'react'
import Layout from '../Components/Layout/Layout'
import ct from "../images/ct.gif";
import "../App.css"
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={ct} className='contact-img' style={{width:"100%",marginTop:"20px"}} alt="" />
            </div>
            <div className="col-md-6 address" >
                <h2 className='contact-heading'>Contact Us</h2>
                <p className='para'><HiOutlineMail /> &nbsp;www.help@ecom.com</p>
                <p className='para'> <IoMdCall /> &nbsp;+91 123 4567 890</p>
                <p className='para'><FaHeadphonesAlt /> &nbsp;1800-000-0000 toll free</p>
                <address className='contact-address'><FaLocationDot />
                &nbsp; 123 Main Street<br />
                &nbsp; &nbsp;&nbsp;&nbsp;Cityville, State<br />
                &nbsp;&nbsp;&nbsp; &nbsp;Country - Zip Code
                </address>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
