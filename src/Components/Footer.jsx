import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div
    className="d-flex justify-content-center align-items-center flex-column bg-primary text-light mt-5"
    style={{ width: "100%", height: "300px" }}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">

      <div style={{width:'400px'}} className="website mt-3">
       <Link to={'/'} style={{textDecoration:'none'}}>
            <h1 className='text-info ' ><i class="fa-solid fa-receipt me-3"></i>
            Tracky
            </h1>
       </Link>
        <h4 className='mb-5'>
          Money Tracker App
        </h4>
        <h6>Code licensed, docs CC BY 3.0.</h6>
        <h6>Currently v1.0.0</h6>
      </div>

      <div className="links d-flex flex-column ">
        <h4 className='text-info my-4'>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
        <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
        <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>register</Link>
        <Link to={'/tracker'} style={{textDecoration:'none',color:'white'}}>Tracker Page</Link>
        
       
      </div>

      <div className="guides d-flex flex-column ">
      <h4 className='text-info my-4'>Guides</h4>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap </Link><Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
      </div>

      <div className="contact d-flex flex-column flex-wrap ">
      <h4 className='text-info my-4'>Contact Us</h4>
        <div className="d-flex">
          <input className="form-control" placeholder="Enter your Mail" />
          <button className="btn btn-warning ms-3"><i class="fa-solid fa-arrow-right fa-beat"></i></button>
          </div>
        <div className="icons mt-3 d-flex justify-content-between fs-5">
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin-in"></i></Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i> </Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook-f"></i></Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></Link>

        </div>
      </div>

    </div>

    <h6 className='mt-5'>Copyright © 2024 Tracky. Built with MERN stack.</h6>
  </div>
  )
}

export default Footer