import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import Home3 from '../Pages/Home3/Home3';
import Main3 from '../Main/Main3';
import Main11 from '../Main/Main11';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import ServiceInner from '../Pages/InnerPage/ServiceInner/ServiceInner';
import ServiceDetails from '../Pages/InnerPage/ServiceDetails/ServiceDetails';
import PortfolioDetails from '../Pages/InnerPage/PortfolioDetails/PortfolioDetails';
import BlogDetails from '../Pages/InnerPage/BlogDetails/BlogDetails';
import TeamInner from '../Pages/InnerPage/TeamInner/TeamInner';
import PricingInner from '../Pages/InnerPage/PricingInner/PricingInner';
import ContactInner from '../Pages/InnerPage/ContactInner/ContactInner';
import PortfolioInner from '../Pages/InnerPage/PortfolioInner/PortfolioInner';
import Main2 from '../Main/Main2';
import Home2 from '../Pages/Home2/Home2';
import Main4 from '../Main/Main4';
import Home4 from '../Pages/Home4/Home4';
import Main5 from '../Main/Main5';
import Home5 from '../Pages/Home5/Home5';
import Main6 from '../Main/Main6';
import Home6 from '../Pages/Home6/Home6';
import Main7 from '../Main/Main7';
import Home7 from '../Pages/Home7/Home7';
import Main8 from '../Main/Main8';
import Home8 from '../Pages/Home8/Home8';
import Main9 from '../Main/Main9';
import Home9 from '../Pages/Home9/Home9';
import Main10 from '../Main/Main10';
import Home10 from '../Pages/Home10/Home10';
import Home11 from '../Pages/Home11/Home11';
import Main12 from '../Main/Main12';
import BlogGrid from '../Pages/InnerPage/BlogGrid/BlogGrid';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home1 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main2 />,
    children: [
      {
        path: '/home2',
        element: <Home2 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main3 />,
    children: [
      {
        path: '/home3',
        element: <Home3 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main4 />,
    children: [
      {
        path: '/home4',
        element: <Home4 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main5 />,
    children: [
      {
        path: '/home5',
        element: <Home5 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main6 />,
    children: [
      {
        path: '/home6',
        element: <Home6 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main7 />,
    children: [
      {
        path: '/home7',
        element: <Home7 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main8 />,
    children: [
      {
        path: '/home8',
        element: <Home8 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main9 />,
    children: [
      {
        path: '/home9',
        element: <Home9  />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main10 />,
    children: [
      {
        path: '/home10',
        element: <Home10 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main11 />,
    children: [
      {
        path: '/home11',
        element: <Home11 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main12 />,
    children: [
      {
        path: '/about',
        element: <AboutInner />,
      },
      {
        path: '/service',
        element: <ServiceInner />,
      },
      {
        path: '/service_details',
        element: <ServiceDetails />,
      },
      {
        path: '/portfolio_details',
        element: <PortfolioDetails />,
      },
      {
        path: '/blog_details',
        element: <BlogDetails />,
      },
      {
        path: '/blog_grid',
        element: <BlogGrid />,
      },
      {
        path: '/team',
        element: <TeamInner />,
      },
      {
        path: '/portfolio',
        element: <PortfolioInner />,
      },
      {
        path: '/pricing',
        element: <PricingInner />,
      },
      {
        path: '/contact',
        element: <ContactInner />,
      },
    ],
  },
]);

export default router;
