import React from "react";

export const ContentLayout: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col items-center mt-36 w-full flex-1">
      <h2 className="text-3xl text-teal-700 pb-4">We're</h2>
      <h1 className="text-8xl text-teal-500">Here for You</h1>
      {children}
    </main>
  );
};

export default ContentLayout;
