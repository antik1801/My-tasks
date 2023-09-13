import React from "react";

const MentorAndAdvisirsCard = ({ mentor }) => {
    // console.log(mentor)
  return (
    <div className="relative  mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl ">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="relative">
              <img
                src={mentor.img}
                className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              />
            </div>
          </div>
          <div className="w-full text-center mt-20">
            {/* <div className="flex justify-center lg:pt-4 pt-8 pb-0">
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  3,360
                </span>
                <span className="text-sm text-slate-400">Photos</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  2,454
                </span>
                <span className="text-sm text-slate-400">Followers</span>
              </div>

              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  564
                </span>
                <span className="text-sm text-slate-400">Following</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
            {mentor.name}
          </h3>
          <h2 className="my-2">{mentor.position}</h2>
          <p className="text-2xl font-extrabold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">{mentor.university}</p>
        </div>

      </div>
    </div>
  );
};

export default MentorAndAdvisirsCard;
