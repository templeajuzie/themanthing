'use client'

const Newsletter = () => {
  return (
    <section className="text-gray-400 body-font md:px-16">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Stay Empowered with Our Newsletter
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Join our community of men on a journey of self-discovery and
            empowerment. Subscribe to our newsletter and unlock a world of
            valuable insights, inspiring stories, and expert advice delivered
            right to your inbox.
          </p>
        </div>
        <div className="flex w-full lg:w-2/3 sm:flex-row flex-col mx-auto sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
          <div className="relative sm:mb-0 flex-grow w-full">
            <label
              for="full-name"
              className="leading-7 text-sm text-gray-400"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative sm:mb-0 flex-grow w-full">
            <label for="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className=" text-black inline-flex items-center bg-[#FFD700] hover:bg-[#f5e692] border-0 py-2 px-8 focus:outline-none  rounded text-base mt-4 md:mt-0">
            Join
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2 "
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
