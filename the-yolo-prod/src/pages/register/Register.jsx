import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
  const {createUser, loading, setLoading} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/";
  const handleSubmit = e =>{
    e.preventDefault();
    console.log("hit")
    const fullName = e.target.fullname.value;
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;

    if (password !== confirm_password) {
      return toast.error("Password and confirm password not matched")
    }
    const user = {
      fullName, userName, email, password, confirm_password
    }
    console.log(user)
    createUser(email,password)
    .then(result =>{
      toast.success('Successfully user created');
      navigate(from, {replace: true})
    })
    .catch(error=>{
      setLoading(false)
      console.error(error.message)
      toast.error(error.message)
    })
  }
  return (
    <div className="mt-6">
      <div className="border-gray-200 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-gray-200 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              className="block border border-gray-200 w-full p-3 rounded mb-4"
              name="username"
              placeholder="User Name"
              required
            />
            <input
              type="email"
              className="block border border-gray-200 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="block border border-gray-200 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="block border border-gray-200 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-600 hover:bg-green-800 focus:outline-none my-1"
            >
              Create Account
            </button>
            </form>
            <div className="text-center text-sm text-gray-800 mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-gray-800 text-gray-800"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-gray-800 text-gray-800"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-gray-800 mt-6">
            Already have an account?
            <Link to={"/login-page"}
              className="no-underline border-b border-blue-600 text-blue-600"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
