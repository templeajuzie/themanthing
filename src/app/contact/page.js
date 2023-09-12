'use client';
import Image from 'next/image';
import FeedbackComp from '@/Components/Feedback/Feedback';
import FooterComp from '@/Components/Footer/FooterComp';
import NavbarComp from '@/Components/Navbar/NavbarComp';

const ContactUs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <NavbarComp />
      <FeedbackComp />
      <FooterComp />
    </div>
  );
};

export default ContactUs;
