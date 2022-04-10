import React from "react";

export const UserMessage: React.FC = ({ children }) => {
  return (
    <div className="bg-green-600 py-2 px-5 m-1 rounded-tr-3xl rounded-l-3xl hyphens-auto w-fit max-w-[50%] text-white self-end mb-4">
      {children}
    </div>
  );
};
