import React from 'react';

import HomeSection from '@/components/HomeSection/HomeSection';
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection';
import WorkSection from '@/components/WorkSection/WorkSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import { GetCaseStudyOptions, getCaseStudies } from '@/services/contentful';
import { mapCaseStudyToCard } from '@/utils/mapCaseStudy';

import styles from './page.module.scss';

const getData = async (options?: GetCaseStudyOptions) => {
  return getCaseStudies(options);
};

const Home = async () => {
  const { items, total } = await getData();

  return (
    <main className={styles.main}>
      <HomeSection id="home" />
      <AboutMeSection id="about-me" />
      <WorkSection
        id="work"
        initialCards={items.map(mapCaseStudyToCard)}
        ctaText="See more"
        total={total}
      />
      <SkillsSection id="skills" />
      <ContactSection id="contact" />
    </main>
  );
};

export default Home;
