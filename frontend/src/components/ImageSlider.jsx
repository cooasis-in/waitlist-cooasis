import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageData = [
  { src: 'images/Artboard-1.svg', alt: 'Start' },
  { src: 'images/Artboard-2.svg', alt: 'Your Story' },
  { src: 'images/Artboard-3.svg', alt: 'AWS' },
  { src: 'images/Artboard-4.svg', alt: 'Launch' },
  { src: 'images/Artboard-5.svg', alt: 'Google' },
];

const ImageSlider = () => {

  useEffect(() => {
    console.log("LandingPage mounted");
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full overflow-hidden">
    <Slider {...settings} className="flex justify-center items-center">
      {imageData.map((image, index) => (
        <div key={index} className="w-1/5 flex justify-center items-center px-2 py-4">
          <img src={image.src} alt={image.alt} className='max-w-[100px]' />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ImageSlider;
