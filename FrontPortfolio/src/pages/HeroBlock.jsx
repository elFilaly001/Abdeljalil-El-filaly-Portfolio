export default function HeroBlock() {
    return (
      <>
        <div
          id="hero-block"
          className="hero-block personal-home bg-image"
          style={{
            backgroundImage:
              "url('src/assets/images/7O2A0165-removebg-preview.png')",
            backgroundSize: "32rem",
            backgroundPosition: "90% 99%",
          }}
        >
          <div id="particles-js"></div>
          <div
            className="waves-effect bottom"
            style={{
              backgroundImage: "url('src/assets/images/others/shape.png')",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content-area">
                  <div className="hero-desc">
                    Hello <span></span> I am
                  </div>
                  <h2 className="hero-title">Abdeljalil El Filaly</h2>
                  <ul className="hero-services">
                    <li>Full-Stack Developer</li>
                  </ul>
                  <a href="#" className="btn btn-primary">
                    My Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}