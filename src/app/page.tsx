import Type from '@/components/Type/Type';
import styles from './page.module.scss';
import Image from '@/components/Image/Image';

const Home = () => {
  return (
    <main className={styles.main}>
      <Type renderAs="h1" appearance="h1">
        Welcome to Next.js!
      </Type>
      <Type renderAs="p" appearance="monospace-2">
        {'<AboutMe />'}
      </Type>
      <Image
        sources={[
          {
            breakpoint: 1024,
            '1x': 'https://picsum.photos/id/195/1024/576',
            '2x': 'https://picsum.photos/id/195/2048/1152',
          },
          {
            breakpoint: 768,
            '1x': 'https://picsum.photos/id/195/768/1365',
            '2x': 'https://picsum.photos/id/195/1536/2730',
          },
          {
            breakpoint: 375,
            '1x': 'https://picsum.photos/id/195/375/666',
            '2x': 'https://picsum.photos/id/195/750/1332',
          },
        ]}
        alt=""
      />
    </main>
  );
};

export default Home;
