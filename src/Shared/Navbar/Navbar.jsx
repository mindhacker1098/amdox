import { Link } from 'react-router-dom';
import Logo from '/images/logo_2.png';
import Logo2 from '/images/logo.png';
import './navbar.css';
import { useEffect, useRef, useState } from 'react';
import {
  FaArrowUp,
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { IoMdPaperPlane } from 'react-icons/io';
import { LuMoveRight } from 'react-icons/lu';
import { ImFacebook2 } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { GiPhone } from 'react-icons/gi';
import { LiaTimesSolid } from 'react-icons/lia';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('.header-sticky');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  //Menu Sidebar

  const menuSideBarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const bodyOverlay2Ref = useRef(null);
  const closeBtn2Ref = useRef(null);

  useEffect(() => {
    const menuSideBar = menuSideBarRef.current;
    const sidebarContent = sidebarContentRef.current;
    const bodyOverlay2 = bodyOverlay2Ref.current;
    const closeBtn2 = closeBtn2Ref.current;

    const addClasses = () => {
      sidebarContent.classList.add('opened');
      bodyOverlay2.classList.add('apply');
    };

    const removeClasses = () => {
      sidebarContent.classList.remove('opened');
      bodyOverlay2.classList.remove('apply');
    };

    if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
      menuSideBar.addEventListener('click', addClasses);
      closeBtn2.addEventListener('click', removeClasses);
      bodyOverlay2.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
        menuSideBar.removeEventListener('click', addClasses);
        closeBtn2.removeEventListener('click', removeClasses);
        bodyOverlay2.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    const offcanvas = offcanvasRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      offcanvas.classList.add('opened');
      bodyOverlay.classList.add('apply');
    };

    const removeClasses = () => {
      offcanvas.classList.remove('opened');
      bodyOverlay.classList.remove('apply');
    };

    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      bodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuBar && offcanvas && bodyOverlay && closeBtn) {
        menuBar.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        bodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  let headerIcon = `  
  <span class="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
`;

  useEffect(() => {
    const mainMenuContent = document.querySelector('.main-menu-content');
    const mainMenuMobile = document.querySelector('.main-menu-mobile');

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      const arrows = document.querySelectorAll(
        '.main-menu-mobile .has-dropdown > a'
      );

      arrows.forEach((arrow) => {
        const arrowBtn = document.createElement('BUTTON');
        arrowBtn.classList.add('dropdown-toggle-btn');
        arrowBtn.innerHTML = headerIcon;

        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener('click', (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle('dropdown-opened');
          arrow.parentElement.classList.toggle('expanded');
          arrow.parentElement.parentElement.classList.add('dropdown-opened');
          arrow.parentElement.parentElement
            .querySelectorAll('.submenu')
            .forEach((submenu) => {
              submenu.style.display =
                submenu.style.display === 'block' ? 'none' : 'block';
            });
          arrow.parentElement.parentElement
            .querySelectorAll('.has-dropdown')
            .forEach((sibling) => {
              if (sibling !== arrow.parentElement) {
                sibling.classList.remove('dropdown-opened');
                sibling.querySelectorAll('.submenu').forEach((submenu) => {
                  submenu.style.display = 'none';
                });
              }
            });
        });
      });
    }
  }, [headerIcon]);

  //Menu Search
  const handleMenuSearchClick = () => {
    document.body.classList.add('search-active');
  };

  const handleCloseSearchClick = () => {
    document.body.classList.remove('search-active');
  };

  const searchContentRef = useRef(null);
  const bodyOverlay3Ref = useRef(null);
  const searchInputRef = useRef(null); // Reference for the search input
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set submitting state

    // Simulate a submission with a timeout (replace with your actual submission logic)
    setTimeout(() => {
      setIsSubmitting(false); // Reset submitting state
      // Optionally clear the input field or close the overlay
      if (searchInputRef.current) {
        searchInputRef.current.value = ''; // Clear the input
      }
      bodyOverlay3Ref.current.classList.remove('apply'); // Close overlay on submit (optional)
      searchContentRef.current.classList.remove('opened'); // Close search content (optional)
    }, 2000); // Simulate a delay of 2 seconds
  };

  return (
    <div data-lenis-prevent>
      <div className='offcanvas-area'>
        <div
          ref={offcanvasRef}
          className='offcanvas'
        >
          <div className='offcanvas_close-btn'>
            <button
              ref={closeBtnRef}
              className='close-btn'
            >
              <FaTimes />
            </button>
          </div>
          <div className='offcanvas_logo'>
            <Link to={'/'}>
              <img
                src={Logo2}
                draggable='false'
              />
            </Link>
          </div>
          <div className='offcanvas_title'>
            <p>
              Business consultation provides expert advice to improve
              performance.
            </p>
          </div>
          <div className='main-menu-mobile lg:none'></div>
          <div className='offcanvas_contact-info'>
            <div className='offcanvas_contact-title'>
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={'/'}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={'/'}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={'/'}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className='offcanvas_input'>
            <div className='offcanvas_input-title'>
              <h4>Get Update</h4>
            </div>
            <form
              action='#'
              method='post'
            >
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter E-Mail'
                  required
                />
                <button type='submit'>
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
            <div className='status'></div>
          </div>
          <div className='offcanvas_social'>
            <div className='social-icon'>
              <Link to={'/'}>
                <FaFacebookF />
              </Link>
              <Link to={'/'}>
                <FaXTwitter />
              </Link>
              <Link to={'/'}>
                <FaPinterestP />
              </Link>
              <Link to={'/'}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={bodyOverlayRef}
        className='body-overlay'
      ></div>
      <header className='bg-BodyBg2-0 relative z-10 before:absolute before:top-0 before:-left-[10%] before:w-3/5 before:h-full before:bg-PrimaryColor-0 before:-skew-x-[30deg] before:-z-10 after:absolute after:top-0 after:left-1/2 after:translate-x-[5px] after:w-1 after:h-full after:bg-PrimaryColor-0 after:-skew-x-[30deg] after:-z-10'>
        <div className='Container flex items-center justify-between h-[50px]'>
          <div className='flex items-center gap-8'>
            <div className=' sm:flex items-center gap-2 hidden'>
              <h6 className='text-lg text-white'>
                <HiOutlineMail />
              </h6>
              <Link
                to={'/'}
                className='font-FiraSans text-[15px] text-white transition-all duration-500 hover:text-white'
              >
                example@gmail.com
              </Link>
            </div>
            <div className=' md:flex items-center gap-2 hidden'>
              <h6 className='text-white [transform:rotateX(180deg)]'>
                <GiPhone />
              </h6>
              <Link
                to={'/'}
                className='font-FiraSans text-[15px] text-white transition-all duration-500 hover:text-white'
              >
                +980 123 (4587) 584
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <h5 className='font-FiraSans font-medium text-sm uppercase text-white'>
              Follow Us :
            </h5>
            <ul className='flex gap-5 items-center'>
              <li>
                <Link
                  to={'/'}
                  className='transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0'
                >
                  <ImFacebook2 size={'14'} />
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0'
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0'
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0'
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div
        id='header-sticky'
        className='header-area header-sticky style-three'
      >
        <div className='Container'>
          <div className='bg-transparent rounded-md flex items-center justify-between lg:grid lg:grid-cols-12'>
            <div className='col-span-2'>
              <div className='header-logo'>
                <Link to={'/'}>
                  <img
                    src={Logo}
                    draggable='false'
                  />
                </Link>
              </div>
            </div>
            <div className='col-span-7 hidden lg:block'>
              <div className='header-main-menu text-center'>
                <nav className='main-menu-content'>
                  <ul>
                    <li className='has-dropdown'>
                      <Link to={'/'}>
                        Home
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/'}>IT Consulting</Link>
                        </li>
                        <li>
                          <Link to={'/home2'}>Business Advising</Link>
                        </li>
                        <li className='has-dropdown'>
                          <Link to={'/home3'}>
                            Business Consulting 01
                            <span>
                              <FaChevronDown />
                            </span>
                          </Link>
                          <ul className='submenu !top-[102px]'>
                            <li>
                              <Link to={'/home3'}>
                                Business Consulting Creative
                              </Link>
                            </li>
                            <li>
                              <Link to={'/home4'}>
                                Business Consulting Classic
                              </Link>
                            </li>
                            <li>
                              <Link to={'/home5'}>
                                Business Consulting Dark
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className='has-dropdown'>
                          <Link to={'/home6'}>
                            Business Consulting 02
                            <span>
                              <FaChevronDown />
                            </span>
                          </Link>
                          <ul className='submenu !top-[154px]'>
                            <li>
                              <Link to={'/home6'}>
                                Business Consulting Creative
                              </Link>
                            </li>
                            <li>
                              <Link to={'/home7'}>
                                Business Consulting Classic
                              </Link>
                            </li>
                            <li>
                              <Link to={'/home8'}>
                                Business Consulting Dark
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className='has-dropdown'>
                          <Link to={'/home9'}>
                            Finance Consulting
                            <span>
                              <FaChevronDown />
                            </span>
                          </Link>
                          <ul className='submenu !top-[206px]'>
                            <li>
                              <Link to={'/home9'}>
                                Finance Consulting Creative
                              </Link>
                            </li>
                            <li>
                              <Link to={'/home10'}>
                                Finance Consulting Classic
                              </Link>
                            </li>
                            <li>
                              <Link to={'/home11'}>
                                Finance Consulting Dark
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={'/about'}>About</Link>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/service'}>
                        Service
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/service'}>service</Link>
                        </li>
                        <li>
                          <Link to={'/service_details'}>service details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/'}>
                        Pages
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                          <Link to={'/service'}>service</Link>
                        </li>
                        <li>
                          <Link to={'/service_details'}>service details</Link>
                        </li>
                        <li>
                          <Link to={'/team'}>Team Member</Link>
                        </li>
                        <li>
                          <Link to={'/pricing'}>Pricing</Link>
                        </li>
                        <li>
                          <Link to={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li>
                          <Link to={'/portfolio_details'}>
                            Portfolio details
                          </Link>
                        </li>
                        <li>
                          <Link to={'/contact'}>Contact</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/'}>
                        Portfolio
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li>
                          <Link to={'/portfolio_details'}>
                            Portfolio details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='has-dropdown'>
                      <Link to={'/'}>
                        Blog
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/blog_grid'}>blog grid</Link>
                        </li>
                        <li>
                          <Link to={'/blog_details'}>blog details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={'/contact'}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='header-right-box flex items-center gap-5 justify-end'>
                <div className='hidden lg:block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[25px] before:h-20 before:w-[1px] before:bg-white before:opacity-20 2xl:mr-5'>
                  <button
                    className='cursor-pointer text-HeadingColor-0 relative top-1 bg-transparent'
                    onClick={handleMenuSearchClick}
                  >
                    <BiSearch size={'20'} />
                  </button>
                </div>
                <div className='hidden lg:block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[27px] before:h-20 before:w-[1px] before:bg-white before:opacity-20'>
                  <Link
                    to={'/'}
                    className='bg-PrimaryColor-0 font-FiraSans text-white capitalize text-[15px] font-medium px-[31px] py-[15px] rounded-md overflow-hidden flex items-center gap-1 border border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-BodyBg2-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100'
                  >
                    get a quote<span></span>
                    <LuMoveRight size={'19'} />
                  </Link>
                </div>
                <div
                  className='header-sidebar hidden size-[55px] bg-BodyBg-0 rounded-md 2xl:flex items-center justify-center cursor-pointer'
                  ref={menuSideBarRef}
                >
                  <button className='menu-sidebar'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
                <div className='header-bar lg:hidden'>
                  <button
                    ref={menuBarRef}
                    className='menu-bar'
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sidebar-content'>
        <div
          ref={sidebarContentRef}
          className='sidebar'
        >
          <div className='sidebar_close-btn'>
            <button
              ref={closeBtn2Ref}
              className='close-btn2'
            >
              <FaTimes />
            </button>
          </div>
          <div className='sidebar_logo'>
            <Link to={'/'}>
              <img
                src={Logo2}
                draggable='false'
              />
            </Link>
          </div>
          <div className='sidebar_title'>
            <p>
              Business consultation provides expert advice to improve
              performance.
            </p>
          </div>
          <div>
            <div className='sidebar_service-title'>
              <h5>What Services We Provide?</h5>
            </div>
            <ul className='service_list'>
              <li>
                <Link to={'/'}>
                  <button>Managed IT Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Cloud Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Cybersecurity Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Network Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Data Analytics</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>IT Consulting Services</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Backup and Disaster Recovery</button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button>Website Development</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='sidebar_contact-info'>
            <div className='sidebar_contact-title'>
              <h5>Have Questions? Contact Our Team!</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={'/'}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={'/'}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={'/'}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className='sidebar_input'>
            <div className='offcanvas_input-title'>
              <h4>Get Update</h4>
            </div>
            <form
              action='#'
              method='post'
            >
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter E-Mail'
                  required
                />
                <button type='submit'>
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
          </div>
          <ul className='sidebar-social-icon'>
            <li>
              <Link to={'/'}>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <FaPinterestP />
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={bodyOverlay2Ref}
        className='body-overlay2'
      ></div>
      <div className='search-popup'>
        <button
          className='close-search'
          onClick={handleCloseSearchClick}
        >
          <LiaTimesSolid />
        </button>
        <button
          className='close-search2'
          onClick={handleCloseSearchClick}
        >
          <FaArrowUp />
        </button>
        <form
          method='post'
          onSubmit={handleSubmit}
        >
          <div className='form-group'>
            <input
              type='search'
              name='search-field'
              placeholder='Search Here'
              required
              className='font-FiraSans placeholder:font-FiraSans'
              ref={searchInputRef}
            />
            <button
              type='submit'
              disabled={isSubmitting} // Disable button if submitting
            >
              {isSubmitting ? (
                <span>Loading...</span> // Show loading text
              ) : (
                <IoSearch />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
