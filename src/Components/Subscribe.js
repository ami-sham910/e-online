import React from 'react'
import '../App.css'
import subsim from './Images/subscribe-women.png'

export default function Subscribe() {
    return (
        <div className='container subscribe mt-20  newss'>
            <div className='row'>
                <div className='col-md-8 col-xl-8  back'>
                  <div className=' align-item-center'>
                  <h3 className='ms-5'>Subscribe Our News Settler</h3>
                  <p className='ms-5'>Subscribe Our News Settler Subscribe Our News Settler Subscribe Our News Settler <br /> Web Design</p>
                  <input className='search' type='text' placeholder='Search' />
                  <button className='bt ser-btn' type='submit'>Subscribe</button>
                  </div>
                </div>
                <div className='col-xl-4 col-md-4 back'>
                    <img className='d-felx justify-content-center' src={subsim} alt='girl' />
                </div>
            </div>
        </div>
    )
}
