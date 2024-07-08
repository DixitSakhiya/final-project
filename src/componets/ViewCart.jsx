import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import  { useEffect, useState } from "react";
import axios from 'axios';

export default function ViewCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/addcart")
      .then((response) => {
        // Process received data to include quantity and parse price
        const updatedCartItems = response.data.map((item) => ({
          ...item,
          quantity: 1, // Initialize quantity to 1
          productprice: parseFloat(item.productprice.replace(/[^\d\.]/g, "")), // Parse price as a float, removing non-numeric characters
        }));
        setCartItems(updatedCartItems);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart items!", error);
      });
  }, []);


  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:8000/addcart/${id}`)
      .then(() => {
        // Update cart items state by filtering out the removed item
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("There was an error removing the item!", error);
      });
  };

  const handleQuantityChange = (id, newQuantity) => {
    // Update quantity of the selected item
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.productprice * item.quantity,
      0
    );
  };

  const handleOrderNow = () => {
    // Implement your order submission logic here
    console.log("Order Now clicked");
  };

  return (
    <>
      <Navbar/>

      <main id="mt-main">
        <section className="mt-contact-banner mt-banner-22" style={{backgroundImage: 'url(src/assets/images/img-76.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-center">SHOPPING CART</h1>
                {/* Breadcrumbs of the Page */}
                <nav className="breadcrumbs">
                  <ul className="list-unstyled">
                    <li><a href="#">Home <i className="fa fa-angle-right" /></a></li>
                    <li>Shopping Cart</li>
                  </ul>
                </nav>
                {/* Breadcrumbs of the Page end */}
              </div>
            </div>
          </div>
        </section>
        {/* Mt Process Section of the Page */}
        <div className="mt-process-sec">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <ul className="list-unstyled process-list">
                  <li className="active">
                    <span className="counter">01</span>
                    <strong className="title">Shopping Cart</strong>
                  </li>
                  <li>
                    <span className="counter">02</span>
                    <strong className="title">Check Out</strong>
                  </li>
                  <li>
                    <span className="counter">03</span>
                    <strong className="title">Order Complete</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{/* Mt Process Section of the Page end */}
        {/* Mt Product Table of the Page */}
        <div className="mt-product-table">
          <div className="container">
            <div className="row border">
              <div className="col-xs-12 col-sm-6">
                <strong className="title">PRODUCT</strong>
              </div>
              <div className="col-xs-12 col-sm-2">
                <strong className="title">PRICE</strong>
              </div>
              <div className="col-xs-12 col-sm-2">
                <strong className="title">QUANTITY</strong>
              </div>
              <div className="col-xs-12 col-sm-2">
                <strong className="title">TOTAL</strong>
              </div>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-center text-5xl font-medium">
                Your cart is empty
              </p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="row border" >
                <div className="col-xs-12 col-sm-2">
                  <div className="img-holder">
                    <img src={item.productimg} alt="image description" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <strong className="product-name">{item.productname}</strong>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <strong className="price"><i className="fa fa-eur" /> {item.productprice}</strong>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <form action="#" className="qyt-form">
                    <fieldset>
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="bg-gray-100 border border-gray-300 rounded p-2"
                    >
                       {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                      </select>
                    </fieldset>
                  </form>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white p-2 rounded h-[50px] ml-4"
                  >
                    Remove
                  </button>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <strong className="price"><i className="fa fa-eur" /> {item.productprice * item.quantity}</strong>
                  <a href="#"><i className="fa fa-close" /></a>
                </div>
              </div>
              ))
            )}
          
            {/* <div className="row border">
              <div className="col-xs-12 col-sm-2">
                <div className="img-holder">
                  <img src="images/img40.jpg" alt="image description" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <strong className="product-name">Marvelous Modern 3 Seater</strong>
              </div>
              <div className="col-xs-12 col-sm-2">
                <strong className="price"><i className="fa fa-eur" /> 599,00</strong>
              </div>
              <div className="col-xs-12 col-sm-2">
                <form action="#" className="qyt-form">
                  <fieldset>
                    <select>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </fieldset>
                </form>
              </div>
              <div className="col-xs-12 col-sm-2">
                <strong className="price"><i className="fa fa-eur" /> 599,00</strong>
                <a href="#"><i className="fa fa-close" /></a>
              </div>
            </div> */}
           
            
            <div className="row">
              <div className="col-xs-12">
                <form action="#" className="coupon-form">
                  <fieldset>
                    <div className="mt-holder">
                      <input type="text" className="form-control" placeholder="Your Coupon Code" />
                      <button type="submit">APPLY</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>{/* Mt Product Table of the Page end */}
        {/* Mt Detail Section of the Page */}
        <section className="mt-detail-sec style1">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>CALCULATE SHIPPING</h2>
                <form action="#" className="bill-detail">
                  <fieldset>
                    <div className="form-group">
                      <select className="form-control">
                        <option value={1}>Select Country</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option value={1}>State / Country</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option value={1}>Zip / Postal Code</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button className="update-btn" type="submit">UPDATE TOTAL <i className="fa fa-refresh" /></button>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="col-xs-12 col-sm-6">
                <h2>CART TOTAL</h2>
                <ul className="list-unstyled block cart">
                  <li>
                  {cartItems.length > 0 && (
                      <div className="txt-holder">
                      <strong className="title sub-title pull-left">CART SUBTOTAL</strong>
                      <div className="txt pull-right">
                        <span><i className="fa fa-eur" /> Total: {calculateTotal()} rs.</span>
                      </div>
                    </div>
                  )}
                    
                  </li>
              
                </ul>
                <a href="#" className="process-btn">PROCEED TO CHECKOUT <i className="fa fa-check" /></a>
              </div>
            </div>
          </div>
        </section>
        {/* Mt Detail Section of the Page end */}
      </main>
      
      <Footer/>
    </>
  )
}
