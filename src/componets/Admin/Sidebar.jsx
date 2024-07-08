import React from "react";
import '../../assets2/css/style-2.css'


export default function Sidebar() {
  return (
    <>
      <div id="wrapper bg-dark">
        <div id="page" className="">
          <div className="layout-wrap">
            <div className="section-menu-left">
            <ul className="sidebar-link m-0 p-0">
        <li>
          <a href="#">
            <img
              src="https://icon-library.com/images/admin-login-icon/admin-login-icon-11.jpg"
              className="img-fluid w-50 "
            />
          </a>
        </li>
        <li>
          <a href="#">
            <span className="bi bi-person" /> Manage Customers
          </a>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#" >
            <span className="bi bi-cart" /> Category
          </a>
          <ul className="dropdown-menu bg-white text-dark">
            <li>
              <a href="/adminlayout/addcatagory">
                <span className="bi bi-cart" /> Add Category
              </a>
            </li>
            <li>
              <a href="/adminlayout/managecatagory">
                <span className="bi bi-cart" /> Manage Category
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
            <span className="bi bi-cart" /> Add Products
          </a>
          <ul className="dropdown-menu bg-white text-dark">
            <li>
              <a href="/adminlayout/addProduct">
                <span className="bi bi-cart" /> Add Products
              </a>
            </li>
            <li>
              <a href="/adminlayout/manageProduct">
                <span className="bi bi-cart" /> Manage Products
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="bi bi-bell" /> Manage Orders
          </a>
        </li>
        <li>
          <a href="#">
            <span className="bi bi-phone" /> Manage Contacts
          </a>
        </li>
        <li>
          <a href="#">
            <span className="bi bi-command" /> Manage Reviews
          </a>
        </li>
        {/* <li><a href="#" class="btn btn-sm btn-danger text-white" onclick="return confirm('Are you sure to Logout ?')"><span class="bi bi-power"></span> Logout ?</a></li> */}
        <li>
          <a
            href="#"
            className="btn btn-sm btn-danger text-white"
            data-bs-toggle="modal"
            data-bs-target="#lg"
          >
            <span className="bi bi-power" /> Logout ?
          </a>
        </li>
      </ul>
          </div>
          </div>
        </div>
      </div>

       {/* <div>
              <div className="box-logo">
                <a href="index.html" id="site-logo-inner">
                  <img
                    className=""
                    id="logo_header"
                    alt=""
                    src="src/assets2/images/logo/logo.png"
                  />
                </a>
                <div className="button-show-hide">
                  <i className="icon-menu-left" />
                </div>
              </div>
              <div className="center">
                <div className="center-item">
                  <div className="center-heading">Main Home</div>
                  <ul className="menu-list">
                    <li className="menu-item has-children ">
                      <a href="home-3.html" className="menu-item-button">
                        <div className="icon">
                          <i className="icon-grid" />
                        </div>
                        <div className="text">Dashboard</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="center-item">
                  <div class="center-heading">All page</div>

                  <ul class="menu-list">
                    <div className="dropdown">
                      <li className="menu-item has-children ">
                        <button
                          type="button"
                          className="dropdown-toggle text"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-cart" />
                          Ecommerce
                        </button>
                        <ul class="sub-menu dropdown-menu">
                          <li class="sub-menu-item">
                            <a href="#" className="text dropdown-item">
                              Add Product
                            </a>
                          </li>
                          <li className="sub-menu-item">
                            <a
                              href="product-list.html"
                              className="text dropdown-item"
                            >
                              Product List
                            </a>
                          </li>
                        </ul>
                      </li>
                    </div>
                    <li class="menu-item has-children">
                      <a href="javascript:void(0);" class="menu-item-button">
                        <div class="icon">
                          <i class="icon-layers"></i>
                        </div>
                        <div class="text">Category</div>
                      </a>
                      <ul class="sub-menu">
                        <li class="sub-menu-item">
                          <a href="category-list.html" class="">
                            <div class="text">Category list</div>
                          </a>
                        </li>
                        <li class="sub-menu-item">
                          <a href="new-category.html" class="">
                            <div class="text">New category</div>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="menu-item has-children">
                      <a href="javascript:void(0);" class="menu-item-button">
                        <div class="icon">
                          <i class="icon-file-plus"></i>
                        </div>
                        <div class="text">Order</div>
                      </a>
                      <ul class="sub-menu">
                        <li class="sub-menu-item">
                          <a href="oder-list.html" class="">
                            <div class="text">Order list</div>
                          </a>
                        </li>
                        <li class="sub-menu-item">
                          <a href="oder-detail.html" class="">
                            <div class="text">Order detail</div>
                          </a>
                        </li>
                        <li class="sub-menu-item">
                          <a href="oder-tracking.html" class="">
                            <div class="text">Order tracking</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item has-children">
                      <a href="javascript:void(0);" class="menu-item-button">
                        <div class="icon">
                          <i class="icon-user"></i>
                        </div>
                        <div class="text">User</div>
                      </a>
                      <ul class="sub-menu">
                        <li class="sub-menu-item">
                          <a href="all-user.html" class="">
                            <div class="text">All user</div>
                          </a>
                        </li>
                        <li class="sub-menu-item">
                          <a href="add-new-user.html" class="">
                            <div class="text">Add new user</div>
                          </a>
                        </li>
                        <li class="sub-menu-item">
                          <a href="login.html" class="">
                            <div class="text">Login</div>
                          </a>
                        </li>
                        <li class="sub-menu-item">
                          <a href="sign-up.html" class="">
                            <div class="text">Sign up</div>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="menu-item">
                      <a href="report.html" class="">
                        <div class="icon">
                          <i class="icon-pie-chart"></i>
                        </div>
                        <div class="text">Report</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="center-item">
                  <div className="center-heading">Setting</div>
                  <ul className="menu-list">
                    <li className="menu-item has-children">
                      <a
                        href="javascript:void(0);"
                        className="menu-item-button"
                      >
                        <div className="icon">
                          <i className="icon-map-pin" />
                        </div>
                        <div className="text">Location</div>
                      </a>
                      <ul className="sub-menu">
                        <li className="sub-menu-item">
                          <a href="countries.html" className="">
                            <div className="text">Countries</div>
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="states.html" className="">
                            <div className="text">States</div>
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="cities.html" className="">
                            <div className="text">Cities</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="setting.html" className="">
                        <div className="icon">
                          <i className="icon-settings" />
                        </div>
                        <div className="text">Setting</div>
                      </a>
                    </li>
                    <li className="menu-item has-children">
                      <a
                        href="javascript:void(0);"
                        className="menu-item-button"
                      >
                        <div className="icon">
                          <i className="icon-edit" />
                        </div>
                        <div className="text">Pages</div>
                      </a>
                      <ul className="sub-menu">
                        <li className="sub-menu-item">
                          <a href="list-page.html" className="">
                            <div className="text">List page</div>
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="new-page.html" className="">
                            <div className="text">New page</div>
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="edit-page.html" className="">
                            <div className="text">Edit page</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="center-item">
                  <div className="center-heading">Support</div>
                  <ul className="menu-list">
                    <li className="menu-item">
                      <a href="#" className="">
                        <div className="icon">
                          <i className="icon-help-circle" />
                        </div>
                        <div className="text">Help center</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="">
                        <div className="icon"></div>
                        <div className="text">FAQs</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="">
                        <div className="icon"></div>
                        <div className="text">Privacy policy</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="center-item">
                  <div className="center-heading">Connect us</div>
                </div>
              </div>
              <div className="bot text-center">
                <div className="wrap">
                  <div className="mb-20">
                    <img src="images/menu-left/img-bot.png" alt="" />
                  </div>
                  <div className="mb-20">
                    <h6>Hi, how can we help?</h6>
                    <div className="text">
                      Contact us if you have any assistance, we will contact you
                      as soon as possible
                    </div>
                  </div>
                  <a href="#" className="tf-button w-full">
                    Contact
                  </a>
                </div>
              </div>
            </div> */}
    </>
  );
}
