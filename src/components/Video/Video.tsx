import React, { useEffect, useRef, useState } from 'react';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

const Video: React.FC<VideoProps> = ({ autoPlay = false, src, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isIntersecting } = useIntersectionObserver(videoRef, {
    threshold: 0,
    root: null,
    rootMargin: '10%',
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    if (isIntersecting) {
      videoRef.current?.play();
      return;
    }
    videoRef.current?.pause();
  }, [autoPlay, src, isIntersecting]);

  return mounted ? (
    <video ref={videoRef} src={src} autoPlay={autoPlay} {...props} />
  ) : null;
};

export default Video;
