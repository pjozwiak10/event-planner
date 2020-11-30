import React from 'react';
import Link from 'next/link';

import { StyledLogo } from './style';
import { StyledHomeIcon } from '../../global/StyledIcons';
import { Media } from '../../../utils/createAppMedia';

const Logo = () => {
  return (
    <StyledLogo className="logo">
      <Link href="/">
        <a title="logo" className="logo__link">
          <Media between={['mobile', 'laptop']}>
            <StyledHomeIcon />
          </Media>
          <Media greaterThanOrEqual={'laptop'}>
            <img src="/images/logo/logo.svg" alt="logo" />
          </Media>
        </a>
      </Link>
    </StyledLogo>
  )
}

export default Logo;
