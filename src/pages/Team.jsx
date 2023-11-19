import React from 'react'
import Cards from '../components/ui/Cards'
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Team = () => {
  const Mccard =[
    {
      img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-1-copy-2.png?id=478",
      title1:"KATE WILSON ",
      title2:"advertising ",
      description:"Highly experienced professional that is going to make amazing things for you ",
    },
    {
      img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-2-copy-2.png?id=479",
      title1:"JOHN BROWN ",
      title2:"developer ",
      description:"Highly experienced professional that is going to make amazing things for you ",
    },
    {
      img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-1-copy-2.jpg?id=732",
      title1:"PAUL WATSON ",
      title2:"advertising ",
      description:"Highly experienced professional that is going to make amazing things for you ",
    },
    {
      img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-1-copy-22.jpg?id=734",
      title1:"MATT KENNING ",
      title2:"developer ",
      description:"Highly experienced professional that is going to make amazing things for you ",
    },
    {
      img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-1-copy-23.jpg?id=735",
      title1:"OLIVIA RYAIN ",
      title2:"advertising ",
      description:"Highly experienced professional that is going to make amazing things for you ",
    },
    {
      img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-1-copy-24.jpg?id=736",
      title1:"LUCY WALSH ",
      title2:"developer ",
      description:"Highly experienced professional that is going to make amazing things for you ",
    },
  ];
  const Jcard = [
    {
      img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Rectangle-647-copy-73.jpg?id=624",
      title1:"DESIGNER ",
      title2:"web design ",
      description:"If you are enthusiastic person with a pinch of talent don’t hesitate to join our team "
    },
    {
      img:"http://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Rectangle-647-copy-78.jpg?id=733",
      title1:"PHOTOGRAPHER ",
      title2:"photojournalist ",
      description:"If you are enthusiastic person with a pinch of talent don’t hesitate to join our team "
    },
    {
      img:"http://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Rectangle-647-copy-72.jpg?id=625",
      title1:"DEVELOPER ",
      title2:"front end ",
      description:"If you are enthusiastic person with a pinch of talent don’t hesitate to join our team "
    },
    {
      img:"http://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Rectangle-647-copy-7.jpg?id=623)",
      title1:"MARKETING ",
      title2:"marketing specialist ",
      description:"If you are enthusiastic person with a pinch of talent don’t hesitate to join our team "
    },
  ];
  return (
    <div className=' flex flex-col items-center justify-center'>
    <div>
      <h2 className='text-6xl font-extrabold flex justify-center'>MASTER CREW</h2>
      <p className='text-2xl font-light flex justify-center text-gray-500 mt-4'>Our professional team will be happy to bring</p>
      <p className='text-2xl font-light flex justify-center text-gray-500'>amazing ideas and projects to life</p>
    </div>
    <div className='grid md:grid-cols-2  grid-cols-1 gap-20 mt-20 mx-auto'>
      {Mccard.map((items) => (
        <Cards key={items.title1} className="h-full w-full" style={{ boxShadow: "0 15px 25px -7px rgba(0,0,0,.09), 0 -12px 10px -10px rgba(0,0,0,.04)" }}>
          <div className="flex">
            <div className="relative">
              <img className="w-full h-full object-cover" src={items.img} alt="" />
            </div>
            <div className="pt-20 px-10">
              <h2 className="text-lg font-bold mb-2">{items.title1}</h2>
              <h2 className="text-base font-light mb-5" style={{ color: "#00B49D" }}>{items.title2}</h2>
              <p className="text-sm font-extralight text-gray-400 w-56">{items.description}</p>
            </div>
          </div>
        </Cards>
      ))}
    </div>
    <div className='mt-20'>
      <h2 className='text-6xl font-extrabold flex justify-center'>JOIN OUR TEAM</h2>
      <p className='text-2xl font-light flex justify-center text-gray-500 mt-4'>Be part of an amazing team that lives</p>
      <p className='text-2xl font-light flex justify-center text-gray-500'>to create and make world more beautiful</p>
    </div>
    <div className='grid md:grid-cols-2 grid-cols-1 gap-20 mt-20 mx-auto'>
      {Jcard.map((items,index) => (
        <Cards key={index} className="h-full w-full" style={{ boxShadow: "0 15px 25px -7px rgba(0,0,0,.09), 0 -12px 10px -10px rgba(0,0,0,.04)" }}>
          <div className="flex">
            <div className="relative">
              <img className="w-full h-full object-cover" src={items.img} alt="" />
            </div>
            <div className="pt-20 px-10">
              <h2 className="text-lg font-bold mb-2">{items.title1}</h2>
              <h2 className="text-base font-light mb-5" style={{ color: "#00B49D" }}>{items.title2}</h2>
              <p className="text-sm font-extralight text-gray-400 w-56">{items.description}</p>
            </div>
          </div>
        </Cards>
      ))}
    </div>
    <div className='mt-20 mb-36'>
      <Button className="px-10 py-5 rounded-full bg-teal-400 hover:bg-teal-300 outline-none"  ><Link to="/contact" className="text-xs font-bold text-white ">Join now!</Link></Button>
    </div>
  </div>
  )
}

export default Team