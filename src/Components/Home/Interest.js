'use client'

const InterestComp = () => {
  return (
    <section className="text-gray-400 body-font md:px-16">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">
          Partner with Us Today and Transform Lives Together
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">
            we believe in the power of collaboration to make a difference. We
            invite you to join hands with us in our mission to empower men to
            become their authentic selves and build brighter futures. By
            partnering with us, you become an integral part of a movement that
            {`'`}s positively impacting lives.
          </p>
          <div className="flex md:mt-4 mt-6">
            <button className="inline-flex text-black bg-[#f4c430] border-0 py-1 px-4 focus:outline-none hover:bg-[#f5e692] rounded">
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestComp;
