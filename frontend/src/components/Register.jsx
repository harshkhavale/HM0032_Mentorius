import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/apiCalls.js";
import toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Google } from "@mui/icons-material";
import { apple, github, google, officeview } from "../assets/index.js";
import { motion } from "framer-motion";
import { slideFromLeft } from "../constants/style";
import { publicRequest } from "../redux/requestMethods.js";
import { setUsertype } from "../redux/userSlice.js";
const Register = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("+91");
  const navigate = useNavigate();
  const [cfpassword, setCfpassword] = useState("");
  const [contact, setContact] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.user);
  const handleClick = async (e) => {
    e.preventDefault();
    if (!password.match(cfpassword)) {
      toast.error("Password and confirm password should be the same!");
    } else {
      try {
        await register(dispatch, {
          fullname,
          email,
          contact: country.concat(contact),
          password,
        });

        if (!error) {
          toast.success("Registration successful!");
          try {
            const mentor = await publicRequest.get(`/mentors/check/${user.id}`);
            console.log(mentor);
            if (mentor.data) {
              // If mentor data is returned, set usertype to "Mentor"
              dispatch(setUsertype("MENTOR"));
            }
            navigate("/mentordashboard");
          } catch (error) {
            console.error("Error fetching mentor:", error);
            navigate("/userdashboard");
            dispatch(setUsertype("USER"));

            // Handle error
          }
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } catch (error) {
        // Handle any errors that might occur during registration
        console.error("Registration failed:", error);
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return (
    <motion.div variants={slideFromLeft} initial="hidden" animate="visible">
      <div className="card flex-1 flex flex-col px-20 -mt-10  gap-4 ">
        <div className="shadow-md mb-10 rounded-2xl min-w-full p-6">
          <div className="my-6 mt-10 md:mt-6">
            <p className=" text-start text-3xl   font-semibold ">
              Start the journey,
            </p>
            <p className=" text-gray-400">Please Sign Up below</p>
          </div>

          <div className=" flex  justify-center w-full items-center flex-col ">
            <div className="  flex flex-col w-full  justify-center items-center gap-2">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  class="block py-2.5 w-80 px-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-300 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_name"
                  class="peer-focus:font-medium  z-50 absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 w-80 px-0  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-300 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
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
              <div class="relative z-0 w-full mb-5 group flex gap-3 items-center">
                <div className="county">
                  <select
                    id="countries"
                    class=" border p-1 outline-none rounded-lg border-gray-300 dark:bg-dark"
                  >
                    <option selected>IND +91</option>
                    <option value="USA">USA +62</option>
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    name="floating_contact"
                    id="floating_contact"
                    className="block py-4 px-0 w-full dark:bg-dark    border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-300 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer "
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_contact"
                    class="peer-focus:font-medium  z-50 absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contact
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-300 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
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
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_cfpassword"
                  id="floating_cfpassword"
                  class="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-300 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  onChange={(e) => {
                    setCfpassword(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_cfpassword"
                  class="peer-focus:font-medium absolute z-50  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>

              <div className="btn w-full">
                <button
                  type="button"
                  className=" border-2 text-white font-bold w-full bg-primary border-primary p-2  rounded-2xl "
                  onClick={handleClick}
                  disabled={isFetching}
                >
                  {isFetching ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress style={{ color: "white" }} />
                    </Box>
                  ) : (
                    <p>Sign Up</p>
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
                <Link to="/auth/login" className="flex">
                  Already have an account?
                  <p className=" font-bold hover:text-primary px-2">
                    Sign In
                  </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
