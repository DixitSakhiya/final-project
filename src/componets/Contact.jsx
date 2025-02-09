import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
  return (
    <>
      <Navbar/>

      <main id="mt-main">
  {/* Mt Contact Banner of the Page */}
  <section
    className="mt-contact-banner wow fadeInUp"
    data-wow-delay="0.4s"
    style={{ backgroundImage: "url(src/assets/images/img06.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>CONTACT</h1>
          <nav className="breadcrumbs">
            <ul className="list-unstyled">
              <li>
                <a href="index.html">
                  Home <i className="fa fa-angle-right" />
                </a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* Mt Contact Banner of the Page */}
  {/* Mt Contact Detail of the Page */}
  <section
    className="mt-contact-detail content-info wow fadeInUp"
    data-wow-delay="0.4s"
  >
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-8">
          <div className="txt-wrap">
            <h2>schön. chair maker</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut <br />
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut <br />
              aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <ul className="list-unstyled contact-txt">
            <li>
              <strong>Address</strong>
              <address>
                Suite 18B, 148 Connaught Road <br />
                Central <br />
                New Yankee
              </address>
            </li>
            <li>
              <strong>Phone</strong>
              <a href="#">+1 (555) 333 22 11</a>
            </li>
            <li>
              <strong>E_mail</strong>
              <a href="#">info@schon.chair</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4">
          <h2>Have a question?</h2>
          {/* Contact Form of the Page */}
          <form action="#" className="contact-form">
            <fieldset>
              <input type="text" className="form-control" placeholder="Name" />
              <input
                type="email"
                className="form-control"
                placeholder="E-Mail"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
              <textarea
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
              <button className="btn-type3" type="submit">
                Send
              </button>
            </fieldset>
          </form>
          {/* Contact Form of the Page end */}
        </div>
      </div>
    </div>
  </section>
  {/* Mt Contact Detail of the Page end */}
  {/* Mt Map Holder of the Page */}
  <div
    className="mt-map-holder wow fadeInUp"
    data-wow-delay="0.4s"
    data-lat="52.392363"
    data-lng="1.480408"
    data-zoom={8}
  >
    <div className="map-logo">
      <a href="#">
        <img src="src/assets/images/map-logo.png" alt="Schon" />
      </a>
    </div>
  </div>
  {/* Mt Map Holder of the Page end */}
</main>


      <Footer/>

    </>
  )
}

 
