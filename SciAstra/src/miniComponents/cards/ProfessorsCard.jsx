import React from "react";

const ProfessorsCard = ({mentor}) => {
  // console.log(mentor)
  return (
      <section className="bg-gray-100">
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={mentor.img}
            alt="Profile picture"
          />
          <h2 className="text-center text-2xl font-semibold mt-3">{mentor.name}</h2>
          <p className="text-center text-gray-600 mt-1">{mentor.university}</p>
          <div className="flex justify-center mt-5">
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
              Twitter
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
              LinkedIn
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
              GitHub
            </a>
          </div>
        </div>
      </section>
  );
};

export default ProfessorsCard;
