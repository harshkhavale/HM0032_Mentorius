// User.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/user/Profile";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import UserMain from "../components/user/UserMain";
import UserLeftbar from "../components/user/UserLeftbar";

const User = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [toggle, setToggle] = useState(false);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("Dashboard"); // State to keep track of the selected sidebar item

  const handleSidebarItemClick = (item) => {
    setSelectedSidebarItem(item);
  };

  return (
    <div className="User">
      {!isNonMobileScreen && (
        <div>
          {toggle ? (
            <div
              className="fixed top-1 z-50 start-0 p-1 cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <MenuIcon />
            </div>
          ) : (
            <div
              className="fixed top-1 z-50 start-0 p-1 cursor-pointer"
              onClick={() => setToggle(true)}
            >
              <CloseOutlinedIcon />
            </div>
          )}
        </div>
      )}
      <div className="main flex justify-center">
        {isNonMobileScreen && (
          <div className="w-2/12 ">
            <UserLeftbar handler={handleSidebarItemClick} />
          </div>
        )}
        {/* Render the left sidebar */}
        {!isNonMobileScreen && !toggle && (
          <UserLeftbar handler={handleSidebarItemClick} />
        )}
        <div className="flex w-full">
          <div id="main" className="">
            {/* Render components based on the selected sidebar item */}
            {selectedSidebarItem === "Dashboard" && <UserMain />}
            {/* {selectedSidebarItem === "Mentors" && <Dashboard />}
            {selectedSidebarItem === "Subjects" && <Subjects />}
            {selectedSidebarItem === "Assignments" && <Assignments />}
            {selectedSidebarItem === "Quize" && <Quizes />}
            {selectedSidebarItem === "Resources" && <Resources />}
            {selectedSidebarItem === "Live Sessions" && <Resources />} */}
            {/* Render other components based on the selected sidebar item */}
          </div>
        </div>

        {isNonMobileScreen && (
          <div className="w-2/12 ">
            <Profile />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
