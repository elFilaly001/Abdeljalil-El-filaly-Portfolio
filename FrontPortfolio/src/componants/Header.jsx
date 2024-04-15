
export default function Header() {

    return (
      <>
        <header className="site-header default-header-style">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-12">
					<div className="navigation-area">
						
						<div className="site-branding">
							<a href="index.html">
								<img src="src/assets/images/logo/logo.png" alt="Site Logo" />
							</a>
						</div>

						
						<div className="site-navigation">
							<nav className="navigation">
								
								<div className="menu-wrapper">
									<div className="menu-content">
										<ul className="mainmenu">
											<li>
												<a className="nav-link" href="#hero-block">Home</a>
											</li>
											<li>
												<a className="nav-link" href="#service-block">Services</a>
											</li>
											<li>
												<a className="nav-link" href="#about-block">About</a>
											</li>
											<li>
												<a className="nav-link" href="#portfolio-block">Portfolio</a>
											</li>
											<li>
												<a className="nav-link" href="#blog-block">Blogs</a>
											</li>
											<li>
												<a className="nav-link" href="#contact-block">Contact</a>
											</li>
										</ul> 
									</div> 
								</div>
							</nav>
						</div>
						<div className="hamburger-menus">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="mobile-sidebar-menu sidebar-menu">
			<div className="overlaybg"></div>
		</div>
	</header>
      </>
    );
}