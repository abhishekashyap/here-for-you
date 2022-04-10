import React, { ReactChildren, ReactPropTypes } from "react";
import Gems from "../components/common/Gems/Gems";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Gems />
      <div className="h-screen w-screen font-sans bg-gradient-to-r from-gray-700 via-gray-900 to-black flex items-center justify-center p-2 2xl:p-6">
        <div className="max-w-2xl h-full w-full relative">{children}</div>
      </div>
    </>
  );
};

export default Layout;
