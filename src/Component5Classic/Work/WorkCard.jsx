/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const WorkCard = ({ workTitle, workDesc, workUrl, workBtn }) => {
  return (
    <div className='group relative z-10 pt-7 pb-6 transition-all duration-500 hover:bg-PrimaryColor2-0 hover:pl-4 sm:hover:pl-8 md:hover:pl-[70px] hover:bg-opacity-15  before:absolute before:left-10 before:top-1/2 before:h-[2px] before:w-0 before:bg-PrimaryColor2-0 before:transition-all before:duration-500 md:hover:before:w-[150px] lg:hover:before:w-20 2xl:hover:before:w-[150px] hover:before:-left-[110px] lg:hover:before:-left-[30px] 2xl:hover:before:-left-[110px]'>
      <Link
        to={workUrl}
        className='absolute top-1/2 right-0 transition-all duration-500 group-hover:right-4 md:group-hover:right-[30px] -translate-y-1/2'
      >
        <button className='size-8 sm:size-10 md:size-[58px] rounded-full text-xl sm:text-2xl md:text-3xl text-white bg-transparent relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:size-full before:-z-10 before:bg-PrimaryColor2-0 before:scale-0 before:transition-all before:duration-500 before:rounded-full group-hover:before:scale-100'>
          {workBtn}
        </button>
      </Link>
      <Link to={workUrl}>
        <button className='font-FiraSans text-left font-medium text-lg sm:text-[22px] sm:text-2xl lg:text-2xl xl:text-3xl text-white'>
          {workTitle}
        </button>
      </Link>
      <p className='font-FiraSans text-[15px] font-light text-white opacity-70 mt-3'>
        {workDesc}
      </p>
    </div>
  );
};

export default WorkCard;
