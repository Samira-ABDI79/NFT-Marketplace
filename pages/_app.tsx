import MainLayout from "../components/Layout/MainLayout";
import { AppProps } from "../node_modules/next/app";
import "../styles/globals.css";
import "../styles/UIstyle.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
