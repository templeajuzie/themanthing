'use client';

const { default: Image } = require('next/image');
import logo from '../../../public/Resources/images/TMT.png';
import Link from 'next/link';

const FooterComp = () => {
  return (
    <footer className="text-gray-400 font-light text-[14px] bg-gray-900 body-font md:px-16 pb-7">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="/"
            className="flex ml-auto mr-auto title-font font-medium items-center justify-center  md:justify-start  text-white mb-4 md:mb-0 w-auto"
          >
            <Image
              src={logo}
              alt="TMT Logo"
              width={180}
              height={250}
              className="text-center"
            />
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Empowering Men, Building Brighter Futures, Together!
          </p>
        </div>
        <div className="grid grid-cols-2 md:flex-grow md:flex flex-wrap md:pl-26 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Helpful Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Become a volunteer
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  MasterClass
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Online Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Books
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Community
            </h2>
            <nav className="list-none mb-14">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Support Groups
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Success Stories
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Forums
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Partners & Affiliates
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Partner Organizations
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Affiliates Program
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Sponsorships
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Outreach
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 font-light text-[14px] hover:text-white"
                >
                  Join Work Force
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 font-light text-[14px] text-sm text-center sm:text-left">
            © 2023 The Man Thing —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              Powered by Kliptolite
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="/" className="text-gray-400 font-light text-[14px]">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-400 font-light text-[14px]">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>

            <a className="ml-3 text-gray-400 font-light text-[14px]">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>

            <a href="/" className="ml-3 text-gray-400 font-light text-[14px]">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
