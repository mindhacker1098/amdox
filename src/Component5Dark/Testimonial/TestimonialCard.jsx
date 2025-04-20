/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiQuate,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='flex flex-col lg:items-center lg:flex-row gap-5 md:gap-4 xl:gap-9'>
      <div>
        <img
          src={testiImg}
          draggable='false'
        />
      </div>
      <div className='flex-1'>
        <p className='text-5xl text-PrimaryColor2-0'>{testiQuate}</p>
        <div className='flex items-center justify-between mt-[18px]'>
          <ul className='flex items-center gap-1'>
            <li className='text-[#ff9c00] text-lg'>{testiRatingIcon}</li>
            <li className='text-[#ff9c00] text-lg'>{testiRatingIcon}</li>
            <li className='text-[#ff9c00] text-lg'>{testiRatingIcon}</li>
            <li className='text-[#ff9c00] text-lg'>{testiRatingIcon}</li>
            <li className='text-[#ff9c00] text-lg'>{testiRatingIcon}</li>
          </ul>
        </div>
        <p className='font-FiraSans text-base sm:text-xl md:text-2xl md:leading-[38px] italic text-white pt-5 mb-7'>
          {testiDesc}
        </p>
        <h5 className='font-FiraSans font-medium text-white text-xl transition-all duration-500 group-hover:text-white'>
          {testiName}
        </h5>
        <p className='font-FiraSans text-[15px] text-TextColor-0 transition-all duration-500 group-hover:text-white pt-2'>
          {testiDesignation}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
