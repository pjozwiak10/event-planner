import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { WindowSizeContext } from '../../../utils/createWindowSizeContext';
import { breakpoints } from '../../../utils/media';
import { StyledSearchIcon } from '../../global/StyledIcons';
import { StyledSearch } from './style';

let searchVariants = {};
let searchTogglerVariants = {};
let searchTogglerStyle = {};
let searchInputVariants = {};
const searchTransition = {
  duration: 0.4,
  type: 'tween',
}

const createSearchAnimation = (windowSize: { width: number, height: number }) => {
  const isLaptop = windowSize.width >= breakpoints.laptop;
  if (isLaptop) {
    searchVariants = {
      show: { width: 'auto', backgroundColor: '#fff' },
      hidden: { width: 26, backgroundColor: 'rgba(255,255,255,0)' },
    };
    searchTogglerVariants = {
      show: { x: 0 },
      hidden: { x: 15 },
    };
    searchInputVariants = {
      show: { opacity: 1 },
      hidden: { opacity: 0 },
    };
    searchTogglerStyle = {
      x: 15,
    };
  }
}

const Search = () => {
  const [searchState, setSearchState] = useState(false);

  const windowSize = useContext(WindowSizeContext);

  useEffect(() => {
    if (!windowSize) return;
    createSearchAnimation(windowSize);
  }, []);

  const handleShowSearchInput = () => {
    setSearchState(state => !state);
  }

  return (
    <StyledSearch className="search"
      variants={searchVariants}
      animate={searchState ? 'show' : 'hidden'}
      transition={searchTransition}
    >
      <motion.input
        variants={searchInputVariants}
        animate={searchState ? 'show' : 'hidden'}
        transition={{ ...searchTransition, delay: searchState ? 0.4 : 0 }}
        type="text" className="search__input" placeholder="Wpisz czego szukasz..." />
      <motion.button
        variants={searchTogglerVariants}
        animate={searchState ? 'show' : 'hidden'}
        transition={searchTransition}
        style={searchTogglerStyle}
        className="search__toggler" onClick={handleShowSearchInput}>
        <StyledSearchIcon />
      </motion.button>
    </StyledSearch>
  )
}

export default Search;
