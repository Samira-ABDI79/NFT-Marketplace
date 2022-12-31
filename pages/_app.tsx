import MainLayout from "../components/Layout/MainLayout";
import { AppProps } from "../node_modules/next/app";
import "../styles/globals.css";
import "../styles/UIstyle.css"
import "../styles/drawer.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "../styles/Slider.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
