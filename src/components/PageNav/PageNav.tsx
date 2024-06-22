import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function PageNav() {
  return (
    <header>
      <nav className='bg-gray-800 border-gray-200 px-4 tablet:px-6 py-2.5 '>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto'>
          <Logo>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Invoice</span>
          </Logo>
          <div className='flex items-center tablet:order-2'>
            <NavLink
              to='/login'
              className='text-white bg-purple hover:bg-purple-light focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 tablet:px-5 py-2 tablet:py-2.5 mr-2 focus:outline-none '
            >
              Log in
            </NavLink>

            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg tablet:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='mobile-menu-2'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full tablet:flex tablet:w-auto tablet:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium tablet:flex-row tablet:space-x-8 tablet:mt-0'>
              <li>
                <NavLink
                  to='/'
                  className='block py-2 pl-3 pr-4 text-white rounded bg-primary-700 tablet:bg-transparent tablet:text-primary-700 tablet:p-0 dark:text-white'
                  aria-current='page'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/product' className='nav-item'>
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to='/pricing' className='nav-item'>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='nav-item'>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
