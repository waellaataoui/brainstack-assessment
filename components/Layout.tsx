import React from "react";
import BottomBar from "./BottomBar";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav></Nav>
      <div className="page-wrapper">
        <Sidebar></Sidebar>
        <div className="page-content">{children}</div>
      </div>
      <BottomBar></BottomBar>
    </>
  );
};

export default Layout;
