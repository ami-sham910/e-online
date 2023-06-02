import React from 'react'
import '../App.css';
import logo from './Images/logo.png';

export default function Navbar() {
  return (
    <>
      <div className="Main_nav container-fluid container-fluid-sm container-fluid-md container-fluid-xl">
        <div className='' >
          <nav className=" navbar navbar-expand-lg bg-body-tertiary d-flex">
            <div className="container-fluid ">
              <a className="navbar-brand ms-5" href="#">  <img src={logo} alt="My Image" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Courses</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
                <form className="d-flex " role="search">
                  <button className="btn btn-outline-success me-5" type="submit">Get Started</button>
                </form>
              </div>
            </div>
          </nav>
          <h1 className='d-flex justify-content-center mt-5 headline'>Learn Best Online Courses</h1>
          <p className='d-flex justify-content-center mt-0 pb-4 para'>1000+ Online Courses For You</p>
        </div>
        <div className='container-fluid container-fluid-sm container-fluid-md container-fluid-xl bc-2'>
          <div className='container container-lg container-md '>
            <div className='row'>
              <div className='col-md-8 col-sm-8 col-xl-4 justify-content-end sbtn mb-1'>
                <div class="dropdown ">
                  <button class="btn btn-secondary dropdown-toggle c-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cateogery
                  </button>
                  <ul class="dropdown-menu">
                    <li><button class="dropdown-item" type="button">Action</button></li>
                    <li><button class="dropdown-item" type="button">Another action</button></li>
                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                  </ul>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xl-7'>
                <div class="input-group ser">
                  <input type="text" class="form-control" placeholder="What Do You Want To" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-outline-success ms-3 btn2" type="submit">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
