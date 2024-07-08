import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function ProductDetails() {
    const [data, setData] = useState({});
    const { id } = useParams();

   

  useEffect(() => {
    // fetch api data
    axios.get(`http://localhost:8000/addproducts/${id}`).then((response) => {
      setData(response.data);   
    })
    .catch((error) => {
      console.error("Error fetching the product data:", error);
      window.scrollTo(0, 0);
  });
  }, [id]);

  const AddCartHandler = (item) => {
    axios
      .post("http://localhost:8000/addcart", item) 
      .then((response) => {
        
        Swal.fire({
          title: "Success",
          text: "Thanks For Purchase! Your product was added successfully.",
          icon: "success",
        });
        console.log("Item added to cart:", response.data); 
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart!", error); 
      });
  };
  // const AddCartHandler =(e)=> {
  //   e.preventDefault();

  //   useEffect(()=>{
  //     axios.post(`http://localhost:8000/addcart`,insert).then(()=>{
  //       Swal.fire({
  //         title: "Wow",
  //         text: "Thanks for added your Products",
  //         icon: "success"
  //       });
  //     })
  //   })
  // }
 

 
  
  return (
    <>
    <Navbar/>

    <div id="wrapper">
  <div className="w1">
    <main id="mt-main">
      {/* Mt Product Detial of the Page */}
      <section className="mt-product-detial wow fadeInUp" data-wow-delay="0.4s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/* Slider of the Page */}
              <div className="slider">
                {/* Comment List of the Page */}
                <ul className="list-unstyled comment-list">
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" />
                      27
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" />
                      12
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-share-alt" />
                      14
                    </a>
                  </li>
                </ul>
                {/* Comment List of the Page end */}
                {/* Product Slider of the Page */}
                <div className="product-slider">
                  <div className="slide">
                    <img
                      src={data.productimg}
                      // ref={productimg}
                      
                      alt="image descrption"
                    />
                    {" "}
                  </div>
                </div>
              </div>
              {/* Slider of the Page end */}
              {/* Detail Holder of the Page */}
              <div className="detial-holder">
                {/* Breadcrumbs of the Page */}
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="#">
                      Chairs <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li>Products</li>
                </ul>
                {/* Breadcrumbs of the Page end */}
                {/* <input
                  type="text"
                  ref={productname}
                  readOnly
                  style={{ border: "none", width: "100%" , fontSize: "50px"}}
                /> */}
                <h1>{data.productname}</h1>
                {/* Rank Rating of the Page */}
                <div className="rank-rating">
                  <ul className="list-unstyled rating-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star-o" />
                      </a>
                    </li>
                  </ul>
                  <span className="total-price">Reviews (12)</span>
                </div>
                {/* Rank Rating of the Page end */}
                <ul className="list-unstyled list">
                  <li>
                    <a href="#">
                      <i className="fa fa-share-alt" />
                      SHARE
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-exchange" />
                      COMPARE
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" />
                      ADD TO WISHLIST
                    </a>
                  </li>
                </ul>
                <div className="txt-wrap">
                  <p>
                    {data.productdecription}
                  </p>
              
                </div>
                <div className="text-holder">
                  <span className="price" >{data.productprice}</span>
                </div>
                <form action="#" className="product-form">
                  <fieldset>
                    {/* <div className="row-val">
                      <label htmlFor="qty">qty</label>
                      <input
                       type="number"
                       id="qty" 
                       value={qtty}
                       onChange={(e) => setQtty(e.target.value)}
                       min="1"
                       placeholder={1} />
                    </div> */}
                    <div className="row-val">
                      <button  onClick={() => AddCartHandler(data)}>ADD TO CART</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

         
    <Footer/>
      
    </>
  )
}
