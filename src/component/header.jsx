import React from 'react'
import logo from '../assets/mainlogo.png'
import {FaPhone, FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <header class="header">
	<div class="row">
		<div class="col-md-2">
			<div class="site-logo">
				<a href="/"><img src={logo} alt='Logo' /></a>
			</div>
		</div>
		<div class="col-md-8">
			<div class="main-menu">
				<ul>
					<li class="active"><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/faq">FAQs</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><a href="/">Buy a Vehicle</a></li>					
				</ul>
				<div class="phone">
					<a href="tel:123456789"><FaPhone /></a>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="side-menu">
				<a href="/" class="menu-btn"><FaBars /></a>
			</div>
		</div>
	</div>
</header>
    </>
  )
}

export default Header