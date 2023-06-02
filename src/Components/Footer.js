import React from 'react'
import '../App.css'
import logo from './Images/logo.png'

export default function () {
    return (

        <div className='container-fluid mt-5 Main_nav'>
            <div className='container container-xl container-md container-sm mt-5'>
                <div className='row'>
                    <div className='col-md-2 col-sm-2 col-xl-3 mt-5'>
                        <img src={logo} alt='logo' />
                        <h3 className='mt-5'>Privacy Policy</h3>
                        <p className='mt-3'> CopyRight &copy; 2022 MS SHAM</p>
                    </div>
                    <div className='col-md-2 col-sm-2 col-xl-2 mt-5'>
                        <h4 className='home'>Home</h4>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Home</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>About</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Courses</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Services</a> </li>
                        </ul>
                    </div>
                    <div className='col-md-2 col-sm-2 col-xl-2 mt-5'>
                        <h4 className='home'>Latest Courses</h4>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Genral Science</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Web Development</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Civil Engineer</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Buisness Studies</a> </li>
                        </ul>
                    </div>
                    <div className='col-md-2 col-sm-2 col-xl-2 mt-5'>
                        <h4 className='home'>Comminuity</h4>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Go Premium</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Team Plans</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Refer A Friend</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Gift Cards</a> </li>
                        </ul>
                    </div>
                    <div className='col-md-2 col-sm-2 col-xl-2 mt-5'>
                        <h4 className='home'>Stay Conected</h4>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Twitter</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Facebook</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Youtube</a> </li>
                            <li className='nav-list'><a className='nav-link fw-semobold' href='#'>Instagram</a> </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}
