import React from "react";
import { Header } from "..";
import CertificateCard from "../../components/card/CertificateCard";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <CertificateCard />
        <CertificateCard
          title="học viên lý"
          colorOne="rgba(51, 168, 253, 0.2)"
          colorTwo="rgba(76, 0, 200, 0.2) "
        />
      </footer>
    </>
  );
};

export default Layout;
