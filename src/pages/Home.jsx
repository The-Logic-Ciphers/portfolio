import React from 'react'
import Cards from '../components/ui/Cards'
import { FiSettings } from "react-icons/fi";
import { TfiPrinter,TfiAnnouncement } from "react-icons/tfi";
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const contact = [
    {
      icon:<FiSettings/>, title:"Support", description:"Just let us know if you have any questions regarding our services"
    },
    {
      icon:<TfiPrinter/>, title:"Printing & Lettering", description:"We can tell you all about our technques and other specifics"
    },
    {
      icon:<TfiAnnouncement/>, title:"Media & Marketing", description:"Just let us know if you have any questions regarding our services"
    },
  ];

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
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      {/* Services And Protfolio */}
      {/* Counter */}
      {/* Master Crew */}
      {/* Team */}
      {/* Cards */}
      {/* Partners */}{/* Slider */}
      <section style={{backgroundImage:'url("https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/BG-copy-3.png?id=473")'}}>
        <div className='mx-auto bg-white rounded-lg w-full'>

        </div>
      {/* Slider */}
      <Slider {...settings} className='py-16'>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`}  className='mx-auto'/>
        </div>
      ))}
    </Slider>
      </section>
      {/* Newsletter */}
      <section>
      <div className='container-fluid h-80 flex items-center justify-center bg-center' style={{backgroundImage:'url("https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Group-10-copy-4.jpg?id=477")',flexDirection: 'column'}}>
      <div className='grid grid-cols-1 md:grid-cols-2  w-full md:ps-56 md:pe-20 px-10 md:px-0'>
  <div className='flex  justify-start items-center mb-7 md:mb-0 '>
    <h1 className='text-5xl font-extrabold text-white flex'>
      Subscribe to <br />our newsletter
    </h1>
  </div>
  <div className='md:flex justify-center items-center'>
    <input 
      type="search" 
      name="search_box" 
      placeholder='Enter your email'
      className='px-7 py-3 placeholder:hover:text-gray-200 w-full rounded-full italic'
    />
    <Button className='bg-teal-400 text-white font-extrabold px-7 py-3 rounded-full mt-6 md:mt-0 md:ml-4 hover:bg-teal-300 '>send</Button>
  </div>
</div>



</div>

      </section>
      {/* Contact Us */}
      <section>
        <div className='container mx-auto my-10'>
          <h1 className='text-5xl font-extrabold text-gray-700 text-center mb-4'>CONTACT US </h1>
          <p className='text-xl font-light text-gray-600 text-center mb-8'>Let us help you</p>
          <div className='grid gap-6 md:grid-cols-3 grid-cols-1 '>
            {contact.map((item, index) => (
              <Cards key={index} className=' md:w-full mx-auto hover:shadow-xl shadow-md'>
                <div className='py-20 mx-auto' style={{ width: '250px' }}>
                  <div className='flex justify-center'>
                    <div className='flex items-center justify-center h-20 w-20 rounded-full border-gray-200 border mb-5 text-4xl' style={{color:"#5D42D3"}}>
                      {item.icon}
                    </div>
                  </div>
                  <div className='p-4'>
                    <h1 className='text-base font-bold text-gray-700 text-center'>{item.title}</h1>
                    <p className='text-sm font-light text-gray-500 leading-6 break-all tracking-tight text-center'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Cards>
            ))}
          </div>
        </div>
        <div className='flex justify-center mb-36 mt-5'>
          <Button className='bg-orange-600 rounded-full py-5 px-9 hover:bg-orange-400'><Link to="/" className='font-light text-sm text-white'>Get in touch!</Link></Button>
        </div>
      </section>
    </div>
  )
}

export default Home
