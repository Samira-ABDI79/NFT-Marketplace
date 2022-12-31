import { PropsWithChildren, ReactNode } from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";
import Drawer from "../UI/Drawer";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Drawer flag="Main"/>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
