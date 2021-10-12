import React, {useRef, useState} from "react";
import styled from "styled-components";
import Slider from "react-slick";

import SliderBoard from "./components/SliderBoard";
import SliderCareer from "./components/SliderCareer";
import SliderPromtion from "./components/SliderPromotion";
import UnderLine from "./components/UnderLine";

import BottomNavigation from "../../layout/BottomNavigation";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MainWrapper =styled.div`
  .slider-wrapper {
    width: 100%;
    height: calc(100% - 96px);
    margin-top: 48px;
    
    .slider-item {
      width: 100%;
      height: 100%;
    }
  }
  .top-navigation {
    padding: 10px 0px;
    
    .button{
      padding: 0px 10px;
    }
  }
`;

const Index = () => {

  const [sliderId, setSliderId] = useState(0);

  const mySlider = useRef();

  const settings = {
    className: "slider-wrapper",
    dots: false,
    Infinity: false,
    slideToShow: 1,
    slideToScroll: 1,
    afterChange: (index) => setSliderId(index),
    ref: mySlider,
  };

  const moveSlider = (index) => {
    setSliderId(index);
    mySlider.current.slickGoTo(index);
  }

  return (
    <MainWrapper>
      <div className="top-navigation arrange-center">
        <button className="button" onClick={() => moveSlider(0)}>
          <UnderLine text="게시판" isActive={sliderId === 0} />
        </button>
        <button className="button" onClick={() => moveSlider(1)}>
          <UnderLine text="진로" isActive={sliderId === 1} />
        </button>
        <button className="button" onClick={() => moveSlider(2)}>
          <UnderLine text="홍보" isActive={sliderId === 2} />
        </button>
        </div>
        <Slider {...settings} edgeFriction={0}>
          <div className="slider-item">
            <SliderBoard />
          </div>
          <div className="slider-item">
            <SliderCareer />
          </div>
          <div className="slider-item">
            <SliderPromtion />
          </div>
        </Slider>
    <div>
      <div className="bottom-navigation">
        <BottomNavigation activeNum={2} />
      </div>
    </div>
    </MainWrapper>
  );
};

export default Index;
