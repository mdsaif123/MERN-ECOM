import React from 'react'
import Layout from '../Components/Layout/Layout'
import aboutimg from "../images/about.gif"

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
       <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={aboutimg} className='contact-img' style={{width:"100%",marginTop:"100px"}} alt="" />
            </div>
            <div className="col-md-6 about" >
                <h2 className='about-heading'>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus cupiditate voluptas vel a voluptate, culpa explicabo provident placeat incidunt veritatis nemo dolorum modi quisquam ipsa voluptatem sapiente fugiat inventore officia cum? Corrupti atque, illum explicabo quaerat animi aliquam eligendi ad ex eius vel! Aspernat quos voluptatem voluptas deserunt eos voluptatum facilis cum quasi alias atque assumenda officiis nulla temporibus, saepe ipsa necessitatibus rem? Officiis voluptas nostrum qui non velit tempore dolorem quaerat sit?</p>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
