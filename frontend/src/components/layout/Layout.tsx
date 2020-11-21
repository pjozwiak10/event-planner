import React from 'react';

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Layout;
