import React from 'react'
import Cards from '../components/ui/Cards'
import { FiSettings } from "react-icons/fi";
import { TfiPrinter,TfiAnnouncement } from "react-icons/tfi";
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

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

  
  return (
    <div>
      {/* Hero Section */}
      {/* Services And Protfolio */}
      {/* Counter */}
      {/* Master Crew */}
      {/* Team */}
      {/* Cards */}
      {/* Partners */}
      {/* Slider */}
      {/* Newsletter */}
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
