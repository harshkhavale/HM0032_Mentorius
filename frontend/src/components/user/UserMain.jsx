import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../../redux/requestMethods";
import BarChart from "../widgets/BarChart";
import PolarAreaChart from "../widgets/PolarAreaChart";
import { attendance, score } from "../../constants/student";
import { teacherbanner, userbanner } from "../../assets";

const UserMain = () => {
  const [subjects, setSubjects] = useState([]);
  const user = useSelector((state) => state.user.user);

  //   useEffect(() => {
  //     // Fetch subjects data from the backend API
  //     const fetchSubjects = async () => {
  //       try {
  //         const response = await publicRequest.get(
  //           `/subjects/teacher/${user.id}`
  //         );
  //         setSubjects(response.data);
  //         console.log("Subjects:", response.data); // Check subjects data
  //       } catch (error) {
  //         console.error("Error fetching subjects:", error);
  //       }
  //     };

  //     fetchSubjects();
  //   }, [user.id]);

  return (
    <div className="teacherdashboard w-screen p-2 md:w-full">
      <div className="banner h-60 w-full bg-primary overflow-hidden rounded-2xl shadow-sm flex justify-between items-center">
        <div className="bg-primary text-white md:p-8 p-2">
          <p className="md:text-3xl text-xl font-bold ">
            Welcome back, {user.fullname}!
          </p>
          <p className="text-sm  ">
            Always stay updated in your student portal
          </p>
        </div>
        <div className="">
          <img
            className="float-right md:h-60 h-full object-contain  "
            src={userbanner}
            alt=""
          />
        </div>
      </div>
      <div className=" font-semibold text-3xl mb-4">My Subjects</div>

      {/* <div className="graph flex gap-2 p-2 items-center mt-4 justify-between">
        {subjects.map((subject) => (
          <div
            key={subject._id}
            className="subject-card shadow-xl relative rounded-2xl"
          >
            <Link to={`/subjects/${subject._id}`}>
              <div className="thumbnail md:h-[15rem] md:w-[15rem] h-[10rem] w-[10rem]">
                {subject.thumbnail && (
                  <img
                    src={`http://localhost:5000/thumbnails/${subject.thumbnail}`}
                    alt={subject.name}
                    onError={(e) => console.error("Image error:", e)}
                    className=" h-full w-full object-cover rounded-xl" // Check image loading errors
                  />
                )}
              </div>
              <div className="subject-details absolute bottom-0 p-4 font-bold">
                <p className="md:text-2xl font-semibold">{subject.name}</p>
                <p className="text-xs">{subject.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div> */}
      <div className="graph flex flex-col md:flex-row gap-2 p-2 items-center justify-between  ">
        <div className="attendance">
          <p className=" text-sm  mb-10">Attendance</p>
          <BarChart data={attendance} />
        </div>
        <div className="score">
          <p className=" text-sm mb-10">Overall Score</p>
          <PolarAreaChart data={score} />
        </div>
      </div>
    </div>
  );
};

export default UserMain;
