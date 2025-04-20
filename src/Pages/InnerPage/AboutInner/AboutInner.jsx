import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import About from '../../../Component4Default/About/About';
import Counter from '../../../Component3Default/Counter/Counter';
import ContentSlider from '../../../Component3Default/ContentSlider/ContentSlider';
import WhyChoose from './WhyChoose/WhyChoose';
import TeamMember from './TeamMember/TeamMember';

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'About Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'About Us'}
      />
      <About />
      <Counter />
      <TeamMember />
      <ContentSlider />
      <WhyChoose />
    </>
  );
};

export default AboutInner;
