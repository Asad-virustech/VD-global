import { useDocumentMeta } from '../../lib/useDocumentMeta';
import { FIRM } from '../../content/site';
import { AboutHero } from '../components/sections/about/AboutHero';
import { WhyWeExist } from '../components/sections/about/WhyWeExist';
import { WhatMakesUsDifferent } from '../components/sections/about/WhatMakesUsDifferent';
import { HowWeThink } from '../components/sections/about/HowWeThink';
import { AboutPhilosophy } from '../components/sections/about/AboutPhilosophy';
import { WhoWeWorkWith } from '../components/sections/about/WhoWeWorkWith';
import { OurPromise } from '../components/sections/about/OurPromise';
import { AboutFaq } from '../components/sections/about/AboutFaq';
import { AboutCta } from '../components/sections/about/AboutCta';

export default function About() {
  useDocumentMeta({
    title: 'About — VD Global',
    description: `${FIRM.name} is an Authority Advisory Firm built on ethical principles — helping credible founders and businesses earn Recognition, Credibility, Authority and Trust through honest, long-term advisory.`,
  });

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
