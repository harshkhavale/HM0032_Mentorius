import React, { useEffect, useState } from "react";
import {
  apple,
  github,
  google,
  officeview,
  sampleproductbrand,
  whitebag,
} from "../assets/index.js";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls.js";
import toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { slideFromLeft } from "../constants/style";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // New state to track login success
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { email, password });
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Login failed. Please try again.");
    } else if (!isFetching && user) {
      // Assuming 'user' is the data returned upon successful login
      handleLoginSuccess();
      toast.success("Login successful!");
      navigate("/dashboard");
    }
  }, [error, isFetching, user]);

  const handleLoginSuccess = () => {
    setLoginSuccess(true); // Set login success flag
  };
  return (
    <motion.div variants={slideFromLeft} initial="hidden" animate="visible">
      <div className="card flex-1 flex flex-col md:px-20  gap-4 ">
        <div className="shadow-md mb-10 rounded-2xl min-w-full p-6">
          <p className=" text-start text-3xl  font-semibold my-6">
            Welcome Back,
          </p>

          <div className=" flex  justify-center w-full items-center flex-col ">
            <div className="  flex flex-col w-full  justify-center items-center gap-4">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-300 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium  z-50 absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-300 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute z-50  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <div className="btn w-full">
                <button
                  type="button"
                  className=" border-2  font-bold text-white w-full bg-primary border-primary p-2  rounded-2xl "
                  onClick={handleClick}
                  disabled={isFetching}
                >
                  {isFetching ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress style={{ color: "white" }} />
                    </Box>
                  ) : (
                    <p>Sign In</p>
                  )}
                </button>
              </div>
              <div className="options flex justify-center gap-8 items-center my-4">
                <img
                  src={google}
                  alt="google"
                  className="w-10 bg-white p-2 rounded-full h-10"
                />
                <img
                  src={github}
                  alt="google"
                  className="w-10 bg-white p-2 rounded-full h-10"
                />
                <img
                  src={apple}
                  alt="google"
                  className="w-10 bg-white p-2 rounded-full h-10"
                />
              </div>
              <div className=" w-full h-[1px] bg-slate-300" />
              <div className="signup flex">
                <Link to="/auth/register" className="flex">
                  Dont have any account?{" "}
                  <p className=" font-bold hover:text-primary px-2">Sign up</p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
