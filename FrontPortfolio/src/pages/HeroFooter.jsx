export default function Footer() {
    return (
        <>
        <footer id="contact-block" className="site-footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-block">
							<div className="section-title">
								<h2 className="title-main">
									07 <span>Contact</span>
								</h2>
								<p className="sub-title">Don’t Hesitate To Contact With Us</p>
							</div>
							<div className="contact-form-area">
								<form id="contact_form" className="contact-form" action="#">
									<div className="row gx-4">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input id="name" name="name" type="text" className="form-control" placeholder="Your Name*"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input className="form-control" id="email" name="email" type="email" placeholder="Your Email*"/>
											</div>
										</div>
										
										<div className="col-12">
											<div className="form-group">
												<textarea id="message" name="message" className="form-control" rows="4"
													placeholder="Anything that we can help you?"></textarea>
											</div>
										</div>
										<div className="col-12">
											<button type="submit" className="btn btn-primary">Send Me</button>
										</div>
										
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="footer-content-wrapper">
							<div className="footer-widget-area">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<aside className="widget widget_links">
											<h2 className="widget-title"><span>Quick Link</span></h2>
											<div className="widget-content">
												<ul>
													<li><a href="#">Portfolio</a></li>
													<li><a href="#">About</a></li>
													<li><a href="#">Services</a></li>
													<li><a href="blog.html">Blogs</a></li>
												</ul>
											</div>
										</aside>
									</div>
									
									<div className="col-lg-6 col-md-6">
										<aside className="widget widget_contact">
											<div className="widget-content">
												<div className="single-contact-info">
													<div className="icon">
														<i className="fas fa-envelope"></i>
													</div>
													<p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
												</div>
												<div className="single-contact-info">
													<div className="icon">
														<i className="fas fa-phone-alt"></i>
													</div>
													<p>88 - 021546569875</p>
												</div>
											</div>
										</aside>
									</div>
								</div>
							</div>
							<div className="copyright-text text-center">
								<p>Copyright @ <a href="#">HTMLguru </a> 2021</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
        </>
    );
}