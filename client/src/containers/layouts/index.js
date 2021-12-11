import React from "react";
import { Footer, Header } from "..";
import CertificateCard from "../../components/card/CertificateCard";
import { Facebook1 } from "../../components/Facebook/Facebook";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <div style={{ width: "10rem", height: "10rem" }}>
        <Facebook1 />
      </div>
    </>
  );
};

export default Layout;
