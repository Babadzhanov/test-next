import React, { Component } from "react";

let slideIndex = 1;

class Carousel extends Component {
  state = {};

  componentDidMount() {
    this.showSlides(slideIndex);
  }

  plusSlides = (n, e) => {
    console.log("plusSlides e:", e);
    console.log("plusSlides n:", n);
    this.showSlides((slideIndex += n));
  };

  currentSlide = e => {
    console.log("currentSlide:", e);
    // this.showSlides((slideIndex = e));
  };

  showSlides = e => {
    var i;
    if (typeof window !== "undefined") {
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");

      console.log("slides", slides);
      console.log("dots", dots);
      console.log("e", e);
      // console.log("slides");

      if (e > slides.length) {
        console.log("slideIndex", 1);
        slideIndex = 1;
      }
      if (e < 1) {
        console.log("slideIndex2", slides.length);
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        console.log(slides[i].style.display);
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        console.log("dots[i].className", dots[i].className);
        dots[i].className = dots[i].className.replace(" active", "");
      }
      console.log("slideIndex", slideIndex);
      console.log("slideIndex", slides[slideIndex - 1].style.display);

      slides[slideIndex - 1].style.display = "block";
      console.log(dots[slideIndex - 1].className);
      dots[slideIndex - 1].className += " active";
    }
  };

  render() {
    return (
      <div className="test">
        <div className="slideshow-container">
          <div className="mySlides">
            <div className="numbertext">1 / 3</div>
            <img className="testImage" src="static/hero1.jpg" />
            <div className="text">One</div>
          </div>

          <div className="mySlides">
            <div className="numbertext">2 / 3</div>
            <img className="testImage" src="static/hero2.jpg" />
            <div className="text">Two</div>
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 3</div>
            <img className="testImage" src="static/hero3.jpg" />
            <div className="text">Three</div>
          </div>
          <a className="prev" onClick={() => this.plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => this.plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <br />
        <div>
          <span className="dot" onClick={() => this.currentSlide(1)} />
          <span className="dot" onClick={() => this.currentSlide(2)} />
          <span className="dot" onClick={() => this.currentSlide(3)} />
        </div>
        <style jsx>
          {`
            .mySlides {
              display: none;
            }
            img {
              vertical-align: middle;
            }
            .testImage {
              width: 150px;
              height: 150px;
            }

            /* Slideshow container */
            .slideshow-container {
              max-width: 1000px;
              position: relative;
              margin: auto;
            }

            /* Next & previous buttons */
            .prev,
            .next {
              cursor: pointer;
              position: absolute;
              top: 50%;
              width: auto;
              padding: 16px;
              margin-top: -22px;
              color: white;
              font-weight: bold;
              font-size: 18px;
              transition: 0.6s ease;
              border-radius: 0 3px 3px 0;
              user-select: none;
            }

            /* Position the "next button" to the right */
            .next {
              right: 0;
              border-radius: 3px 0 0 3px;
            }

            /* On hover, add a black background color with a little bit see-through */
            .prev:hover,
            .next:hover {
              background-color: rgba(0, 0, 0, 0.2);
            }

            /* Caption text */
            .text {
              color: #f2f2f2;
              font-size: 15px;
              padding: 8px 12px;
              position: absolute;
              bottom: 8px;
              width: 100%;
              text-align: center;
            }

            /* Number text (1/3 etc) */
            .numbertext {
              color: #f2f2f2;
              font-size: 12px;
              padding: 8px 12px;
              position: absolute;
              top: 0;
            }

            /* The dots/bullets/indicators */
            .dot {
              cursor: pointer;
              height: 15px;
              width: 15px;
              margin: 0 2px;
              background-color: #bbb;
              border-radius: 50%;
              display: inline-block;
              transition: background-color 0.6s ease;
            }

            .active,
            .dot:hover {
              background-color: #717171;
            }

            /* On smaller screens, decrease text size */
            @media only screen and (max-width: 300px) {
              .prev,
              .next,
              .text {
                font-size: 11px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Carousel;
