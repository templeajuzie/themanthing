'use client'

import Image from 'next/image';
import logo from '../../../public/Resources/images/TMT.png';
import { HiMenuAlt3, HiUserCircle } from 'react-icons/hi';
import Link from 'next/link';
import SidebarComp from './Sidebar';
import { useState } from 'react';
import Dropdownnav from './Dropdownnav';

const NavbarComp = () => {
  const [profilenav, setProfilenav] = useState(false);

  const [menu, setMenu] = useState(false);

  const openProfile = () => {
    setProfilenav(!profilenav);
  };
  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="px-4 md:px-16 py-4 text-gray-400 top-0 z-10 sticky relative bg-gray-900 body-font">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <a
          href="/"
          className="flex title-font font-medium items-center text-white w-auto"
        >
          <Image
            src={logo}
            alt="TMT Logo"
            width={180}
            height={250}
            className="w-auto h-50 md:w-40 md:h-auto lg:w-auto lg:h-auto z-0"
          />
        </a>
        <nav className="hidden lg:flex md:ml-auto md:mr-auto md:flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-white">
            Groups
          </Link>
          <Link href="/events" className="mr-5 hover:text-white">
            Events
          </Link>
          <Link href="/" className="mr-5 hover:text-white">
            Partnership
          </Link>
          <Link href="/" className="mr-5 hover:text-white">
            Blogs
          </Link>
          <Link href="/" className="mr-5 hover:text-white">
            Resources
          </Link>
        </nav>

        <div className="flex flex-row align-middle gap-7">
          <button className="hidden text-black md:inline-flex md:visible items-center bg-[#f4c430] hover:bg-[#f5e692] border-0 py-2 px-6 focus:outline-none rounded text-base mt-4 md:mt-0">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <div className="flex align-middle justify-center md:visible lg:flex">
            <HiUserCircle
              className="flex m-auto text-4xl align-middle cursor-pointer text-white"
              onClick={openProfile}
            />
            <HiMenuAlt3
              className="flex m-auto text-4xl align-middle ml-4 cursor-pointer text-white lg:hidden"
              onClick={openMenu}
            />
          </div>
        </div>
      </div>
      {menu && <Dropdownnav />}
      {profilenav && <SidebarComp openProfile={openProfile} />}
    </header>
  );
};

export default NavbarComp;
