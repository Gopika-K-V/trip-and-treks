import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

const ScrollToTop = () => {
    useEffect(() => {
       window.scrollTo(0, 0);
    }, []);
  
    return null;
  };
const CommonLayout = () => {
  return (
    <>
    <ScrollToTop />
        <HeaderComponent/>
        <main>
            <Outlet/>
        </main>
        <FooterComponent/>
    </>
  );
};

export default CommonLayout;
