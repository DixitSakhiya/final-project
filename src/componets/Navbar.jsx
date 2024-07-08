import React from 'react'
import Logo from '../assets/images/mt-logo.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
   <>
   <div id="wrapper">
		
		<div class="w1">
   <header id="mt-header" className="style17">
  <div className="mt-top-bar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6 hidden-xs">
          <span className="tel">
            {" "}
            <i className="fa fa-phone" aria-hidden="true" /> +1 (555) 333 22 11
          </span>
          <a href="#" className="tel">
            {" "}
            <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
            info@schon.chairs
          </a>
        </div>
        <div className="col-xs-12 col-sm-6 text-right">
          <ul className="mt-top-list2">
            <li>
              <a href="#">Checkout</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-bottom-bar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <div className="mt-logo">
            <a href="#">
            <img src={Logo} alt="schon" />
            </a>
          </div>
          <ul className="mt-icon-list">
            <li className="hidden-lg hidden-md">
              <a href="#" className="bar-opener mobile-toggle">
                <span className="bar" />
                <span className="bar small" />
                <span className="bar" />
              </a>
            </li>
            <li>
              <a href="#" className="icon-magnifier" />
            </li>
            <li className="drop">
              <a href="#" className="icon-heart cart-opener">
                {/* <span style={{ marginBottom: "-3px" }} className="num">
                  
                </span> */}
              </a>
            </li>
            <li className="drop">
              <Link to="/viewcart" className="cart-opener">
                <span className="icon-handbag" />
                {/* <span className="num"></span> */}
              </Link>
            </li>
          </ul>
          <nav id="nav">
            <ul>
              <li>
                <Link to="/">
                  HOME{" "}
                  <i
                    className="fa fa-angle-down hidden-lg hidden-md"
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li>
                <Link to="/product">
                  PRODUCTS
                  <i
                    className="fa fa-angle-down hidden-lg hidden-md"
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact{" "}
                  <i
                    className="fa fa-angle-down hidden-lg hidden-md"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <span className="mt-side-over" />
</header>
</div>
</div>

   </>
  )
}


