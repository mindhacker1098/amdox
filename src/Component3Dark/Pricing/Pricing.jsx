import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from "react-countup";
import { useEffect } from "react";
import pricingIcon from "/images/price_icon_01.png";
import pricingIcon2 from "/images/price_icon_02.png";
import icon from "/images/icon.png";

const Pricing = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add("active");

      // Remove 'active' class from siblings
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll(".pricing-box");
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove("active");
          }
        });
      }
    };

    const elements = document.querySelectorAll(".pricing-box");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
    });

    // Clean up event listeners when component unmounts
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  return (
    <section className='relative overflow-hidden pb-[120px] bg-BodyBg2-0'>
      <div className='Container'>
        <div className='grid grid-cols-6 gap-10 lg:gap-0 lg:grid-cols-12 border-t border-white border-opacity-15 pt-28 xl:pt-[130px] 2xl:pt-[155px]'>
          <div className='col-span-6 lg:col-span-5 w-full mx-auto mr-10'>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
              PRICING PLANS
            </h5>
            <h1 className='font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-4xl sm:leading-[46px] md:text-[42px] md:leading-[52px] lg:text-[32px] lg:leading-[42px] xl:text-[42px] xl:leading-[52px]'>
              Pricing the Comfotable
              <br />
              Pricing Plans for your
              <br />
              Consultant Service
            </h1>
            <p className='font-FiraSans text-TextColor-0 mt-6 mb-9'>
              Continually plagiarize virtual web services home one maximizing
              action items. Globally build front-end consult.
            </p>
            <Link to={'/service'}>
              <button className='size-20 rounded-full text-white text-2xl transition-all duration-500 -rotate-45 hover:text-PrimaryColor-0 bg-PrimaryColor-0 flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 hover:before:scale-100'>
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
          <div className='col-span-6 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:items-start gap-7'>
            <div className='pricing-box active group text-center bg-[#0a4243] rounded-lg px-8 lg:px-4 xl:px-8 pt-9 pb-10 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:h-0 before:bg-PrimaryColor-0 before:rounded-md before:transition-all before:duration-500 hover:before:h-full'>
              <div className='flex items-center gap-4'>
                <div className='pricing-icon size-[76px] bg-PrimaryColor-0 relative z-10 rounded-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 flex justify-center items-center'>
                  <img
                    src={pricingIcon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                </div>
                <div className='text-left'>
                  <h6 className='pricing-title text-2xl lg:text-xl xl:text-[22px] rounded font-FiraSans text-white font-semibold transition-all duration-500 mt-4 mb-1'>
                    Starter Plan
                  </h6>
                  <p className='pricing-desc font-FiraSans text-TextColor-0 transition-all duration-500 mb-4'>
                    Indivisual
                  </p>
                </div>
              </div>
              <ul className='flex flex-col gap-3 mt-6 mb-9'>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  Unlimited Websites
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  10+ Paid Plugin
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  Woocommerce Support
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  50+ WP theme
                </li>
              </ul>
              <div className='flex items-end gap-1 pb-5'>
                <div className='flex gap-1'>
                  <h6 className='pricing-price transition-all duration-500 font-FiraSans font-semibold text-2xl text-white'>
                    $
                  </h6>
                  <CountUp
                    start={-9}
                    end={49}
                    prefix=''
                    suffix=''
                    className='pricing-price text-[46px] leading-[45px] font-FiraSans font-semibold text-white transition-all duration-500'
                  />
                </div>
                <h6 className='pricing-price font-FiraSans text-TextColor-0 text-lg transition-all duration-500'>
                  / Month
                </h6>
              </div>
              <Link
                to={'/pricing'}
                className='flex justify-start'
              >
                <button className='pricing-btn text-left font-FiraSans border border-white border-opacity-40 rounded-full text-TextColor-0 px-8 py-[10px] transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100'>
                  Purchaces Now
                </button>
              </Link>
            </div>
            <div className='lg:-mt-10 pricing-box group text-center bg-[#0a4243] rounded-lg px-8 lg:px-4 xl:px-8 pt-9 pb-10 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:h-0 before:bg-PrimaryColor-0 before:rounded-md before:transition-all before:duration-500 hover:before:h-full'>
              <div className='flex items-center gap-4'>
                <div className='pricing-icon size-[76px] bg-PrimaryColor-0 relative z-10 rounded-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 flex justify-center items-center'>
                  <img
                    src={pricingIcon2}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                </div>
                <div className='text-left'>
                  <h6 className='pricing-title text-2xl lg:text-xl xl:text-[22px] rounded font-FiraSans text-white font-semibold transition-all duration-500 mt-4 mb-1'>
                    Premium Plan
                  </h6>
                  <p className='pricing-desc font-FiraSans text-TextColor-0 transition-all duration-500 mb-4'>
                    Indivisual
                  </p>
                </div>
              </div>
              <ul className='flex flex-col gap-3 mt-6 mb-9'>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  Unlimited Websites
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  10+ Paid Plugin
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  Woocommerce Support
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor-0 transition-all duration-500 border-b border-dashed border-white border-opacity-30 pb-3'>
                  <img
                    src={icon}
                    draggable='false'
                    className='brightness-0 invert-[1]'
                  />
                  50+ WP theme
                </li>
              </ul>
              <div className='flex items-end gap-1 pb-5'>
                <div className='flex gap-1'>
                  <h6 className='pricing-price transition-all duration-500 font-FiraSans font-semibold text-2xl text-white'>
                    $
                  </h6>
                  <CountUp
                    start={-9}
                    end={139}
                    prefix=''
                    suffix=''
                    className='pricing-price text-[46px] leading-[45px] font-FiraSans font-semibold text-white transition-all duration-500'
                  />
                </div>
                <h6 className='pricing-price font-FiraSans text-TextColor-0 text-lg transition-all duration-500'>
                  / Month
                </h6>
              </div>
              <Link
                to={'/pricing'}
                className='flex justify-start'
              >
                <button className='pricing-btn text-left font-FiraSans border border-white border-opacity-40 rounded-full text-TextColor-0 px-8 py-[10px] transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100'>
                  Purchaces Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
