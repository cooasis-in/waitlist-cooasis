import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
      <Slider {...settings}>
        <div>
          <img src="images/start.svg" alt="" className="w-[75px]" />
        </div>
        <div>
          <img src="images/yourstory.svg" alt="" className="w-[75px]" />
        </div>
        <div>
          <img src="images/aws.svg" alt="" className="w-[75px]" />
        </div>
        <div>
          <img src="images/launch.svg" alt="" className="w-[75px]" />
        </div>
        <div>
          <img src="images/google.svg" alt="" className="w-[75px]" />
        </div>
      </Slider>
  );
};

export default ImageSlider;
