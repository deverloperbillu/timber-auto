import React from 'react'
import counter from '../assets/counter.jpg'
import ReactOwlCarousel from 'react-owl-carousel'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import { Link } from 'react-router-dom'
import {FaAngleRight} from 'react-icons/fa'
const About = () => {
  return (
    <>
    <div className='inner-banner'>
      <div className='container'>
        <h3>About</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><span className='sap'><FaAngleRight /></span></li>
          <li><span>About</span></li>
        </ul>
      </div>
    </div>
    <div className='inner-page'>
        <div className='our_vission'>
            <div className='container'>
                <div className='custom-heading'>
                    <h2>Our Vision</h2>
                    <p>Inbecilloque elegans errorem concedo etsi electram.</p>
                </div>
                <div className='vission_box'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='vission_item'>
                                <h3>Best Price Guarantee</h3>
                                <p>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='vission_item'>
                                <h3>Best Price Guarantee</h3>
                                <p>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='vission_item'>
                                <h3>Best Price Guarantee</h3>
                                <p>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='vission_item'>
                                <h3>Best Price Guarantee</h3>
                                <p>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='counter'>
            <figure><img src={counter} alt="watch-video-cover" /></figure>
            <div className='counter-inner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='counter-box'>
                            <span>350</span>
                            <p>Cars For Rent</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='counter-box'>
                            <span>350</span>
                            <p>Cars For Rent</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='counter-box'>
                            <span>350</span>
                            <p>Cars For Rent</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='counter-box'>
                            <span>350</span>
                            <p>Cars For Rent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='our_partners'>
            <div className='container'>
                <div className='custom-heading'>
                    <h2>Our Partners</h2>
                    <p>Inbecilloque elegans errorem concedo etsi electram.</p>
                </div>
                <ReactOwlCarousel className='owl-carousel owl-theme' items={4} loop={true} autoplay={true} dots={false} margin={30}>
                    <div className='car-box'>
                        <figure><img src={partner1} alt="Cars" /></figure>
                    </div>
                    <div className='car-box'>
                        <figure><img src={partner2} alt="Cars" /></figure>
                    </div>
                    <div className='car-box'>
                        <figure><img src={partner3} alt="Cars" /></figure>
                    </div>
                    <div className='car-box'>
                        <figure><img src={partner4} alt="Cars" /></figure>
                    </div>
                </ReactOwlCarousel>
            </div>
        </div>
    </div>
    </>
  )
}

export default About