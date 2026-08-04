import { usePageSeo } from '../../lib/usePageSeo';
import { AboutHero } from '../components/sections/about/AboutHero';
import { WhyWeExist } from '../components/sections/about/WhyWeExist';
import { WhatMakesUsDifferent } from '../components/sections/about/WhatMakesUsDifferent';
import { HowWeThink } from '../components/sections/about/HowWeThink';
import { AboutPhilosophy } from '../components/sections/about/AboutPhilosophy';
import { WhoWeWorkWith } from '../components/sections/about/WhoWeWorkWith';
import { OurPromise } from '../components/sections/about/OurPromise';
import { AboutFaq, FAQS } from '../components/sections/about/AboutFaq';
import { AboutCta } from '../components/sections/about/AboutCta';

export default function About() {
  usePageSeo({ path: '/about', faq: FAQS });

  return (
    <>
      <AboutHero />
      <WhyWeExist />
      <WhatMakesUsDifferent />
      <HowWeThink />
      <AboutPhilosophy />
      <WhoWeWorkWith />
      <OurPromise />
      <AboutFaq />
      <AboutCta />
    </>
  );
}
