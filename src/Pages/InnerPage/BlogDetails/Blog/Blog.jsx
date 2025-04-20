import { FaCircle } from 'react-icons/fa6';
import blogThumb from '/images/blog_01.png';
import blogThumb2 from '/images/blog_02.png';
import blogThumb3 from '/images/blog_03.png';
import BlogCard from './BlogCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsArrowRight } from 'react-icons/bs';

const BlogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaCircle />,
    blogDate: '04 Mar, 2025',
    blogPostBy: 'TECHNOLOGY',
    blogUrl: '/blog_details',
    blogTitle: 'Globally disintermediate exten services Planning',
    blogBtn: 'Read More',
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaCircle />,
    blogDate: '14 Mar, 2025',
    blogPostBy: 'Business',
    blogUrl: '/blog_details',
    blogTitle: 'Sustainability Consulting for Business Planning',
    blogBtn: 'Read More',
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDate: '24 Mar, 2025',
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Consulting',
    blogUrl: '/blog_details',
    blogTitle: 'Consulting Industry changing Business Landscape',
    blogBtn: 'Read More',
    blogBtnIcon: <BsArrowRight />,
  },
];

const Blog = () => {
  return (
    <section className='py-28 bg-BodyBg4-0'>
      <div className='Container'>
        <div className='text-center'>
          <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
            Related Blog Posts
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[56px]'>
          {BlogData.map(
            ({
              id,
              blogThumb,
              blogDateIcon,
              blogDate,
              blogPostBy,
              blogUrl,
              blogTitle,
              blogBtn,
              blogBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <BlogCard
                    blogThumb={blogThumb}
                    blogDateIcon={blogDateIcon}
                    blogDate={blogDate}
                    blogPostBy={blogPostBy}
                    blogUrl={blogUrl}
                    blogTitle={blogTitle}
                    blogBtn={blogBtn}
                    blogBtnIcon={blogBtnIcon}
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

export default Blog;
