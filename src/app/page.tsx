'use client';

import { setConfiguration } from 'react-grid-system';
import { useState } from 'react';

import gridConfig from '@/components/GridContainer/gridConfig';
import HomeSection from '@/components/HomeSection/HomeSection';
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection';
import WorkSection, { WorkCard } from '@/components/WorkSection/WorkSection';

import styles from './page.module.scss';

setConfiguration(gridConfig);

const workCard = {
  image: [
    {
      breakpoint: 1024,
      '1x': 'https://picsum.photos/id/905/600/450',
      '2x': 'https://picsum.photos/id/905/1200/900',
    },
    {
      breakpoint: 768,
      '1x': 'https://picsum.photos/id/905/400/350',
      '2x': 'https://picsum.photos/id/905/800/700',
    },
    {
      breakpoint: 375,
      '1x': 'https://picsum.photos/id/905/300/450',
      '2x': 'https://picsum.photos/id/905/600/900',
    },
  ],
  imageAlt: 'Lights at night',
  title: 'Card title',
  blurb:
    'Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit.',
};

const Home = () => {
  const [cards, setCards] = useState<WorkCard[]>([
    { ...workCard, slug: '1' },
    { ...workCard, slug: '2' },
    { ...workCard, slug: '3' },
  ]);

  return (
    <main className={styles.main}>
      <HomeSection />
      <AboutMeSection />
      <WorkSection cards={cards} ctaText="See more" ctaLink="/work" />
    </main>
  );
};

export default Home;
