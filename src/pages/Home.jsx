import React from "react";
import Cards from "../components/ui/Cards";
import { FiSettings } from "react-icons/fi";
import { TfiPrinter, TfiAnnouncement } from "react-icons/tfi";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "slick-carousel/slick/slick-theme.css";
import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";

const Home = () => {
  const [index, setActiveStep] = React.useState(0);
  const contact = [
    {
      icon: <FiSettings />,
      title: "Support",
      description:
        "Just let us know if you have any questions regarding our services",
    },
    {
      icon: <TfiPrinter />,
      title: "Printing & Lettering",
      description:
        "We can tell you all about our techniques and other specifics",
    },
    {
      icon: <TfiAnnouncement />,
      title: "Media & Marketing",
      description:
        "Just let us know if you have any questions regarding our services",
    },
  ];

  const images = [
    "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo1.png",
    "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-6.png",
    "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Vector-Smart-Object.png",
    "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-7.png",
    "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo.png",
    "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Logo-copy-4.png",
    "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/dealine-logo-7.png",
  ];

  const SliderCards = [
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo-copy5.png",
      h3: "Lebeaute",
      p: "Cosmetic Company",
      description:
        "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.",
    },
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo-copy4.png",
      h3: "Jevelin",
      p: "Wordpress Theme ",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. ",
    },
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo-copy3.png",
      h3: "Shufflehound",
      p: "Theme Creators ",
      description:
        " When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, ",
    },
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo-copy2.png",
      h3: "Ballonbear",
      p: "Imaginary Theme ",
      description:
        "I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks.  ",
    },
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo-copy.png",
      h3: "Jevelin Construction",
      p: "Construction Company ",
      description:
        "And grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath ",
    },
  ];

  const Acards = [
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/01.png?id=469",
      title1: "Project",
      title2: "Visualization",
      description: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from ",
    },
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/02.png?id=470",
      title1: "Creation",
      title2: "& Selection",
      description: "One day however a small line of blind text by the name of Lorem Ipsum ",
    },
    {
      img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/03.png?id=471",
      title1: "Lounching",
      title2: "Campaign",
      description: "She packed her seven versalia, put her initial into the belt and made herself on the way ",
    },
  ];

  const teamcard = [
{
  img:"https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-1-copy-2.png?id=478",
  title1:"KATE WILSON ",
  title2:"advertising ",
  description:"Highly experienced professional that is going to make amazing things for you "
},
{
  img: "https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Layer-2-copy-2.png?id=479",
  title1:"JOHN BROWN ",
  title2:"developer ",
  description:"Highly experienced professional that is going to make amazing things for you "
},
  ];
  const sliderSettings = {
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

  const currentCard = SliderCards[index];
  const handlePrevious = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? SliderCards.length - 1 : prevActiveStep - 1
    );
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === SliderCards.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  return (
    <div>
      {/* Hero Section */}
      {/* Services And Protfolio */}
      {/* Counter */}
      {/* Master Crew */}
      <section>
        <div className="container">
          <div className="flex">
            <div className="bg-cover bg-center" style={{backgroundImage:'url("https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/ma2.jpg?id=616")'}}>
              <h1 className="text-6xl font-extrabold">MASTER</h1>
              <h1 className="text-6xl font-extrabold">CREW</h1>
              <p className="text-xl font-light text-gray-600">Our professional team will be</p>
              <p className="text-xl font-light text-gray-600">happy to bring amazing ideas</p>
              <p className="text-xl font-light text-gray-600">and projects to life</p>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section>
      <div className="container">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 ps-16">
        {teamcard.map((items,index)=>(
        <Cards key={index} className="w-full"  style={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}>
        <div className="flex items-center justify-center h-full ">
          <img src={items.img} alt="" />
          <div className="px-10 pt-16 h-full">
            <h1 className="text-lg font-bold mb-3">{items.title1}</h1>
            <h1 className="text-base font-light mb-7" style={{ color: "#00B49D" }}>{items.title2}</h1>
            <p className="text-sm font-extralight text-gray-400">{items.description}</p>
          </div>
        </div>
      </Cards>
        ))}
      </div>
      <div className="mt-16 flex justify-center mb-36">
        <Button className="px-10 py-5 rounded-full bg-teal-400 hover:bg-teal-300 "  ><Link className="text-xs font-bold text-white ">Meet the team </Link></Button>
      </div>
    </div>
      </section>
      {/* Cards */}
      <section>
      <div className='grid md:grid-cols-3 grid-cols-1'>
      {Acards.map((items,index)=>(
      <Cards className={`h-screen bg-center w-full rounded-none`} style={{ backgroundImage: `url(${items.img})`,boxShadow: index === 1 ? '0px 15px 45px -9px rgba(0,0,0,.25) ' : 'none',zIndex: index == 1 ? '11':'none', }} key={index}>
      <div className='md:mx-14 mx-52 pt-80 '>
        <div>
        <h2 className='text-5xl font-extrabold flex md:justify-start justify-center text-white'>{items.title1}</h2>
        <h2 className='text-5xl font-extrabold flex md:justify-start justify-center text-white'>{items.title2}</h2>
        <p className='text-sm font-light flex md:justify-start justify-center text-justify text-gray-300 mt-10'>{items.description}</p>
        </div>
      </div>
    </Cards>
      ))}

    </div>
    </section>
      {/* Partners */}{/* Slider */}
      <section
        className="bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'url("https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/BG-copy-3.png?id=473")',
        }}
      >
        <div className="pt-36">
          <h2 className="text-5xl font-extrabold flex items-center justify-center text-gray-800">OUR CLIENTS </h2>
          <h2 className="text-xl font-light flex items-center justify-center">& partners </h2>
        </div>
        <div className="mt-10">
          <div className="bg-white rounded-lg py-20 px-8 md:mx-60 mx-8 shadow-md ">
            <div>
              <div className="flex justify-center">
                <div className="flex shadow-lg  w-50">
                  <img src={currentCard.img} alt="..." />
                  <div
                    className="py-5 px-4"
                    style={{ backgroundColor: "#08D7BD" }}
                  >
                    <h3 className="text-base text-white font-extrabold flex items-center">
                      {currentCard.h3}
                    </h3>
                    <p className="text-sm font-light text-white">
                      {currentCard.p}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-9 flex justify-center md:px-20 px-7 ">
                <p className="flex text-center text-gray-400">
                  <div className="flex justify-center items-center">
                    <TfiQuoteLeft size={22} className="text-gray-500 me-5" />
                  </div>
                  {currentCard.description}
                  <div className="flex justify-center items-center">
                    <TfiQuoteRight size={22} className="text-gray-500 ms-5" />
                  </div>
                </p>
              </div>
            </div>
            <div className="controls flex justify-center mt-10">
              <button
                onClick={handlePrevious}
                className="text-5xl focus:outline-none"
              >
                <BsChevronLeft className="text-gray-400" size={32} />
              </button>
              <button
                onClick={handleNext}
                className="text-5xl focus:outline-none"
              >
                <BsChevronRight className="text-gray-400 font-thin" size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings} className="py-16">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </section>
      {/* Newsletter */}
      <section>
        <div
          className="container-fluid h-80 flex items-center justify-center bg-center"
          style={{
            backgroundImage:
              'url("https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/Group-10-copy-4.jpg?id=477")',
            flexDirection: "column",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2  w-full md:ps-56 md:pe-20 px-10 md:px-0">
            <div className="flex  justify-start items-center mb-7 md:mb-0 ">
              <h1 className="text-5xl font-extrabold text-white flex">
                Subscribe to <br />
                our newsletter
              </h1>
            </div>
            <div className="md:flex justify-center items-center">
              <input
                type="search"
                name="search_box"
                placeholder="Enter your email"
                className="px-7 py-3 placeholder:hover:text-gray-200 md:w-full rounded-full italic focus:outline-none"
              />
              <div>
                <Button className="bg-teal-400 text-white font-extrabold px-7 py-3 rounded-full mt-6 md:mt-0 md:ml-4 hover:bg-teal-300 ">
                  send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section>
        <div className="container">
          <div className="py-16">
            <h2
              className="text-5xl font-extrabold text-center mb-4"
              style={{ color: "#363636" }}
            >
              CONTACT US
            </h2>
            <p className="text-2xl font-light text-gray-600 text-center mb-8">
              & let us help you{" "}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 grid-cols-1 ms-16">
            {contact.map((item, index) => (
              <Cards
                key={index}
                className=" md:w-full mx-auto hover:shadow-xl  rounded-md p-2 shadow-md"
              >
                <div className="py-20 mx-auto" style={{ width: "250px" }}>
                  <div className="flex justify-center">
                    <div
                      className="flex items-center justify-center h-20 w-20 rounded-full border-gray-200 border mb-5 text-4xl"
                      style={{ color: "#5D42D3" }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-4">
                    <h1 className="text-base font-bold text-gray-700 text-center">
                      {item.title}
                    </h1>
                    <p className="text-sm font-light text-gray-500 leading-6 break-all tracking-tight text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Cards>
            ))}
          </div>
          <div className="flex justify-center mb-36 mt-11 ">
            <Button className="bg-orange-600 rounded-full py-5 px-9 hover:bg-orange-400">
              <Link to="/contact" className="font-bold text-sm text-white">
                Get in touch!
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
