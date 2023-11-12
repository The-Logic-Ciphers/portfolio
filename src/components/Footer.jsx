import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid ">
        <div className="First px-20 py-20" style={{backgroundColor:"#363636"}}>
          <div className="">
            <h1 className="text-white text-2xl font-bold mb-2">FOLLOW US </h1>
            <p className="text-white text-lg font-light">#jevelincreative </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
            <div>
              <h1 className="text-base font-semibold text-white mb-5">Office </h1>
              <p className="text-sm font-light text-white leading-6">
                Office San Diego — 845 15th Street, Suite 906 San Diego, CA
                92120 Mountain View — 1398 Villa St Mountain View, CA 96841
              </p>
            </div>
            <div>
              <h1 className="text-base font-semibold text-white mb-5">
                Start a conversation{" "}
              </h1>
              <p className="text-sm font-light text-white leading-6">
                hi@creativeagency.com </p>
                <p className="text-sm font-light text-white leading-6">+1.858.755.6922</p> 
            </div>
            <div>
              <h1 className="text-base font-semibold text-white mb-5">Social </h1>
              <div className="flex text-white space-x-6  ">
                <AiOutlineInstagram fontSize={28} className="font-normal mr-5 flex justify-center items-center hover:text-orange-700 cursor-pointer"/>
                <FiTwitter fontSize={28} className="font-normal mr-5 flex justify-center items-center hover:text-orange-700 cursor-pointer" />
                <FiFacebook fontSize={28} className="font-normal mr-5 flex justify-center items-center hover:text-orange-700 cursor-pointer"/>
                <AiOutlineYoutube fontSize={28} className=" font-normal flex justify-center items-center hover:text-orange-700 cursor-pointer"/>
              </div>
            </div>
            <div>
                <h1 className="text-white text-base font-semibold mb-5">Latest Projects</h1>
                <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                 <img className="cursor-pointer" src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/portfolio9-1-150x150.jpg"  alt=""/> 
                 <img className="cursor-pointer" src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/portfolio10-1-150x150.jpg"  alt=""/>                  
                 <img className="cursor-pointer" src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/portfolio7-1-150x150.jpg"  alt=""/> 
                 <img className="cursor-pointer" src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/portfolio5-150x150.jpg"  alt=""/> 
                 <img className="cursor-pointer" src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/portfolio11-1-150x150.jpg"  alt=""/> 
                 <img className="cursor-pointer" src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/portfolio1-1-150x150.jpg"  alt=""/> 
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid flex justify-center" style={{backgroundColor:"#252525"}}>
<h1 className="font-light text-sm text-white py-9">Copyright © 2017 JevelinTheme - Theme by Shufflehound</h1>
      </div>
    </footer>
  );
};

export default Footer;
