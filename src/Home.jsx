import React from 'react'
import '../src/index.css'
import { NavLink } from 'react-router-dom'
import web from '../src/images/home.png'
import Common from './Common'

function Home() {
    return (
        <div>
            {/* <section id='header' className="d-flex align-items-center">

                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                             <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1 className='h1'>Grow your business with <strong>Abc</strong></h1>
                                <h2 className='my-5'>
                                    We are the team of talented developers who are making strong responsive website
                                </h2>
                                <div className="mt-3">
                                    <NavLink to='/service' className=' btn-get-started'>Get Started</NavLink>
                                </div>
                             </div>

                             <div className="col-lg-6 order-1 order-lg-2 header-img">
                                 <img src={home}className="img-fluid animated" alt=""/>
                             </div>
                             </div>
						</div>
					</div>
                </div>
            </section> */}
            <Common name='Grow your business with' 
            imgsrc={web} 
            visit="/service"
            btname="Get Started" />
        </div>
    )
}

export default Home
