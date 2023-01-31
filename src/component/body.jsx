import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import slider from '../assets/slider.jpg'
import service1 from '../assets/convenient24.jpg'
import service2 from '../assets/moreconvenient.jpg'
import service3 from '../assets/specialtreatment.jpg'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpeg'

const Body = () => {
  return (
    <>
    <ReactOwlCarousel className='owl-carousel owl-theme' items={1} loop={true} autoplay={true} dots={false}>
        <div className='main-slider'>
            <figure><img src={slider} alt="Slider" /></figure>
            <div className='slider-content'>
                <h1>Drive what you want!</h1>
            </div>
        </div>
        <div className='main-slider'>
            <figure><img src={slider} alt="Slider" /></figure>
            <div className='slider-content'>
                <h1>Drive what you want!</h1>
            </div>
        </div>
    </ReactOwlCarousel>
    <div className='booking-form-sec'>
        <div className='container'>
            <div className='form-main'>
                <div className='custom-heading'><h2>Booking Engine</h2></div>
                <form>
                    <div className='row'>
                        <div className='col-md-2'><input type="text" placeholder="City or airport code"/></div>
                        <div className='col-md-2'><input type="text" placeholder="Collection Date"/></div>
                        <div className='col-md-2'><input type="date" value="mm/dd/yy" /></div>
                        <div className='col-md-2'><input type="text" placeholder="Due Date"/></div>
                        <div className='col-md-2'><input type="date" value="mm/dd/yy" /></div>
                        <div className='col-md-2'><div className='form-btn'><input type="submit" value="Continue" /></div></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className='home-text'>
        <div className='container'>
        <p>“Timberline Auto has been selling quality reconditioned, pre-owned cars and trucks in Idaho Falls for decades. When you rent from Timberline, you’ll get the same reliable quality that Timberline is known for, plus, because every one of our rental vehicles is also for sale, when you love the car you rent, you can own it!”</p>
        </div>
    </div>
    <div className='service-sec'>
        <div className='container-fluid'>
        <ReactOwlCarousel className='service-slider owl-carousel owl-theme' items='3' loop={true} center margin={30} autoplay={true} dots={true}>
            <div class="single-item">
                <div class="item">
                    <div class="thumb"><a href="/"><img src={service1} alt="entry"/></a></div>
                    <div class="info">
                        <h4>Convenient 24/7/365 vehicle pickup and drop off</h4>
                    </div>
                </div>
            </div>
            <div class="single-item">
                <div class="item">
                    <div class="thumb"><a href="/"><img src={service2} alt="entry"/></a></div>
                    <div class="info">
                        <h4>More Convenient than a ride-sharing service</h4>
                    </div>
                </div>
            </div>
            <div class="single-item">
                <div class="item">
                    <div class="thumb"><a href="/"><img src={service3} alt="entry"/></a></div>
                    <div class="info">
                        <h4>Special treatment for airport customers</h4>
                    </div>
                </div>
            </div>
            <div class="single-item">
                <div class="item">
                    <div class="thumb"><a href="/"><img src={service1} alt="entry"/></a></div>
                    <div class="info">
                        <h4>Convenient 24/7/365 vehicle pickup and drop off</h4>
                    </div>
                </div>
            </div>
        </ReactOwlCarousel>
        </div>
    </div>
    <div className='home-blog'>
        <div className='container-fluid'>
            <div className='custom-heading'>
                <h2>Fun thing to do while in idaho</h2>
            </div>
            <ReactOwlCarousel className='blog-slider owl-carousel owl-theme' items='4' loop={true} margin={50} autoplay={true} dots={true}>
            <div class="single-item">
				<div class="item">
					<div class="thumb"><a href="/"><img src={blog1} alt="entry" /></a></div>
					<div class="info">
						<h4><a href="/">Scenic Drives near Idaho Falls Idaho</a></h4>
					</div>
				</div>
			</div>
            <div class="single-item">
				<div class="item">
					<div class="thumb"><a href="/"><img src={blog2} alt="entry" /></a></div>
					<div class="info">
						<h4><a href="/">Scenic Drives near Idaho Falls Idaho</a></h4>
					</div>
				</div>
			</div>
            <div class="single-item">
				<div class="item">
					<div class="thumb"><a href="/"><img src={blog3} alt="entry" /></a></div>
					<div class="info">
						<h4><a href="/">Scenic Drives near Idaho Falls Idaho</a></h4>
					</div>
				</div>
			</div>
            <div class="single-item">
				<div class="item">
					<div class="thumb"><a href="/"><img src={blog4} alt="entry" /></a></div>
					<div class="info">
						<h4><a href="/">Scenic Drives near Idaho Falls Idaho</a></h4>
					</div>
				</div>
			</div>
            <div class="single-item">
				<div class="item">
					<div class="thumb"><a href="/"><img src={blog1} alt="entry" /></a></div>
					<div class="info">
						<h4><a href="/">Scenic Drives near Idaho Falls Idaho</a></h4>
					</div>
				</div>
			</div>
            </ReactOwlCarousel>
        </div>
    </div>
    </>
  )
}

export default Body