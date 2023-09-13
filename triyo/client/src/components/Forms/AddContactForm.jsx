import React, { useState } from "react";

const AddContactForm = () => {

    const [options, setOptions] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    console.log(firstName,lastName,options)
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <label htmlFor="first-name">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs mt-2"
          />
        </div>
        <div className=" flex items-center my-3">
          <label htmlFor="status" className="mr-3">
            Status
          </label>
          <div className="flex flex-col justify-center">
            <div>
            {" "}
            <input
              type="radio"
              name="active"
              className="radio radio-warning"
             
            />
            Active
            </div>
            <div>
            <input
              type="radio"
              name="inactive"
              className="radio radio-warning"
           
            />
            Inactive
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-secondary" type="submit">
            Create Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
