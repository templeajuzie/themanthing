'use client';

import Image from 'next/image';
import Hero from '@/Components/Home/Hero';
import NavbarComp from '@/Components/Navbar/NavbarComp';
import Track from '@/Components/Home/Track';
import Identity from '@/Components/Home/Identity';
import ConveinerSnippet from '@/Components/Home/ConveinerSnipet';
import InterestComp from '@/Components/Home/Interest';
import EventSnippet from '@/Components/Home/EventSnippets';
import TestimonialSnippet from '@/Components/Home/TestimonialSnippet';
import Newsletter from '@/Components/Home/Newsletter';
import FooterComp from '@/Components/Footer/FooterComp';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-black'>
      <NavbarComp />
      <Hero />
      <Track />
      <Identity />
      <ConveinerSnippet />
      <InterestComp />
      <EventSnippet />
      <TestimonialSnippet />
      <Newsletter />
      <FooterComp />
    </main>
  );
}
