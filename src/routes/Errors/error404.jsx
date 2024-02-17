import React from 'react';
import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-4">We apologize for the inconvenience. Please try again later.</p>
        <p className="underline text-red-900">
            <i>{error.statusText || error.message}</i>
        </p>
        <button
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Error404;
