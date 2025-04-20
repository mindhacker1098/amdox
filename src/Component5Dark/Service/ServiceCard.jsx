/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,serviceSubTitle,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  serviceBtn,
}) => {
  return (
    <div className='text-center bg-[#0c2454] px-[30px] lg:px-2 xl:px-4 2xl:px-[30px] pt-10 pb-[30px] rounded-lg group overflow-hidden transition-all duration-500 relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-Secondarycolor2-0 before:transition-all before:duration-500 before:-z-10  hover:before:w-full hover:before:left-0 hover:before:opacity-0'>
      <div className='relative pb-[30px] z-10 flex justify-center'>
        <img
          src={serviceIcon}
          draggable='false'
        />
      </div>
      <h6 className='font-FiraSans text-white-0 text-[15px] mb-[18px] text-white transition-all duration-500 group-hover:text-white uppercase relative z-10 before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:h-[1px] before:w-6 before:bg-white before:transition-all before:duration-500 group-hover:before:bg-white'>
        {serviceSubTitle}
      </h6>
      <Link to={serviceUrl}>
        <button className='font-FiraSans font-medium text-xl lg:text-[17px] xl:text-xl text-white transition-all duration-500 group-hover:text-white'>
          {serviceTitle}
        </button>
      </Link>
      <p className='font-FiraSans text-TextColor-0 transition-all duration-500 group-hover:text-white pt-5 pb-7'>
        {serviceDesc}
      </p>
      <Link to={serviceUrl}>
        <button className='text-2xl text-white transition-all duration-500 group-hover:rotate-45 group-hover:text-white'>
          {serviceBtn}
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
