import React from 'react';
import { AnimatePresence } from "framer-motion";
import { StyledLayout } from './style';
import PageTransition from './page-transition/PageTransition';
import Header from '../header/Header';
import { GlobalStyle } from '../global/GlobalStyle';
import Router from 'next/dist/next-server/lib/router/router';

type LayoutProps = {
  children: JSX.Element,
  router: Router,
}

const Layout = ({ children, router }: LayoutProps) => {

  return (
    <StyledLayout className="layout">
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <PageTransition key={router.route}>
          {children}
        </PageTransition>
      </AnimatePresence>
    </StyledLayout>
  )
}

export default Layout
