import React from 'react'
import Slider from "react-slick";




export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="wrapper">
		
		<div class="w1">
     <div className="mt-mainslider2">
  <div className="banner-slider">
  <Slider {...settings}>
    <div className="holder">
      <img
        className="img"
        src="src/assets/images/sliders/img02.jpg"
        alt="image description"
      />
      <div className="caption">
        <div className="c1">
          <div className="c2">
            <div className="text right">
              <span className="title">FURNITURE DESIGNS IDEAS</span>
              <h1>COMFORT</h1>
              <h2>WOOD CHAIRS</h2>
              <div className="txt">
                <p>
                  Consectetur adipisicing elit. Beatae accusamus, <br /> optio,
                  repellendus inventore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="holder">
      <img
        className="img"
        src="src/assets/images/sliders/img01.jpg"
        alt="image description"
      />
      <div className="caption add">
        <div className="c1">
          <div className="c2">
            <div className="text">
              <span className="sub-title">FURNITURE DESIGNS IDEAS</span>
              <h1>WOODEN</h1>
              <h2>COLLECTION</h2>
              <div className="txt">
                <p>
                  Consectetur adipisicing elit. Beatae accusamus, <br /> optio,
                  repellendus inventore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="holder">
      <img
        className="img"
        src="src/assets/images/sliders/img03.jpg"
        alt="image description"
      />
      <div className="caption add2">
        <div className="c1">
          <div className="c2">
            <div className="text">
              <span className="title">FURNITURE DESIGNS IDEAS</span>
              <h1>Upholstered fabric</h1>
              <h2>Counter stool</h2>
              <span className="price">
                $ 79.<sub>00</sub>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Slider>
  </div>
</div>

        </div>
        </div>
    </>
  )
}

 
