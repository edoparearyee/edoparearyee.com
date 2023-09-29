'use client';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';

import Image from '../Image/Image';
import Button from '../Button/Button';
import Type from '../Type/Type';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon/ChevronLeftIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon/ChevronRightIcon';
import { ResponsiveImageWithAltText } from '@/models/image.model';
import Video from '../Video/Video';
import { Video as CaseStudyVideo } from '../../models/caseStudy.model';
import Loader from '../Loader/Loader';

import styles from './Carousel.module.scss';

export type CarouselProps = PropsWithChildren<{
  images: ResponsiveImageWithAltText[];
  video?: CaseStudyVideo;
  className?: string;
  duration?: number;
  autoPlay?: boolean;
  controls?: boolean;
  controlsPosition?: 'fixed' | 'absolute';
  transition?: 'fade' | 'slide';
  fullScreen?: boolean;
  isMobile?: boolean;
}>;

type Direction = 'next' | 'previous';

const Carousel: React.FC<CarouselProps> = ({
  images,
  video,
  duration = 5000,
  autoPlay = true,
  controls = false,
  controlsPosition = 'absolute',
  transition = 'fade',
  isMobile = false,
  fullScreen = false,
  className,
}) => {
  const [assets, setAssets] = useState<
    Array<ResponsiveImageWithAltText | CaseStudyVideo>
  >([...images, ...(video ? [video] : [])]);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState<number>();
  const [timeoutMain, setTimeoutMain] = useState<number>();
  const [timeoutAnimation1, setTimeoutAnimation1] = useState<number>();
  const [timeoutAnimation2, setTimeoutAnimation2] = useState<number>();
  const [direction, setDirection] = useState<Direction>('next');

  const goToImage = useCallback(
    (options: { direction: Direction }) => {
      setTimeoutMain(undefined);
      setDirection(options.direction);
      let image: number;
      if (options.direction === 'next') {
        image = currentImage >= assets.length - 1 ? 0 : currentImage + 1;
      } else {
        image = currentImage === 0 ? assets.length - 1 : currentImage - 1;
      }
      setNextImage(image);

      setTimeoutAnimation2(
        window.setTimeout(
          () => {
            setTimeoutAnimation2(undefined);
            setCurrentImage(image);
          },
          transition === 'fade' ? 1000 : 500,
        ),
      );

      setTimeoutAnimation1(
        window.setTimeout(
          () => {
            setTimeoutAnimation1(undefined);
            setNextImage(undefined);
          },
          transition === 'fade' ? 1300 : 600,
        ),
      );
    },
    [currentImage, assets.length, transition],
  );

  useEffect(() => {
    if (imagesLoaded === images.length) {
      setIsLoading(false);
    }
  }, [images.length, imagesLoaded]);

  useEffect(() => {
    if (timeoutMain || timeoutAnimation1 || timeoutAnimation2 || !autoPlay)
      return;

    setTimeoutMain(
      window.setTimeout(() => {
        goToImage({ direction: 'next' });
      }, duration),
    );

    return () => {
      window.clearTimeout(timeoutMain);
      window.clearTimeout(timeoutAnimation1);
      window.clearTimeout(timeoutAnimation2);
    };
  }, [
    autoPlay,
    duration,
    goToImage,
    timeoutAnimation1,
    timeoutAnimation2,
    timeoutMain,
  ]);

  useEffect(() => {
    setAssets([...images, ...(video ? [video] : [])]);
  }, [images, video]);

  return (
    <div
      className={classNames(
        styles.carousel,
        styles[`carousel--transition-${transition}`],
        className,
      )}
    >
      {isLoading && !autoPlay ? (
        <>
          <div className={styles.carousel__loader}>
            <Loader />
          </div>
          {images.map((image, i) => (
            <Image
              className={styles['carousel__loading-image']}
              key={i}
              sources={image.image}
              alt={image.alt}
              onLoad={() => {
                setImagesLoaded((loaded) => loaded + 1);
              }}
            />
          ))}
        </>
      ) : (
        <>
          {(assets[currentImage] as ResponsiveImageWithAltText).image ? (
            <Image
              sources={images[currentImage].image}
              alt={images[currentImage].alt}
              className={classNames(styles.carousel__image, {
                [styles[`carousel__image--exit-${direction}`]]:
                  nextImage !== undefined,
              })}
              imgClassName={classNames(styles['carousel__image-img'], {
                [styles['carousel__image--mobile']]: isMobile,
                [styles['carousel__image--fullscreen']]: fullScreen,
              })}
            />
          ) : (
            <div
              className={classNames(
                styles.carousel__image,
                styles.carousel__video,
                {
                  [styles[`carousel__image--exit-${direction}`]]:
                    nextImage !== undefined,
                },
              )}
            >
              <Video
                className={styles['carousel__video-el']}
                src={(assets[currentImage] as CaseStudyVideo).url}
                poster={
                  (assets[currentImage] as CaseStudyVideo).poster.image[0]['2x']
                }
                controls
                playsInline
              />
            </div>
          )}

          {nextImage !== undefined ? (
            (assets[nextImage] as ResponsiveImageWithAltText).image ? (
              <Image
                sources={images[nextImage].image}
                alt={images[nextImage].alt}
                className={classNames(styles['carousel__next-image'], {
                  [styles[`carousel__image--entry-${direction}`]]:
                    nextImage !== undefined,
                })}
                imgClassName={classNames(styles['carousel__image-img'], {
                  [styles['carousel__image--mobile']]: isMobile,
                  [styles['carousel__image--fullscreen']]: fullScreen,
                })}
              />
            ) : (
              <div
                className={classNames(
                  styles['carousel__next-image'],
                  styles.carousel__video,
                  {
                    [styles[`carousel__image--entry-${direction}`]]:
                      nextImage !== undefined,
                  },
                )}
              >
                <Video
                  className={styles['carousel__video-el']}
                  src={(assets[nextImage] as CaseStudyVideo).url}
                  poster={
                    (assets[nextImage] as CaseStudyVideo).poster.image[0]['2x']
                  }
                  controls
                  playsInline
                />
              </div>
            )
          ) : null}

          {controls ? (
            <div
              className={classNames(
                styles.carousel__controls,
                styles[`carousel__controls--position-${controlsPosition}`],
              )}
            >
              <Button
                className={classNames(
                  styles['carousel__control'],
                  styles['carousel__control-previous'],
                )}
                appearance="solid"
                renderAs="button"
                onClick={() => {
                  goToImage({ direction: 'previous' });
                }}
                disabled={nextImage !== undefined}
              >
                <ChevronLeftIcon className={styles['carousel__control-icon']} />
                <Type appearance="visually-hidden" renderAs="span">
                  Go to previous image
                </Type>
              </Button>
              <Type className={styles['carousel__control-indicator']}>
                {currentImage + 1} / {assets.length}
              </Type>
              <Button
                className={classNames(
                  styles['carousel__control'],
                  styles['carousel__control-next'],
                )}
                appearance="solid"
                renderAs="button"
                onClick={() => {
                  goToImage({ direction: 'next' });
                }}
                disabled={nextImage !== undefined}
              >
                <ChevronRightIcon
                  className={styles['carousel__control-icon']}
                />
                <Type appearance="visually-hidden" renderAs="span">
                  Go to next image
                </Type>
              </Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Carousel;
