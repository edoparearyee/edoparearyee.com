'use client';

import { useState } from 'react';

import WorkSection, { WorkCard } from '@/components/WorkSection/WorkSection';

import styles from './page.module.scss';

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

const Work = () => {
  const [cards, setCards] = useState<WorkCard[]>([
    { ...workCard, slug: '1' },
    { ...workCard, slug: '2' },
    { ...workCard, slug: '3' },
    { ...workCard, slug: '4' },
    { ...workCard, slug: '5' },
    { ...workCard, slug: '6' },
    { ...workCard, slug: '7' },
    { ...workCard, slug: '8' },
    { ...workCard, slug: '9' },
    { ...workCard, slug: '10' },
    { ...workCard, slug: '11' },
    { ...workCard, slug: '12' },
  ]);

  return (
    <main className={styles.main}>
      <WorkSection cards={cards} ctaText="Go back" ctaLink="/" />
    </main>
  );
};

export default Work;
