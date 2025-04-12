import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-gray-100 animate-fade-in">
      <div className="mb-6 animate-bounce">
        <FaExclamationTriangle size={100} color="#F44336" />
      </div>
      <h1 className="text-4xl font-bold text-red-500 mb-4 animate-slide-in-left">Oops! Something Went Wrong.</h1>
      <p className="text-lg text-gray-400 mb-6 animate-slide-in-right">
        We couldn't find the page you're looking for.
      </p>
      <Link to="/" className="px-6 py-3 bg-link-active text-white font-semibold rounded-lg">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
