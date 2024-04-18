import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark p-2 text-light text-center footer'>
      <h4>All Right Reserved &copy; 2024</h4>
      <p className='text-center mt-3'>
        <Link to="/About">About</Link>|
        <Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>

      </p>
    </div>
  )
}

export default Footer
