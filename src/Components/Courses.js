import React from 'react'
import '../App.css';
import Buisidea from './Images/business-one.jpg'
import mbw from './Images/web-design.jpg'
import appde from './Images/app-development.jpg'




export default function Courses() {
  return (
    <div className='container container-md container-xl container-sm mt-3'>
      <h3 className='fw-semibold'>Our Online Courses</h3>
      <hr />
      <div className='container container-xl container-md list mx-0'>
        <nav class="nav">
          <a class="nav-link active mx-0" aria-current="page" href="#">All</a>
          <a class="nav-link" href="#">Buisness</a>
          <a class="nav-link" href="#">Design</a>
          <a class="nav-link" href="#">Devlopment</a>
          <a class="nav-link" href="#">Management</a>
          <a class="nav-link" href="#">Techonology</a>
          <a class="nav-link" href="#">Photo</a>
        </nav>
      </div>

      <div className='container container-md container-xl mt-3 '>
        <div className='row'>
          <div className='col-md col-xl-4 col-sm '>
            <div class="card text-bg-light" >
              <img src={Buisidea} class="card-img-top img-on" alt="dfff" />
              <div class="card-img-overlay top13 d-flex">
                <p class="card-text c-price me-2 "><small>$80</small></p>

                <p class="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
              <div class="card-body">
                <h3 class="card-title fw-medium">Buisness Idea</h3>
                <p class="card-text"> Lecture <a href='#'>Admin</a> In <a href='#'>Buisness Startegy</a> </p>
                <hr />
                <p className='card-text d-flex'>
                  <p className='one card-text '>Watch</p>
                  <p className='two card-text ms-5'>Time</p>
                  <p className='three card-text ms-5'>Saved</p>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md col-xl-4 col-sm'>
            <div class="card text-bg-light" >
              <img src={mbw} class="card-img-top img-on" alt="dfff" />
              <div class="card-img-overlay top13 d-flex">
                <p class="card-text c-price me-2 "><small>$80</small></p>

                <p class="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
              <div class="card-body">
                <h3 class="card-title fw-medium">Master Web-Design</h3>
                <p class="card-text"> Lecture <a href='#'>Admin</a> In <a href='#'>Buisness Startegy</a> </p>
                <hr />
                <p className='card-text d-flex'>
                <p className='one card-text '>Watch</p>
                <p className='two card-text ms-5'>Time</p>
                <p className='three card-text ms-5'>Saved</p>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md col-xl-4 col-sm'>
            <div class="card text-bg-light" >
              <img src={appde} class="card-img-top img-on" alt="dfff" />
              <div class="card-img-overlay top13 d-flex">
                <p class="card-text c-price me-2 "><small>$80</small></p>

                <p class="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
              <div class="card-body">
                <h3 class="card-title fw-medium">App Devlopment</h3>
                <p class="card-text"> Lecture <a href='#'>Admin</a> In <a href='#'>Buisness Startegy</a> </p>
                <hr />
                <p className='card-text d-flex'>
                <p className='one card-text '>Watch</p>
                  <p className='two card-text ms-5'>Time</p>
                  <p className='three card-text ms-5'>Saved</p>
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
