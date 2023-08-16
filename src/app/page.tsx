import React from 'react';

import HomeSection from '@/components/HomeSection/HomeSection';
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection';
import WorkSection from '@/components/WorkSection/WorkSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import ContactSection from '@/components/ContactSection/ContactSection';

import styles from './page.module.scss';
import { getCaseStudies } from '@/services/contentful';

const getData = async () => {
  return getCaseStudies();
};

const Home = async () => {
  const { items } = await getData();

  return (
    <main className={styles.main}>
      <HomeSection id="home" />
      <AboutMeSection id="about-me" />
      <WorkSection
        id="work"
        cards={items.map((item) => ({
          slug: item.slug,
          image: item.hero,
          imageAlt: item.hero.alt,
          title: item.title,
          logoUrl: item.client.logoLightUrl,
        }))}
        ctaText="See more"
        ctaLink="/work"
      />
      <SkillsSection id="skills" />
      <ContactSection id="contact" />
    </main>
  );
};

export default Home;
