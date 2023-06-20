'use client';

import { setConfiguration } from 'react-grid-system';

import HomeSection from '@/components/HomeSection/HomeSection';
import gridConfig from '@/components/GridContainer/gridConfig';

import styles from './page.module.scss';

setConfiguration(gridConfig);

const Home = () => {
  return (
    <main className={styles.main}>
      <HomeSection />
    </main>
  );
};

export default Home;
