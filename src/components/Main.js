import React from 'react';
import SectionBanner from './sections/SectionBanner';
import SectionSpecials from './sections/SectionSpecials';
import SectionTestimonials from './sections/SectionTestimonials';
import SectionResume from './sections/SectionResume';

const Main = () => {
  return (
    <main>
      <SectionBanner />
      <SectionSpecials />
      <SectionTestimonials />
      <SectionResume />
    </main>
  );
};

export default Main;
