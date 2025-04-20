import featureIcon from "/images/feature_icon01.png";
import featureIcon2 from "/images/feature_icon02.png";
import featureIcon3 from "/images/feature_icon03.png";
import featureIcon4 from "/images/feature_icon04.png";
import FeatureCard from "./FeatureCard";
import featureShape from "/images/arrow.png";
import { LuMoveRight } from "react-icons/lu";

const featureData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'Business Planning and Technologist',
    featureDesc:
      'Completely implement globals without impactful markets in conveniently done innovate customer directed',
    featureUrl: '/service',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Human home ones and Consulting',
    featureDesc:
      'Completely implement globals without impactful markets in conveniently done innovate customer directed',
    featureUrl: '/service',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Opportunity Global Business Service',
    featureDesc:
      'Completely implement globals without impactful markets in conveniently done innovate customer directed',
    featureUrl: '/service',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: 'Insurance for Family Consulting',
    featureDesc:
      'Completely implement globals without impactful markets in conveniently done innovate customer directed',
    featureUrl: '/service',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
];

const Feature = () => {
  return (
    <section className='pt-28 pb-[120px] bg-[#093c3d] relative z-10'>
      <div className='Container relative'>
        <img
          src={featureShape}
          className='absolute top-0 right-16 animate-swing hidden xl:block'
        />
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-white uppercase flex items-center justify-center gap-2 mb-3'>
            Featured Service
          </h5>
          <h1 className='font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
            Unlocking Your {`Business's`} Potential with
            <br className='hidden sm:block' />
            the Best Innovate Consulting active and
            <br className='hidden sm:block' />
            Dedicated Customers
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12'>
          {featureData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtn,
              featureBtnIcon,
            }) => {
              return (
                <div
                  key={id}
                >
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtn={featureBtn}
                    featureBtnIcon={featureBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
