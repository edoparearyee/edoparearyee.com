import React, { PropsWithChildren, useEffect, useState } from 'react';
import classNames from 'classnames';

import Image from '../Image/Image';
import { ResponsiveImageWithAltText } from '@/models/image.model';

import styles from './Carousel.module.scss';

export type CarouselProps = PropsWithChildren<{
  images: ResponsiveImageWithAltText[];
  className?: string;
  duration?: number;
}>;

const Carousel: React.FC<CarouselProps> = ({
  images,
  duration = 5000,
  className,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState<number>();
  const [timeoutMain, setTimeoutMain] = useState<number>();
  const [timeoutAnimation1, setTimeoutAnimation1] = useState<number>();
  const [timeoutAnimation2, setTimeoutAnimation2] = useState<number>();

  useEffect(() => {
    if (timeoutMain || timeoutAnimation1 || timeoutAnimation2) return;

    setTimeoutMain(
      window.setTimeout(() => {
        setTimeoutMain(undefined);
        const image = currentImage >= images.length - 1 ? 0 : currentImage + 1;
        setNextImage(image);

        setTimeoutAnimation2(
          window.setTimeout(() => {
            setTimeoutAnimation2(undefined);
            setCurrentImage(image);
          }, 1000),
        );

        setTimeoutAnimation1(
          window.setTimeout(() => {
            setTimeoutAnimation1(undefined);
            setNextImage(undefined);
          }, 1300),
        );
      }, duration),
    );

    return () => {
      window.clearTimeout(timeoutMain);
      window.clearTimeout(timeoutAnimation1);
      window.clearTimeout(timeoutAnimation2);
    };
  }, [
    currentImage,
    nextImage,
    duration,
    images,
    timeoutMain,
    timeoutAnimation1,
    timeoutAnimation2,
  ]);

  return (
    <div className={classNames(styles.carousel, className)}>
      <Image
        sources={images[currentImage].image}
        alt={images[currentImage].alt}
        className={classNames(styles.carousel__image, {
          [styles['carousel__image--fade-out']]: nextImage !== undefined,
        })}
      />
      {nextImage !== undefined ? (
        <Image
          sources={images[nextImage].image}
          alt={images[nextImage].alt}
          className={styles['carousel__next-image']}
        />
      ) : null}
    </div>
  );
};

export default Carousel;
