import React from 'react'
import '../App.css';
import appde from './Images/app-development.jpg'
import insta from './Logo/instagram.svg'
import fb from './Logo/facebook.svg'
import twitter from './Logo/twitter.svg'
import v from './Logo/vimeo-v.svg'


export default function Instructur() {
    return (
        <div className='container container-xl container-xl mt-5'>
            <div className='container'>
                <h1>Our Instructur</h1>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-3'>
                        <div class="card text-bg-light" >
                            <img src={appde} class="card-img-top img-on" alt="dfff" />
                            <div class="card-img-overlay top9 d-flex">
                                <img class="card-text c-price me-2 " src={insta} alt='insta' />
                                <img class="card-text c-price me-2 " src={fb} alt='insta' />
                                <img class="card-text c-price me-2 " src={v} alt='insta' />
                                <img class="card-text c-price me-2 " src={twitter} alt='insta' />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title d-flex justify-content-center fw-medium">Jesus Pinkman</h3>
                                <p class="card-text d-flex justify-content-center">UI&UX Designer </p>
                                <hr />
                                <p className='card-text d-flex'>
                                    <p className='one card-text '>2006</p>
                                    <p className='two card-text ms-9 d-flex justify-content-end'>12 Courses</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3'>
                        <div class="card text-bg-light" >
                            <img src={appde} class="card-img-top img-on" alt="dfff" />
                            <div class="card-img-overlay top9 d-flex">
                                <img class="card-text c-price me-2 " href={insta} alt='insta' />
                                <img class="card-text c-price me-2 " href={fb} alt='insta' />
                                <img class="card-text c-price me-2 " href={v} alt='insta' />
                                <img class="card-text c-price me-2 " href={twitter} alt='insta' />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title d-flex justify-content-center fw-medium">Jesus Pinkman</h3>
                                <p class="card-text d-flex justify-content-center">UI&UX Designer </p>
                                <hr />
                                <p className='card-text d-flex'>
                                    <p className='one card-text '>2006</p>
                                    <p className='two card-text ms-9 d-flex justify-content-end'>12 Courses</p>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-6 col-xl-3'>
                        <div class="card text-bg-light" >
                            <img src={appde} class="card-img-top img-on" alt="dfff" />
                            <div class="card-img-overlay top9 d-flex">
                                <img class="card-text c-price me-2 " href={insta} alt='insta' />
                                <img class="card-text c-price me-2 " href={fb} alt='insta' />
                                <img class="card-text c-price me-2 " href={v} alt='insta' />
                                <img class="card-text c-price me-2 " href={twitter} alt='insta' />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title d-flex justify-content-center fw-medium">Jesus Pinkman</h3>
                                <p class="card-text d-flex justify-content-center">UI&UX Designer </p>
                                <hr />
                                <p className='card-text d-flex'>
                                    <p className='one card-text '>2006</p>
                                    <p className='two card-text ms-9 d-flex justify-content-end'>12 Courses</p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3'>
                    <div class="card text-bg-light" >
                        <img src={appde} class="card-img-top img-on" alt="dfff" />
                        <div class="card-img-overlay top9 d-flex">
                        <img class="card-text c-price me-2 " href={insta} alt='insta' />
                        <img class="card-text c-price me-2 " href={fb} alt='insta' />
                        <img class="card-text c-price me-2 " href={v} alt='insta' />
                        <img class="card-text c-price me-2 " href={twitter} alt='insta' />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title d-flex justify-content-center fw-medium">Jesus Pinkman</h3>
                            <p class="card-text d-flex justify-content-center">UI&UX Designer </p>
                            <hr />
                            <p className='card-text d-flex'>
                                <p className='one card-text '>2006</p>
                                <p className='two card-text ms-9 d-flex justify-content-end'>12 Courses</p>
                                
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div >
    )
}
