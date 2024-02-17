import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { logo } from "../assets";
import JoinClassrooms from "./modals/JoinClassrooms";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user.user);

  return (
    <div className="navbar text-sm md:text-base p-2 flex justify-between w-full overflow-x-hidden items-center h-[10vh]">
      {showModal && <JoinClassrooms onClose={() => setShowModal(false)} />}

      <div className="logo">
        <a href="/">
          <img src={logo} className="md:h-14 ps-6 md:ps-auto h-10" alt="" />
        </a>
      </div>
      <div className="flex justify-center inline-flex items-center space-x-4 sm:space-x-8 text-sky-600">
        <a className="ease-in duration-200 hover:font-bold" href="/news">
          News
        </a>
        <a className="ease-in duration-200 hover:font-bold" href="/find_mentor">
          Find a Mentor
        </a>
        <a className="ease-in duration-200 hover:font-bold" href="/#contact">
          Contact
        </a>
        <a
          className="rounded-full pl-3 pr-3 pt-2 pb-2 bg-sky-100"
          href="/auth/login"
        >
          Login
        </a>
      </div>
      <div className="text-large font-bold">
        {user ? <a href="/dashboard">hi, {user.fullname}</a> : ""}
      </div>
      <div className="middle flex items-center gap-4 justify-center">
        <div className="search flex border rounded-xl items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          {isNonMobileScreen ? (
            <input
              type="text"
              className="text-sm w-72 p-1 outline-none"
              placeholder="search your course here..."
            />
          ) : (
            ""
          )}
        </div>

        <div className="theme flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>

        {isNonMobileScreen && (
          <button
            onClick={() => setShowModal(true)}
            className="ml-auto bg-primary text-white shadow-lg p-2 flex  items-center gap-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18M12 3v18"
              />
            </svg>
            Join Classroom
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
