'use client'

import CountUp from 'react-countup';

const Track = () => {
  return (
    <section className="text-gray-400 md:px-16 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              <CountUp end={4000} duration={10} />K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              <CountUp end={2000} duration={10} />K
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              <CountUp end={25} duration={30} />
            </h2>
            <p className="leading-relaxed">Events</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              <CountUp end={900} duration={20} />
            </h2>
            <p className="leading-relaxed">Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
