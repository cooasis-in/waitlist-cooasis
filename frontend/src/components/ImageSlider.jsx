import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageData = [
  { src: 'images/start.svg', alt: 'Start' },
  { src: 'images/yourstory.svg', alt: 'Your Story' },
  { src: 'images/aws.svg', alt: 'AWS' },
  { src: 'images/launch.svg', alt: 'Launch' },
  { src: 'images/google.svg', alt: 'Google' },
];

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
    <div className="w-full overflow-hidden">
    <Slider {...settings} className="flex justify-center items-center">
      {imageData.map((image, index) => (
        <div key={index} className="w-1/5 flex justify-center items-center p-4">
          <img src={image.src} alt={image.alt} className="max-w-[75px]" />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ImageSlider;
