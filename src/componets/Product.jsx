import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Product() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8000/addproducts`).then((response)=>{
      setData(response.data);
    })
  },[data]);
  // const handleImageClick = (id) => {
  //   // Navigate to the product details page
  //   navigate(`/productdetails`);
  // };

  return (
    <>
    <Navbar/>
      <main id="mt-main">
  {/* Mt Contact Banner of the Page */}
  <section
    className="mt-contact-banner style4"
    style={{ backgroundImage: "url(src/assets/images/img11.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>CHAIRS</h1>
          {/* Breadcrumbs of the Page */}
          <nav className="breadcrumbs">
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  Home <i className="fa fa-angle-right" />
                </a>
              </li>
              <li>
                <a href="#">
                  Products <i className="fa fa-angle-right" />
                </a>
              </li>
              <li>Chairs</li>
            </ul>
          </nav>
          {/* Breadcrumbs of the Page end */}
        </div>
      </div>
    </div>
  </section>
  {/* Mt Contact Banner of the Page end */}
  <div className="container">
    <div className="row">
      {/* sidebar of the Page start here */}
      <aside
        id="sidebar"
        className="col-xs-12 col-sm-4 col-md-3 wow fadeInLeft"
        data-wow-delay="0.4s"
      >
        {/* shop-widget filter-widget of the Page start here */}
        <section className="shop-widget filter-widget bg-grey">
          <h2>FILTER</h2>
          <span className="sub-title">Filter by Brands</span>
          {/* nice-form start here */}
          <ul className="list-unstyled nice-form">
            <li>
              <label htmlFor="check-1">
                <input id="check-1" type="checkbox" />
                <span className="fake-input" />
                <span className="fake-label">Casali</span>
              </label>
              <span className="num">2</span>
            </li>
            <li>
              <label htmlFor="check-2">
                <input id="check-2" type="checkbox" />
                <span className="fake-input" />
                <span className="fake-label">Decar</span>
              </label>
              <span className="num">12</span>
            </li>
            <li>
              <label htmlFor="check-3">
                <input id="check-3" defaultChecked="checked" type="checkbox" />
                <span className="fake-input" />
                <span className="fake-label">Fantini</span>
              </label>
              <span className="num">4</span>
            </li>
            <li>
              <label htmlFor="check-4">
                <input id="check-4" type="checkbox" />
                <span className="fake-input" />
                <span className="fake-label">Flamentstyle</span>
              </label>
              <span className="num">4</span>
            </li>
            <li>
              <label htmlFor="check-5">
                <input id="check-5" type="checkbox" />
                <span className="fake-input" />
                <span className="fake-label">Heerenhuis</span>
              </label>
              <span className="num">6</span>
            </li>
            <li>
              <label htmlFor="check-6">
                <input id="check-6" type="checkbox" />
                <span className="fake-input" />
                <span className="fake-label">Hoffmann</span>
              </label>
              <span className="num">10</span>
            </li>
            <li>
              <label htmlFor="check-7">
                <input id="check-7" type="checkbox" />
                <span className="fake-input" />
                <span className="fake-label">Italfloor</span>
              </label>
              <span className="num">3</span>
            </li>
          </ul>
          {/* nice-form end here */}
          <span className="sub-title">Filter by Price</span>
          <div className="price-range">
            <div className="range-slider">
              <span className="dot" />
              <span className="dot dot2" />
            </div>
            <span className="price">
              Price &nbsp; $ 10 &nbsp; - &nbsp; $ 599
            </span>
            <a href="#" className="filter-btn">
              Filter
            </a>
          </div>
        </section>
        {/* shop-widget filter-widget of the Page end here */}
        {/* shop-widget of the Page start here */}
        <section className="shop-widget">
          <h2>CATEGORIES</h2>
          {/* category list start here */}
          <ul className="list-unstyled category-list">
            <li>
              <a href="#">
                <span className="name">CHAIRS</span>
                <span className="num">12</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">SOFAS</span>
                <span className="num">24</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">ARMCHAIRS</span>
                <span className="num">9</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">BEDROOM</span>
                <span className="num">2</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">LIGHTING</span>
                <span className="num">17</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">KITCHEN</span>
                <span className="num">10</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">ACCESSORIES</span>
                <span className="num">23</span>
              </a>
            </li>
          </ul>
          {/* category list end here */}
        </section>
        {/* shop-widget of the Page end here */}
        {/* shop-widget of the Page start here */}
        <section className="shop-widget">
          <h2>HOT SALE</h2>
          {/* mt product4 start here */}
          <div className="mt-product4 mt-paddingbottom20">
            <div className="img">
              <a href="product-detail.html">
                <img src="src/assets/images/products/img14.jpg" alt="image description" />
              </a>
            </div>
            <div className="text">
              <div className="frame">
                <strong>
                  <a href="product-detail.html">Egon Wooden Chair</a>
                </strong>
                <ul className="mt-stars">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
              </div>
              <del className="off">$75,00</del>
              <span className="price">$55,00</span>
            </div>
          </div>
          {/* mt product4 end here */}
          {/* mt product4 start here */}
          <div className="mt-product4 mt-paddingbottom20">
            <div className="img">
              <a href="product-detail.html">
                <img src="src/assets/images/products/img15.jpg" alt="image description" />
              </a>
            </div>
            <div className="text">
              <div className="frame">
                <strong>
                  <a href="product-detail.html">Oyo Cantilever Chair</a>
                </strong>
              </div>
              <del className="off">$75,00</del>
              <span className="price">$55,00</span>
            </div>
          </div>
          {/* mt product4 end here */}
          {/* mt product4 start here */}
          <div className="mt-product4 mt-paddingbottom20">
            <div className="img">
              <a href="product-detail.html">
                <img src="src/assets/images/products/img16.jpg" alt="image description" />
              </a>
            </div>
            <div className="text">
              <div className="frame">
                <strong>
                  <a href="product-detail.html">Kurve Chair</a>
                </strong>
                <ul className="mt-stars">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
              </div>
              <del className="off">$75,00</del>
              <span className="price">$55,00</span>
            </div>
          </div>
          {/* mt product4 end here */}
          {/* mt product4 start here */}
          <div className="mt-product4 mt-paddingbottom20">
            <div className="img">
              <a href="product-detail.html">
                <img src="src/assets/images/products/img20.jpg" alt="image description" />
              </a>
            </div>
            <div className="text">
              <div className="frame">
                <strong>
                  <a href="product-detail.html">Marvelous Wooden Chair</a>
                </strong>
              </div>
              <del className="off">$75,00</del>
              <span className="price">$55,00</span>
            </div>
          </div>
          {/* mt product4 end here */}
        </section>
        {/* shop-widget of the Page end here */}
      </aside>
      {/* sidebar of the Page end here */}
      <div
        className="col-xs-12 col-sm-8 col-md-9 wow fadeInRight"
        data-wow-delay="0.4s"
      >
        {/* mt shoplist header start here */}
        <header className="mt-shoplist-header">
          {/* btn-box start here */}
          <div className="btn-box">
            <ul className="list-inline">
              <li>
                <a href="#" className="drop-link">
                  Default Sorting{" "}
                  <i aria-hidden="true" className="fa fa-angle-down" />
                </a>
                <div className="drop">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">ASC</a>
                    </li>
                    <li>
                      <a href="#">DSC</a>
                    </li>
                    <li>
                      <a href="#">Price</a>
                    </li>
                    <li>
                      <a href="#">Relevance</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="mt-viewswitcher" href="#">
                  <i className="fa fa-th-large" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="mt-viewswitcher" href="#">
                  <i className="fa fa-th-list" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          {/* btn-box end here */}
          {/* mt-textbox start here */}
          <div className="mt-textbox">
            <p>
              Showing <strong>1–9</strong> of <strong>65</strong> results
            </p>
            <p>
              View <a href="#">9</a> / <a href="#">18</a> / <a href="#">27</a> /{" "}
              <a href="#">All</a>
            </p>
          </div>
          {/* mt-textbox end here */}
        </header>
        {/* mt shoplist header end here */}
        {/* mt productlisthold start here */}
        <ul className="mt-productlisthold list-inline">
          {data && data.map((item)=>{
            return(
              <>
               <li>
            {/* mt product1 large start here */}
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                   
                      <img
                        src={item.productimg}
                        alt="image description"
                      />
                    
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">{item.productname}</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>{item.productprice}</span>
                </span>
                <br/>
                <span className="price">
                  <button onClick={()=>{navigate(`/productdetails/${item.id}`)}}>Click For Details</button> 
                </span>
              </div>
            </div>
            {/* mt product1 center end here */}
          </li>
              </>
            )
          })}
          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img22.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Bombi Chair</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>399,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img23.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Marvelous Modern 3 Seater</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>599,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img24.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Chair with armrests</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>200,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img67.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Pouf Chair</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>399,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img68.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Jalis Counter stool</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>269,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img24.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Bombi Chair</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>399,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img69.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Lucky Chair</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>399,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img70.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Cut Chair with 4 Spoke Base</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>269,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

          {/* <li>
            mt product1 large start here
            <div className="mt-product1 large">
              <div className="box">
                <div className="b1">
                  <div className="b2">
                    <a href="product-detail.html">
                      <img
                        src="src/assets/images/products/img71.jpg"
                        alt="image description"
                      />
                    </a>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <ul className="links">
                      <li>
                        <a href="#">
                          <i className="icon-handbag" />
                          <span>Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-heart-empty" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icomoon icon-exchange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="txt">
                <strong className="title">
                  <a href="product-detail.html">Yard SeChair</a>
                </strong>
                <span className="price">
                  <i className="fa fa-eur" /> <span>139,00</span>
                </span>
              </div>
            </div>
            mt product1 center end here
          </li> */}

        </ul>
        {/* mt productlisthold end here */}
        {/* mt pagination start here */}
        <nav className="mt-pagination">
          <ul className="list-inline">
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
          </ul>
        </nav>
        {/* mt pagination end here */}
      </div>
    </div>
  </div>
</main>
<Footer/>
    </>
  )
}

export default Product
