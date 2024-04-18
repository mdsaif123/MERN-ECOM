import React from 'react'
import Layout from '../Components/Layout/Layout'
import ploicyimg from "../images/privacy-policy.jpg"

const PrivacyPolicy = () => {
  return (
    <Layout title={"privacy and policy"}>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={ploicyimg} className='contact-img' style={{width:"100%",marginTop:"20px"}} alt="" />
            </div>
            <div className="col-md-6 about" >
                <h2 className='term-heading p-2'>Terms and Conditions:</h2>
                
      <ol>
        <li>By accessing and using this website, you agree to abide by the terms and conditions outlined below.</li>
        <li>This website is provided on an "as is" and "as available" basis.</li>
        <li>We reserve the right to modify or terminate the service for any reason, without notice, at any time.</li>
        <li>Your use of the service is at your sole risk. The service is provided without warranties of any kind.</li>
        <li>We shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages.</li>
        <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the service, use of the service, or access to the service without our express written permission.</li>
       
      </ol>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
