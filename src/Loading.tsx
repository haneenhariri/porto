import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-gray-100">
      <div className="animate-spin mb-4">
        <FaSpinner size={50} className="text-link-active" />
      </div>
      <h1 className="text-3xl font-semibold text-gray-300 animate-fade-in">Loading...</h1>
    </div>
  );
};

export default LoadingPage;
