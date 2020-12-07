import { useEffect, useState } from 'react';

function optimizeResize(fn: () => void, ms: number) {
  let timer: number | undefined;
  return (...args: Event[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      fn.apply(args);
    }, ms);
  }
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  useEffect(() => {
    const vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const handleResize = optimizeResize(() => {
      setWindowSize(getSize());
    }, 1000);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowSize]);

  return windowSize;
}

export default useWindowSize;