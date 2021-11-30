import React from "react";
import { Header } from "..";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
