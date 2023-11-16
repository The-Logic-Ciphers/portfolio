import React,{useState} from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Contacts = () => {
  const [selectedOption, setSelectedOption] = useState('Designer');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white  order-1"></div>

      <div className="py-24 px-10 md:order-1" style={{ backgroundColor: "#F4F4F4" }}>
        <h1
          className="text-5xl font-extrabold mb-14"
          style={{ color: "#363636", lineHeight: "60px" }}
        >
          CONTACT US
        </h1>
        <p className="mb-10 text-base font-light leading-7" style={{ color: "#606060" }}>
          We will be happy to answer your questions
        </p>

        {/* Location */}
        <div className="flex mb-9">
          <div className="flex items-center mx-7">
            <SlLocationPin className="text-blue-800 text-3xl font-light leading-10 group-hover:translate-y-0 transition-all duration-300 animate-floater hover:-mt-1 hover:text-teal-200" />
          </div>
          <div className="">
            <h1 className="text-base font-extrabold flex items-center" style={{ color: "#363636" }}>
              Location
            </h1>
            <p className="text-sm font-light leading-6 flex items-center" style={{ color: "#606060" }}>
              Street number and town name 23
            </p>
          </div>
        </div>

        {/* E-mail */}
        <div className="flex mb-9">
          <div className="flex items-center mx-7">
            <HiOutlineMail className="text-blue-800 text-3xl font-light leading-10 group-hover:translate-y-0 transition-all duration-300 animate-floater hover:-mt-1 hover:text-teal-200" />
          </div>
          <div>
            <h1 className="text-base font-extrabold flex items-center" style={{ color: "#363636" }}>
              E-mail
            </h1>
            <p className="text-sm font-light leading-6 flex items-center" style={{ color: "#606060" }}>
              info@brandname.com
            </p>
          </div>
        </div>

        {/* Phone number */}
        <div className="flex mb-9">
          <div className="flex items-center mx-7">
            <BsTelephone className="text-blue-800 text-3xl font-light leading-10 group-hover:translate-y-0 transition-all duration-300 animate-floater hover:-mt-1 hover:text-teal-200" />
          </div>
          <div>
            <h1 className="text-base font-extrabold flex items-center" style={{ color: "#363636" }}>
              Phone number
            </h1>
            <p className="text-sm font-light leading-6 flex items-center" style={{ color: "#606060" }}>
              425 521 432
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className="container pt-36 mb-32">
        <div>
        <span className='text-5xl font-black flex md:justify-center justify-start' style={{color:"#363636",lineHeight:"42px"}}>JOIN OUR TEAM</span>
      <p className='text-2xl font-light leading-7 flex md:justify-center justify-start' style={{color:"#363636 "}}>Apply for a job</p>
        </div>
        <div className='md:mx-80 mx-10 mt-24 '>
<form>
  <div className="">
    <div className="">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div className="sm:col-span-3 col-span-7">
          <label 
          for="first-name" 
          className="text-sm font-bold leading-6 text-gray-900 flex">
            Name<AiOutlineCheckCircle className='ms-2 mt-1 text-blue-600'/>
            </label>
          <div className="mt-2">
          <input 
  type="text" 
  name="first-name" 
  id="first-name" 
  autoComplete="given-name" 
  className="block w-full rounded-full border-0  py-2.5 px-5 text-gray-500  placeholder:text-gray-400 ring-gray-300 ring-1 focus:ring-1  focus:ring-gray-300 focus:border-gray-300 sm:text-sm sm:leading-6 focus:outline-none "
  required
/>
          </div>
        </div>

        <div className="sm:col-span-4 col-span-7">
          <label 
          for="last-name" 
          className="text-sm font-bold leading-6 text-gray-900 flex">
             Surname <AiOutlineCheckCircle className='ms-2 mt-1 text-blue-600'/>
            </label>
          <div className="mt-2">
            <input 
            type="text" 
            name="last-name" 
            id="last-name" 
            autoComplete="family-name" 
            className="block w-full rounded-full border-0  py-2.5 px-5 text-gray-500  placeholder:text-gray-400 ring-gray-300 ring-1 focus:ring-1  focus:ring-gray-300 focus:border-gray-300 sm:text-sm sm:leading-6 focus:outline-none" required/>
          </div>
        </div>

        <div className="sm:col-span-7 col-span-7">
          <label 
          for="email" 
          className="text-sm font-bold leading-6 text-gray-900 flex">
            Email <AiOutlineCheckCircle className='ms-2 mt-1 text-blue-600'/>
          </label>
          <div className="mt-2">
            <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email"  
            className="block w-full rounded-full border-0  py-2.5 px-5 text-gray-500  placeholder:text-gray-400 ring-gray-300 ring-1 focus:ring-1  focus:ring-gray-300 focus:border-gray-300 sm:text-sm sm:leading-6 focus:outline-none" required/>
          </div>
        </div>

        <div className="col-span-7">
          <label 
          for="street-address" 
          className="text-sm font-bold leading-6 text-gray-900 flex"> 
          Applying For <AiOutlineCheckCircle className='ms-2 mt-1 text-blue-600'/>
          </label>
          <div className="mt-2">
          <select 
          id="country" 
          name="country" 
          autoComplete="country-name"
           placeholder={selectedOption}
           onChange={handleSelectChange}
          className="block w-full rounded-full border-0  py-2.5 px-5 text-gray-500  placeholder:text-gray-400 ring-gray-300 ring-1 focus:ring-1  focus:ring-gray-300 focus:border-gray-300 sm:text-sm sm:leading-6 focus:outline-none ">
       <option value="Designer" className='cursor-pointer'>Designer</option>
  <option value="Photographer" className='cursor-pointer'>Photographer</option>
  <option value="Developer" className='cursor-pointer '>Developer</option>
  <option value="Marketing" className='cursor-pointer '>Marketing</option>
            </select>
          </div>
        </div>

        <div class="col-span-7">
          <label for="about" class="text-sm font-bold leading-6 text-gray-900 flex"> Message <AiOutlineCheckCircle className='ms-2 mt-1 text-blue-600'/> 
          </label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-xl border-0  py-2.5 px-5 text-gray-500  placeholder:text-gray-400 ring-gray-300 ring-1 focus:ring-1  focus:ring-gray-300 focus:border-gray-300 sm:text-sm sm:leading-6 focus:outline-none h-44"></textarea>
          </div>
        </div>
      </div>
      <div className='col-span-7 mt-5'>
      <p className='text-sm font-bold leading-6 text-gray-900'>Please attach your CV </p>
      <div className="mt-2">
      <input 
  type="file" 
  accept="image/*, text/*" 
  name="file"
  id="file" 
  className="block w-full text-gray-700 sm:text-sm sm:leading-6"
  required
/>
          </div>
      </div>
    
    </div>
  </div>

  <div className="mt-6 flex items-center">
    <button type="submit" className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
  </div>
</form>

        </div>
        <div className='flex justify-center mt-10'>
      <p className='text-sm font-bold leading-6 text-gray-500 border border-yellow-500 ring-2 ring-yellow-500 bg-gray-200 px-20 py-1'>One or more fields have an error. Please check and try again.</p>
    </div>
    </div>

    </>
  );
};

export default Contacts;
