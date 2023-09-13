import React from "react";

const Demo = ({university}) => {
    // console.log(university)
  return (
    <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={university.img_url}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{university.name}</h2>
      </div>
    </div>
  );
};

export default Demo;
