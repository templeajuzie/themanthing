'use client';

import Image from 'next/image';
import img1 from '../../../public/Resources/images/snapshot1.jpg';
import img2 from '../../../public/Resources/images/snapshot2.jpg';
import img3 from '../../../public/Resources/images/snapshot3.jpg';
import img4 from '../../../public/Resources/images/snapshot4.jpg';
import img5 from '../../../public/Resources/images/snapshot5.jpg';
import img20 from '../../../public/Resources/images/snapshot20.jpg';

const EventSnippet = () => {
  return (
    <section className="text-gray-400 md:px-16 body-font">
      <div className="container px-5 py-24 mx-auto flex gap-12 flex-wrap">
        <div className="flex w-full mb-500 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            TMT Event Snapshot
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Our past events have consistently provided opportunities for men to
            engage in personal development, connect with a supportive community,
            and contribute to positive change in their lives and society.
          </p>
        </div>
        <div className="w-full md:flex flex-wrap md:-m-2 -m-1 md:w-full lg:w-full">
          <div className="w-full md:flex flex-wrap md:w-1/2 lg:w-1/2">
            <div className="w-full md:p-2 p-1 md:w-1/2 lg:w-1/2">
              <Image
                alt="gallery"
                height={500}
                width={500}
                className="w-full object-cover h-full object-center block"
                src={img1}
              />
            </div>
            <div className="w-full md:p-2 p-1 md:w-1/2 lg:w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={img2}
                height={500}
                width={500}
              />
            </div>
            <div className="w-full md:p-2 p-1 md:w-full lg:w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={img3}
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="w-full md:flex flex-wrap md:w-1/2 lg:w-1/2">
            <div className="w-full md:p-2 p-1 md:w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={img4}
                height={500}
                width={500}
              />
            </div>
            <div className="w-full md:p-2 p-1 md:w-1/2 lg:w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={img5}
                height={500}
                width={500}
              />
            </div>
            <div className=" w-full md:p-2 p-1 md:w-1/2 lg:w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={img20}
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSnippet;
