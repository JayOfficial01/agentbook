import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
