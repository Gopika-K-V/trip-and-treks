import React from 'react';
import { Outlet } from 'react-router-dom';
import BannerCarousel from '../../components/BannerCarousel';
import DestinationSection from '../../components/DestinationSection/destinationSection';
import ImageWithText from '../../components/ImageWithText/imageWithText';
import PackageCards from '../../components/PackageCards/packageCards';

const Home = () => {
  return (
    <>
        <BannerCarousel/>
        <ImageWithText/>
        <PackageCards/>
        <DestinationSection/>
    </>
  )
}

export default Home
