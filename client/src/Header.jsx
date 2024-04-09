import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center  dark:bg-dark`} style={{ height: '100px' }}>
      <div className="container  " style={{ height: '100px' }}>
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-8">
            <a href="/#" className="block w-full pt-4">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                
                className="dark:"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className=" dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4 pl-8 mx-4 " style={{marginTop:"-17px"}}>
            <div className="">
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-6 top-full w-full  rounded-lg bg-white px-8 py-1 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex space-x-8">
                  <ListItem NavLink="/blog">Home</ListItem>
                  <ListItem NavLink="/savings">Savings-Calculator</ListItem>
                  <ListItem NavLink="/about">About</ListItem>
                  <ListItem NavLink="blog">Blog</ListItem>
                  <ListItem NavLink="Display">Display</ListItem>
                  <ListItem NavLink="/StockPrices">StockPrices</ListItem>
                </ul>
              </nav>
            </div>
            <div className=" justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-black hover:text-primary dark:text-black"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-black hover:bg-primary/90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-blue-600   lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
