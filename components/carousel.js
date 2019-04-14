import React, { Component } from "react";
import styled from "styled-components";

const MySlides = styled.div`
  display: none;

  img {
    vertical-align: middle;
    width: 100%;
    height: 300px;
  }
`;

const CarouselContainer = styled.div`
  max-width: 1000px;
  position: relative;
  margin: auto;
`;

const Arrow = styled.a`
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

  @media (max-width: "300px") {
    font-size: 11px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const ArrowRight = styled(Arrow)`
  right: 0;
  border-radius: 3px 0 0 3px;
`;

const Text = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;

  @media (max-width: "300px") {
    font-size: 11px;
  }
`;

const NumberText = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #717171;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
      <div>
        <CarouselContainer>
          <MySlides className="mySlides">
            <NumberText>1 / 3</NumberText>
            <img src="static/hero1.jpg" />
            <Text>One</Text>
          </MySlides>

          <MySlides className="mySlides">
            <NumberText>2 / 3</NumberText>
            <img src="static/hero2.jpg" />
            <Text>Two</Text>
          </MySlides>

          <MySlides className="mySlides">
            <NumberText>3 / 3</NumberText>
            <img src="static/hero3.jpg" />
            <Text>Three</Text>
          </MySlides>
          <Arrow onClick={() => this.plusSlides(-1)}>&#10094;</Arrow>
          <ArrowRight onClick={() => this.plusSlides(1)}>&#10095;</ArrowRight>
        </CarouselContainer>
        <br />
        <DotContainer>
          <Dot className="dot" onClick={() => this.currentSlide(1)} />
          <Dot className="dot" onClick={() => this.currentSlide(2)} />
          <Dot className="dot" onClick={() => this.currentSlide(3)} />
        </DotContainer>
      </div>
    );
  }
}

export default Carousel;
