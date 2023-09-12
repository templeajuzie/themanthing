'use client';
import FooterComp from '@/Components/Footer/FooterComp';
import NavbarComp from '@/Components/Navbar/NavbarComp';
import Team from '@/Components/Team/TeamComp';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <NavbarComp />
      <Team />
      <FooterComp />
    </div>
  );
};

export default ContactUs;
