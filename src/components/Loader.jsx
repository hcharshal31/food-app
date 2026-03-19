import React from "react";

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-white border-l-red-800 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
