import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-purple-700">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
