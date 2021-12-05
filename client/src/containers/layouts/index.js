import React from "react";
import { Footer, Header } from "..";
import CertificateCard from "../../components/card/CertificateCard";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
