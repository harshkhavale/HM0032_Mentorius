import React, { useState } from "react";
import axios from "axios";
import { publicRequest } from "../../redux/requestMethods";
import { useSelector } from "react-redux";
const CreateMentor = () => {
  const user = useSelector((state) => state.user.user);
  const [mentorData, setMentorData] = useState({
    name: "",
    user_id: user.id,
    description: "",
    keywords: [],
    education: [],
    experience: "",
    interests: "",
    profilepicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorData({ ...mentorData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setMentorData({ ...mentorData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", mentorData.name);
    formData.append("description", mentorData.description);
    formData.append("keywords", mentorData.keywords);
    formData.append("education", mentorData.education);
    formData.append("experience", mentorData.experience);
    formData.append("interests", mentorData.interests);
    formData.append("coverpicture", mentorData.coverpicture);
    formData.append("profilepicture", mentorData.profilepicture);

    try {
      const response = await publicRequest.post("/mentors", formData);
      console.log(response.data);
      // Handle successful mentor creation
    } catch (error) {
      console.error("Error creating mentor:", error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Create Mentor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={mentorData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={mentorData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Keywords:</label>
          <input
            type="text"
            name="keywords"
            value={mentorData.keywords}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Education:</label>
          <input
            type="text"
            name="education"
            value={mentorData.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Experience:</label>
          <input
            type="text"
            name="experience"
            value={mentorData.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            value={mentorData.interests}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label>Cover Picture:</label>
          <input type="file" name="coverPicture" onChange={handleFileChange} />
        </div>
        <button type="submit">Create Mentor</button>
      </form>
    </div>
  );
};

export default CreateMentor;
