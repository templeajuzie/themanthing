'use client'
import Link from 'next/link';

const Dropdownnav = () => {
  const navigation = [
    { name: 'Group', href: '/app' },
    { name: 'Events', href: '/app' },
    { name: 'Partnership', href: '/pricing' },
    { name: 'Blog', href: '/helpcenter' },
    { name: 'Resources', href: '/faq' },
  ];

  return (
    <div className="py-10 px-4  h-screen  bg-gray-900">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-TextDark2 text-TextLight2 dark:hover:bg-BackgroundDark2 hover:BackgroundLight2"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="py-6">
        <button className="flex text-black md:inline-flex md:visible items-center bg-[#f4c430] hover:bg-[#f5e692] border-0 py-2 px-6 focus:outline-none rounded text-base mt-4 md:mt-0">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdownnav;
