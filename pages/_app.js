import "../styles/globals.css";
import "../styles/drawer.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "../styles/Slider.css"

//INTRNAL IMPORT
import { NavBar } from "../components/componentsindex";
import Footer from "../components/UI/Footer"
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;
