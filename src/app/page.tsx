'use client';

import { setConfiguration } from 'react-grid-system';

import gridConfig from '@/components/GridContainer/gridConfig';
import HomeSection from '@/components/HomeSection/HomeSection';
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection';
import WorkSection from '@/components/WorkSection/WorkSection';

import styles from './page.module.scss';

setConfiguration(gridConfig);

const Home = () => {
  return (
    <main className={styles.main}>
      <HomeSection />
      <AboutMeSection />
      <WorkSection />
    </main>
  );
};

export default Home;
