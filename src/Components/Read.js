import React from 'react'
import '../App.css';
import buisness from './Images/business-one.jpg'
export default function
    () {
    return (
        <div className='container mt-5 mb-3' read>
            <div className='container d-flex ju'>
                <h3 className='fw-semibold '>Read Our Blogs  </h3>
                <button className="btn btn-outline-success me-5 d-flex justify-content-end" type="submit">See All</button>

            </div>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 col-md-4 col-xl-4'>
                        <div class="card text-bg-light" >
                            <img src={buisness} class="card-img-top img-on" alt="dfff" />
                            <div class="card-img-overlay top13 d-flex">
                                <p class="card-text c-price me-2 "><small>$80</small></p>

                                <p class="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card-body">
                                <p class="card-text d-flex justify-content-start">April 22 2020 <p class="card-text d-flex ms-5">4 Comments</p>  </p>
                                <h5 class="card-title fw-medium">catalog, you can get access to the latest skills. Log in to see deals on</h5>
                                <button className=' bg-none'>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-4 col-xl-4'>
                        <div class="card text-bg-light" >
                            <img src={buisness} class="card-img-top img-on" alt="dfff" />
                            <div class="card-img-overlay top13 d-flex">
                                <p class="card-text c-price me-2 "><small>$80</small></p>

                                <p class="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card-body">
                                <p class="card-text d-flex justify-content-start">April 22 2020 <p class="card-text d-flex ms-5">4 Comments</p>  </p>
                                <h5 class="card-title fw-medium">catalog, you can get access to the latest skills. Log in to see deals on</h5>
                                <button className=' bg-none'>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-4 col-xl-4'>
                        <div class="card text-bg-light" >
                            <img src={buisness} class="card-img-top img-on" alt="dfff" />
                            <div class="card-img-overlay top13 d-flex">
                                <p class="card-text c-price me-2 "><small>$80</small></p>

                                <p class="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card-body">
                                <p class="card-text d-flex justify-content-start">April 22 2020 <p class="card-text d-flex ms-5">4 Comments</p>  </p>
                                <h5 class="card-title fw-medium">catalog, you can get access to the latest skills. Log in to see deals on</h5>
                                <button className=' bg-none'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
