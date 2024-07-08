import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Aboutus() {
  return (
    <>
    <Navbar/>
    <section
  className="mt-contact-banner wow fadeInUp"
  data-wow-delay="0.4s"
  style={{ backgroundImage: "url(src/assets/images/img43.jpg)" }}
>
  <div className="container">
    <div className="row">
      <div className="col-xs-12 text-center">
        <h1>ABOUT US</h1>
        <nav className="breadcrumbs">
          <ul className="list-unstyled">
            <li>
              <a href="index.html">
                home <i className="fa fa-angle-right" />
              </a>
            </li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

<section className="mt-about-sec">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="txt wow fadeInUp" data-wow-delay="0.4s">
          <h2>WHO WE ARE?</h2>
          <p>
            Morbi in erat malesuada, sollicitudin massa at, tristique nisl.
            Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Umco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit sse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat{" "}
            <strong>
              Vestibulum sit amet metus euismod, condimentum lectus id, ultrices
              sem.
            </strong>
          </p>
          <p>
            Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut.
            Vestibulum sit amet metus euismod, condimentum lectus id, ultrices
            sem. Morbi in erat malesuada, sollicitudin massa at,{" "}
          </p>
        </div>
        <div className="mt-follow-holder">
          <span className="title">Follow Us</span>
          {/* Social Network of the Page */}
          <ul className="list-unstyled social-network">
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-whatsapp" />
              </a>
            </li>
          </ul>
          {/* Social Network of the Page end */}
        </div>
      </div>
    </div>
  </div>
</section>


<section className="mt-team-sec">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h3>OUR TEAM</h3>
        <div className="holder">
          {/* col of the Page */}
          <div className="col wow fadeInUp" data-wow-delay="0.4s">
            <div className="img-holder">
              <a href="#">
                <img src="src/assets/images/img44.jpg" alt="CLARA WOODEN" />
                <ul className="list-unstyled social-icon">
                  <li>
                    <i className="fa fa-twitter" />
                  </li>
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                  <li>
                    <i className="fa fa-linkedin" />
                  </li>
                </ul>
              </a>
            </div>
            <div className="mt-txt">
              <h4>
                <a href="#">CLARA WOODEN</a>
              </h4>
              <span className="sub-title">DESIGNER</span>
            </div>
          </div>
          {/* col of the Page end */}
          {/* col of the Page */}
          <div className="col wow fadeInUp" data-wow-delay="0.6s">
            <div className="img-holder">
              <a href="#">
                <img src="src/assets/images/img45.jpg" alt="JOHN WICK" />
                <ul className="list-unstyled social-icon">
                  <li>
                    <i className="fa fa-twitter" />
                  </li>
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                  <li>
                    <i className="fa fa-linkedin" />
                  </li>
                </ul>
              </a>
            </div>
            <div className="mt-txt">
              <h4>
                <a href="#">JOHN WICK</a>
              </h4>
              <span className="sub-title">FOUNDER</span>
            </div>
          </div>
          {/* col of the Page end */}
          {/* col of the Page */}
          <div className="col wow fadeInUp" data-wow-delay="0.8s">
            <div className="img-holder">
              <a href="#">
                <img src="src/assets/images/img46.jpg" alt="HARRY KANE" />
                <ul className="list-unstyled social-icon">
                  <li>
                    <i className="fa fa-twitter" />
                  </li>
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                  <li>
                    <i className="fa fa-linkedin" />
                  </li>
                </ul>
              </a>
            </div>
            <div className="mt-txt">
              <h4>
                <a href="#">HARRY KANE</a>
              </h4>
              <span className="sub-title">DESIGNER</span>
            </div>
          </div>
          {/* col of the Page end */}
          {/* col of the Page */}
          <div className="col wow fadeInUp" data-wow-delay="0.10s">
            <div className="img-holder">
              <a href="#">
                <img src="src/assets/images/img47.jpg" alt="CLARA WOODEN" />
              </a>
            </div>
          </div>
          {/* col of the Page end */}
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mt-workspace-sec wow fadeInUp" data-wow-delay="0.4s">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h2>OUR WORKSPACE</h2>
      </div>
    </div>
  </div>
  {/* Work Slider of the Page */}
  <ul className="list-unstyled work-slider">
    <li>
      <div className="img-holder">
        <img src="src/assets/images/img48.jpg" alt="image description" />
      </div>
      <div className="img-holder">
        <div className="coll1">
          <img src="src/assets/images/img49.jpg" alt="image description" />
        </div>
        <div className="coll2">
          <img src="src/assets/images/img50.jpg" alt="image description" />
        </div>
        <div className="coll3">
          <img src="src/assets/images/img51.jpg" alt="image description" />
        </div>
      </div>
    </li>
  </ul>
  {/* Work Slider of the Page end */}
</section>


<Footer/>


    </>
  )
}


