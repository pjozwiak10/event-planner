import React from 'react';

type LayoutProps = {
  children: JSX.Element
}

const variable = 'dupa';
const variable1 = 'dupa1';

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Layout;
