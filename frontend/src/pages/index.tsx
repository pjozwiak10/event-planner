import React from 'react';

import { StyledButton } from '../components/global/StyledButton';
import LazyImage from '../components/lazy-image/LazyImage';

const Home = () => {
  return (
    <div>
      <StyledButton style={{ margin: '20vh auto' }}>Button</StyledButton>
      <img src="/images/background1.jpg" alt="" style={{ marginTop: '20vh', height: '100vh', width: '100%', display: 'block', objectFit: 'cover' }} />
      <img src="/images/background2.jpg" alt="" style={{ height: '100vh', width: '100%', display: 'block', objectFit: 'cover' }} />
      <LazyImage src='/images/background1.jpg' alt='image' ratio='66.64%' />
    </div>
  )
}

export default Home;
