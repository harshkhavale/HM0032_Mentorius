import React from "react";

const MentorProfile = () => {
  const profileData = {
    name: "Nishant Jadhav",
    email: "nisoojadhav@gmail.com",
    phone: "7698525682",
    profilePic: "https://nisootech.vercel.app/images/logo.webp",
    coverPic:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=1980",
    studentsTaught: 100,
    yearsOfExperience: 10,
  };

  const recentActivities = [
    "Attended webinar on AI",
    "Published a new article",
    "Reviewed student projects",
  ];

  return (
    <div>
      <div className="flex h-screen mt-[10vh]">
        <div className="bg-blue-900 text-white w-1/4 p-4">
          <h1 className="text-[2rem] mb-5 mt-5">
            hey, <b>{profileData.name}</b>
          </h1>
          <hr />
          <h2 className="text-lg font-semibold mb-4 mt-4">Dashboard</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block hover:bg-sky-500 px-2 py-1 rounded">
                Create New Meeting
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-sky-500 px-2 py-1 rounded">
                Mentees
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-sky-500 px-2 py-1 rounded">
                Statistics
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-sky-500 px-2 py-1 rounded">
                Log Out
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gray-200 w-3/4">
          <section className="mb-8 text-center">
            <div className="flex items-center justify-center flex-col text-center">
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={profileData.coverPic}
                  alt="Profile"
                  className="w-full h-full object-cover p-0 m-0 w-[85vw]"
                />
              </div>
              <div className="w-32 h-32 bg-gray-400 rounded-full overflow-hidden z-30 mt-[-50px]">
                <img
                  src={profileData.profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <h3 className="font-semibold text-[1.5rem]">
                  {profileData.name}
                </h3>
                <p className="text-gray-600 text-lg mt-2">
                  {profileData.email}
                </p>
                <p className="text-gray-600 text-lg">{profileData.phone}</p>
              </div>
            </div>
          </section>
          <section className="p-4">
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4">
                Years of Experience: {profileData.yearsOfExperience}
              </h2>
              <div className="relative">
                <div className="w-full h-2 bg-gray-300 rounded-full">
                  <div
                    className="absolute left-0 h-2 bg-blue-500 rounded-full"
                    style={{
                      width: `${(profileData.yearsOfExperience / 20) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span>0 Years</span>
                  <span>20 Years</span>
                </div>
              </div>
            </section>
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Mentees</h2>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Statistics</h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
