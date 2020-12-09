import React, { useRef } from 'react';
import LazyLoad from 'react-lazyload';
import { StyledLazyImage } from './style';

type LazyImageProps = {
  src: string;
  alt: string;
  ratio: string;
}

const LazyImage = ({ src, alt, ratio }: LazyImageProps) => {

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleRemoveLoader = () => {
    loaderRef.current!.remove();
  }

  return (
    <StyledLazyImage className="lazy-image" ratio={ratio}>
      <div className="lazy-image__loader" ref={loaderRef}></div>
      <LazyLoad>
        <img
          onLoad={handleRemoveLoader}
          onError={handleRemoveLoader}
          src={src}
          alt={alt}
          className="lazy-image__image"
        />
      </LazyLoad>
    </StyledLazyImage>
  )
}

export default LazyImage;
