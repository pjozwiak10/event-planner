import React from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="container">
      <div className="header">
        <Link href="/"><a>home</a></Link>
        <Link href="/about"><a>about</a></Link>
      </div>
      {children}
      <div className="footer">
        <p>footerk</p>
        <p>footerk</p>
        <p>footerk</p>
        <p>footerk</p>
        <p>footerk</p>
        <p>footerk</p>
      </div>
    </div>
  )
}

export default Layout;
