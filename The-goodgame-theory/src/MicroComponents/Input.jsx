import React from 'react'

const Input = ({ title, search, setSearch, searchFunction }) => {
  return (
    <input
      type="text"
      placeholder={`${title}`}
      className="input input-bordered w-full max-w-xs"
      onChange={(e)=>{setSearch(e.target.value); searchFunction()}}
    />
  );
};

export default Input
