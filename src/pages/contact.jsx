import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
const Contact = () => {
  return (
    <>
    <div className='inner-banner'>
      <div className='container'>
        <h3>Contact</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><span className='sap'><FaAngleRight /></span></li>
          <li><span>Contact</span></li>
        </ul>
      </div>
    </div>

    <div className='inner-page'>
        <div className='contact-area'>
            <div className='container'>
                <div className='map'>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798953385!2d-74.2598694625961!3d40.697670066951815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1674240197326!5m2!1sen!2s' title="This is a unique title"></iframe>
                </div>
                <div className='contact___box'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='contact-form'>
                                <h3>Send Message</h3>
                                <form>
                                    <div className='row'>
                                        <div class="col-md-6"><input type="text" name="username" placeholder="Name*" /></div>
                                        <div class="col-md-6"><input type="email" name="email" placeholder="Email*" /></div>
                                        <div class="col-md-12"><textarea placeholder="Your Message*" ></textarea></div>
                                        <div class="col-md-12"><div className='btn-bs'><button type="submit" class="custom-btn">Send Message</button></div></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact