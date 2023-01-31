import React from 'react'
import logo from '../assets/mainlogo.png'

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
					<li class="active"><a href="/">Home</a></li>
					<li><a href="/">About Us</a></li>
					<li><a href="/">Buy a Vehicle</a></li>
					<li><a href="/">FAQs</a></li>
					<li><a href="/">Contact Us</a></li>
				</ul>
				<div class="phone">
					<a href="tel:123456789"><i class="fa fa-phone"></i></a>
				</div>
			</div>
		</div>
		<div class="col-md-2">
			<div class="side-menu">
				<a href="/" class="menu-btn"><i class="fa fa-bars"></i></a>
			</div>
		</div>
	</div>
</header>
    </>
  )
}

export default Header