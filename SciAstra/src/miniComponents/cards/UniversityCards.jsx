import React from "react";

const UniversityCards = () => {
  return (
    <div>
      <div className=" bg-gray-100 grid items-center justify-center">
        <div className="p-6 bg-white flex items-center space-x-6 rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20  text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-700 mb-2">
              Job Security
            </h1>
            <p className="text-gray-600  text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              cupiditate ut laboriosam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCards;
