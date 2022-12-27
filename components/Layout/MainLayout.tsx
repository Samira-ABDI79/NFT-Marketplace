import { PropsWithChildren, ReactNode } from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
