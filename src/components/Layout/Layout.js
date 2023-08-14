import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Fullscreen } from "@mui/icons-material";



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div >{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;