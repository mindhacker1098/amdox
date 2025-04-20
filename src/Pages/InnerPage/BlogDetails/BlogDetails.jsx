import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import {
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Icon from '/images/pagination_icon1.png';
import Icon2 from '/images/pagination_icon2.png';
import image from '/images/image.jpg';
import { BsArrowRight } from 'react-icons/bs';
import Blog from './Blog/Blog';

const BlogDetails = () => {
  return (
    <>
      <BreadCrumb2 />
      <section className='pb-[120px]'>
        <div className='Container'>
          <div className='pt-6 sm:pt-10 lg:pt-[66px] px-4 md:px-10 2xl:px-[110px] relative z-10 sm:-mt-[60px] bg-white rounded-3xl md:mx-10 lg:mx-0 xl:mx-14 2xl:mx-0'>
            <div>
              <p className='font-FiraSans text-TextColor2-0 mt-3'>
                Globally engage cross-media leadership skills before cross-media
                innovation forward morph flexible whereas process-centric models
                predomin Efficiently transform customer directed alignments for
                front-end meta Dramatically harness cross-platform best
                practices whereas centric data business services. Conveniently
                formula standards in innovation with wireless vertical
                intellectual capital before global architectures technically
                engage based results with visionary models. Dramatically
                harness-platform best practices whereas business services.
                Conveniently experiences. formula standards in innovation with
                wireless
              </p>
              <p className='font-FiraSans text-TextColor2-0 mt-7'>
                Dramatically harness cross-platform best practices whereas
                business services. Conveniently standards in innovation with
                wireless Globally engage leadership best breed to rather than
                bricks-and-clicks infomediaries monotonectally standards in
                innovation within wireless vertical intellectual global
                architectures engage based results main visionary models
                digitalizations completed
              </p>
              <div className='max-w-[860px] mt-11 mb-9'>
                <h4 className='font-FiraSans text-xl text-HeadingColor-0 font-medium sm:pl-20 relative z-10 before:absolute before:left-0 before:top-3 sm:before:w-[70px] before:h-[2px] before:bg-HeadingColor-0'>
                  “Globally engage cross-media leadership skills before
                  cross-media great oppotunities whereas process-centric models
                  efficiently ”
                </h4>
              </div>
            </div>
            <div className='pt-5'>
              <h2 className='font-FiraSans font-semibold text-2xl sm:text-[36px] text-HeadingColor-0'>
                Sales Benifits
              </h2>
              <p className='font-FiraSans text-TextColor2-0 mt-[29px]'>
                Globally engage cross-media leadership skills before cross-media
                innovation forward morph flexible whereas process-centric models
                predomin Efficiently transform customer directed alignments for
                front-end meta Dramatically harness cross-platform best
                practices whereas centric data business services. Conveniently
                formula standards in innovation with wireless vertical
                intellectual capital before global architectures technically
                engage based results with visionary models. Dramatically
                harness-platform best
              </p>
              <div className='grid gap-y-4 sm:grid-cols-2 md:grid-cols-3 mt-11 mb-14 pb-1'>
                <div>
                  <ul className='space-y-[18px]'>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      Professional Team Member
                    </li>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      Solutions the Clients Problems
                    </li>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      Extra Facilities Sales Increase
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='space-y-[18px]'>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      Any Problem Solving
                    </li>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      24/7 Supports Available
                    </li>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      Free Tools Provides for Clients
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='space-y-[18px]'>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      24/7 Supports Available
                    </li>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      Any Problem Solving
                    </li>
                    <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                      <span className='text-PrimaryColor-0'>
                        <FaCheck size={'18'} />
                      </span>{' '}
                      Free Tools Provides for Clients
                    </li>
                  </ul>
                </div>
              </div>
              <p className='font-FiraSans text-TextColor2-0'>
                {`Interactively create visionary communities vis-a-vis team
                building e-tailers. Phosfluorescently fashion pandemic
                leadership via B2B alignments. restore front-end growth
                strategies via e-business services. Progressively simplify
                prospective total linkage whereas client-focused platforms.
                leverage other's open-source outsourcing with market-driven
                opportunities. Holisticly predominate error-free supply chains
                via integrated growth Progressively harness enterprise-wide
                web-readiness after cutting-edge processes. Appropriately
                develop unique total linkage rather than high leadership.
                Authoritatively conceptualize resource sucking`}
              </p>
              <div className='flex items-center gap-7 justify-between flex-wrap mt-14 pt-6'>
                <div>
                  <ul className='flex items-center gap-2'>
                    <li>
                      <Link
                        to={'/'}
                        className='font-FiraSans text-sm font-medium uppercase py-[10px] px-6 bg-BodyBg4-0 rounded-full flex items-center justify-center text-TextColor2-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/'}
                        className='font-FiraSans text-sm font-medium uppercase py-[10px] px-6 bg-BodyBg4-0 rounded-full flex items-center justify-center text-TextColor2-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/'}
                        className='font-FiraSans text-sm font-medium uppercase py-[10px] px-6 bg-BodyBg4-0 rounded-full flex items-center justify-center text-TextColor2-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                      >
                        IT Solution
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='flex items-center gap-4'>
                    <li>
                      <Link
                        to={'/'}
                        className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                      >
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/'}
                        className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                      >
                        <FaXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/'}
                        className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/'}
                        className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex items-center gap-7 justify-between flex-wrap border-y border-BorderColor-0 py-7 mt-12 mb-20'>
                <div>
                  <Link to={'#'}>
                    <button className='flex items-center gap-2 font-FiraSans font-medium text-lg text-HeadingColor-0'>
                      <img
                        src={Icon}
                        alt='Icon'
                        draggable='false'
                      />{' '}
                      Previous Posts
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={'#'}>
                    <button className='flex items-center gap-2 font-FiraSans font-medium text-lg text-HeadingColor-0'>
                      Next Posts{' '}
                      <img
                        src={Icon2}
                        alt='Icon'
                        draggable='false'
                      />
                    </button>
                  </Link>
                </div>
              </div>
              <div
                id='comment'
                className='pt-4'
              >
                <h4 className='font-FiraSans text-HeadingColor-0 text-[28px] font-medium'>
                  Comments (1)
                </h4>
                <div className='flex flex-col sm:flex-row gap-5 relative z-10 bg-white shadow-shades px-4 md:px-10 pt-6 md:pt-12 pb-5 md:pb-11 rounded-2xl mt-7'>
                  <div className='w-[66px]'>
                    <img
                      src={image}
                      alt='Image'
                      draggable='false'
                      className='rounded-full'
                    />
                  </div>
                  <div className='flex-1'>
                    <h6 className='font-FiraSans text-xl font-medium text-HeadingColor-0'>
                      Jhon D. Alexon
                    </h6>
                    <p className='font-FiraSans text-[15px] text-TextColor2-0 mt-1'>
                      24 October, 2025
                    </p>
                    <p className='font-FiraSans text-TextColor2-0 2xl:pr-7 mt-6'>
                      Media leadership skills before cross-media innovation
                      forward morph flexible whereas process-centric models
                      Efficiently transform customer directed alignments for
                      front-end meta Dramatically harness
                    </p>
                    <div className='absolute top-12 right-10'>
                      <button className='font-FiraSans text-TextColor2-0 px-5 py-2 rounded-full bg-BodyBg4-0 text-sm uppercase font-medium transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className='font-FiraSans text-HeadingColor-0 text-[28px] font-medium mt-20 pt-2 mb-2'>
                  Post A Comment
                </h4>
                <p className='font-FiraSans text-TextColor2-0'>{`Your E-Mail address will not be published.So, don't worry.`}</p>
                <form
                  action='#'
                  method='post'
                  className='space-y-[30px] mt-8'
                >
                  <textarea
                    name='meassage'
                    id='meassage'
                    placeholder='Write Meassage...'
                    className='w-full h-[194px] rounded-md bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans placeholder:text-TextColor2-0 outline-none border border-transparent focus:border-PrimaryColor-0 transition-all duration-500 py-3 px-7 resize-none -mb-[6px]'
                  ></textarea>
                  <div className='flex flex-col sm:flex-row gap-[30px]'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Enter Name*'
                      required
                      className='w-full h-[65px] rounded-md bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans placeholder:text-TextColor2-0 outline-none border border-transparent focus:border-PrimaryColor-0 transition-all duration-500 py-3 px-7'
                    />
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter E-Mail*'
                      required
                      className='w-full h-[65px] rounded-md bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans placeholder:text-TextColor2-0 outline-none border border-transparent focus:border-PrimaryColor-0 transition-all duration-500 py-3 px-7'
                    />
                  </div>
                  <input
                    type='url'
                    name='url'
                    id='url'
                    placeholder='Website Url'
                    required
                    className='w-full h-[65px] rounded-md bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans placeholder:text-TextColor2-0 outline-none border border-transparent focus:border-PrimaryColor-0 transition-all duration-500 py-3 px-7'
                  />
                  <label
                    htmlFor='terms'
                    className='flex items-center gap-2 cursor-pointer'
                  >
                    <input
                      type='checkbox'
                      name='terms'
                      id='terms'
                    />
                    <p className='font-FiraSans text-TextColor2-0'>
                      Save my iunformation in this browser for the next time I
                      comment.
                    </p>
                  </label>
                  <button
                    type='submit'
                    className='py-5 w-full bg-PrimaryColor-0 font-FiraSans rounded-md text-white flex items-center justify-center gap-2 uppercase relative z-10 group overflow-hidden'
                  >
                    Submit Comments{' '}
                    <span className=''>
                      <BsArrowRight size={'20'} />
                    </span>
                    <span className='absolute bg-HeadingColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0'></span>
                    <span className='absolute bg-HeadingColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]'></span>
                    <span className='absolute bg-HeadingColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2'></span>
                    <span className='absolute bg-HeadingColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]'></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog />
    </>
  );
};

export default BlogDetails;
