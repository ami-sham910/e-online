import React from 'react'
import '../App.css';
import icon1 from './Images/icon-one.png';
import icon2 from './Images/icon-two.png'
import icon3 from './Images/icon-three.png'

export default function Crousel() {
  return (
    <div className='container  enroll'>
      <div className='row'>
        <div className='col-md-4 col-sm-4  col-xl me-2 enrl2 d-flex justify-content-center align-items-center '>
          <img src={icon1} alt='hello'/>
          <h5 className=' fw-bold ms-5 mt-3'>
            Enroll Students
            <p className='d-flex justify-content-center mt-2 fw-medium'>10000+</p>
          </h5>
        </div>

        <div className='col-md-4 col-sm-4 me-2 col-xl d-flex justify-content-center align-items-center enrl2'>
          <img src={icon2} alt='hello'/>
          <h5 className=' ms-5 mt-3 fw-bold'>
            Online Courses
            <p className='d-flex justify-content-center mt-2 fw-medium'>1200+</p>
          </h5>
        </div>

        <div className='col-md-4 col-sm-4 col-xl d-flex justify-content-center align-items-center  enrl2'>
          <img className='justify-content-center' src={icon3} alt='hello'/>
          <h5 className=' ms-5 mt-3 fw-bold'>
            Expert Instructure
            <p className='d-flex justify-content-center mt-2 fw-medium'>80000+</p>
          </h5>
        </div>

      </div>
    </div>

  )
}
