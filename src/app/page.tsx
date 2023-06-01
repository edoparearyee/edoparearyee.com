import Type from '@/components/Type/Type';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <Type renderAs="h1" appearance="h1">
        Welcome to Next.js!
      </Type>
      <Type renderAs="p" appearance="monospace-2">
        {'<AboutMe />'}
      </Type>
    </main>
  );
};

export default Home;
