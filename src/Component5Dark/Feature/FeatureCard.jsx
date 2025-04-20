/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureUrl,
  featureDesc,
  featureBtnContent,
  featureBtnIcon,
}) => {
  return (
    <div className='feature8-box flex flex-col sm:flex-row gap-8 rounded-md bg-transparent group relative z-10'>
      <div className='feature8-icon size-[100px] lg:size-[60px] xl:size-[100px] rounded-full rounded-se-md bg-[#0c2454] relative transition-all duration-500 flex justify-center items-center z-10 overflow-hidden group-hover:rounded-se-full'>
        <img
          src={featureIcon}
          draggable='false'
        />
      </div>
      <div className='flex-1 overflow-hidden relative -mt-1'>
        <h5 className='font-FiraSans font-medium text-white text-opacity-90 text-xl sm:text-[22px] lg:text-lg xl:text-[22px] pb-3'>
          {featureTitle}
        </h5>
        <p className='font-FiraSans text-[15px] text-TextColor-0'>
          {featureDesc}
        </p>
        <div className='inline-block mt-4'>
          <Link to={featureUrl}>
            <button className='font-FiraSans overflow-hidden flex gap-2 items-center text-white text-opacity-90'>
              <span className='-ml-[84px] transition-all duration-500 group-hover:ml-0'>
                {featureBtnContent}
              </span>
              <span className='text-white text-opacity-90 text-xl'>
                {featureBtnIcon}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
