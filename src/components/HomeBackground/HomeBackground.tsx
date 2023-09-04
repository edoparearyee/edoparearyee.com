import React from 'react';

import styles from './HomeBackground.module.scss';

type HomeBackgroundProps = {};

const HomeBackground: React.FC<HomeBackgroundProps> = () => {
  return (
    <ul className={styles['home-background__circles']}>
      {Array.from(Array(20).keys()).map((i) => (
        <li className={styles['home-background__circle']} key={i}></li>
      ))}
    </ul>
  );
};

export default HomeBackground;
