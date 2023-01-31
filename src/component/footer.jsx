import React from 'react'
import chat from '../assets/chat.png'

const Footer = () => {
  return (
    <>
    <footer class="main-footer">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-3">
						<div class="footer-heading">
							<h4>Timberline</h4>
							<ul>
								<li><a href="/">About us</a></li>
								<li><a href="/">Terms and condtions</a></li>
								<li><a href="/">Insurance</a></li>
								<li><a href="/">Legal disclaimer</a></li>
								<li><a href="/">HR</a></li>
								<li><a href="/">Corporate Service</a></li>
								<li><a href="/">Personal Service</a></li>
							</ul>
						</div>
					</div>
					<div class="col-md-3">
						<div class="footer-heading">
							<h4>Fleet</h4>
							<ul>
								<li><a href="/">Standard</a></li>
								<li><a href="/">Standard Plus</a></li>
								<li><a href="/">Sedan Classic</a></li>
								<li><a href="/">Sedan Full</a></li>
								<li><a href="/">Sedan Full Automatic</a></li>
								<li><a href="/">Family</a></li>
								<li><a href="/">Green Concept</a></li>
								<li><a href="/">Adventure</a></li>
								<li><a href="/">Adventure 4x4</a></li>
								<li><a href="/">Executive</a></li>
								<li><a href="/">Vip</a></li>
								<li><a href="/">See All</a></li>
							</ul>
						</div>
					</div>
					<div class="col-md-4">
						<div class="footer-heading">
							<h4>Location</h4>
							<ul>
								<li>1235 N Woodruff Ave, Idaho Falls, ID 83401 Idaho Falls, ID 83401</li>
							</ul>
						</div>
					</div>
					<div class="col-md-2">
						<div class="footer-heading">
							<h4>Franchising</h4>
							<ul>
								<li><a href="/">The Timberline Franchise</a></li>
								<li><a href="/">Benefits of a Franchise</a></li>
								<li><a href="/">Contact Form</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-md-6">
				<div class="footer-info">
					<ul>
						<li><a href="tel:1166495836">Whatsapp 1166495836</a></li>
						<li><a href="tel:(208) 523-1053">Call (208) 523-1053</a></li>
						<li><strong>Headquarters:</strong>1235 N Woodruff Ave, Idaho Falls, ID 83401</li>
					</ul>
					
					<div class="social-icon">
						<ul>
							<li><a href="/"><i class="fa fa-facebook"></i></a></li>
							<li><a href="/"><i class="fa fa-youtube-play"></i></a></li>
							<li><a href="/"><i class="fa fa-twitter"></i></a></li>
							<li><a href="/"><i class="fa fa-instagram"></i></a></li>
							<li><a href="/"><i class="fa fa-facebook"></i></a></li>
						</ul>
						<div class="chat">
							<a href="/"><img src={chat} alt="Chat"/></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
<div class="bottom-footer">
	<div class="container">
		<div class="copyright">
			<p>© timberline car and truck rentals all right reserved. created by <a href="/" target="_blank">anax designs</a></p>
		</div>
	</div>
</div>
    </>
  )
}

export default Footer