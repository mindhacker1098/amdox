import { Outlet } from 'react-router-dom';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Navbar3 from '../Shared/Navbar/Navbar3';
import Footer2 from '../Shared/Footer/Footer2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main3 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  return (
    <>
      <HelmetChanger title={'Business Consulting Dark'} />
      <Navbar3 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main3;
