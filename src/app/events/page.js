'use client';
import EventComp from '@/Components/Event/EventComp';
import FooterComp from '@/Components/Footer/FooterComp';
import NavbarComp from '@/Components/Navbar/NavbarComp';
import Image from 'next/image';

const Events = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <NavbarComp />
      <EventComp />
      <FooterComp />
    </div>
  );
};

export default Events;
