import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Rough = () => {
  const images = [
    'https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo1.png',
    'https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-6.png',
    'https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Vector-Smart-Object.png',
    'https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-7.png',
    'https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo.png',
    'https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo-copy-4.png',
    'https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-7.png',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <Slider {...settings} className='py-7'>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`}  className='mx-auto'/>
        </div>
      ))}
    </Slider>
  );
};

export default Rough;
