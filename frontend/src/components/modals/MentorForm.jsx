import React, { useState } from "react";
import { publicRequest } from "../../redux/requestMethods";
import { useSelector, useDispatch } from "react-redux";
import { UploadFile } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { setUsertype } from "../../redux/userSlice";
import { toast } from "react-hot-toast";

const MentorForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState("");
  const [interests, setInterests] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [previewUrlProfile, setPreviewUrlProfile] = useState(null);
  const [previewUrlCover, setPreviewUrlCover] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.fullname);
    formData.append("description", description);
    formData.append("keywords", JSON.stringify(keywords));
    formData.append("education", JSON.stringify(education));
    formData.append("experience", experience);
    formData.append("interests", JSON.stringify(interests));
    formData.append("profilePicture", profilePicture);
    formData.append("coverPicture", coverPicture);
    formData.append("userId", user.id);
    formData.append("socialLinks", JSON.stringify(socialLinks));

    try {
      const response = await publicRequest.post("/mentors", formData);
      console.log("Mentor created:", response.data);
      toast.success("You are a mentor now!");
      dispatch(setUsertype("MENTOR"));
      onClose();
    } catch (error) {
      console.error("Error creating mentor:", error);
    }
  };

  const handleFileSelect = (e, setterFunction, previewSetterFunction) => {
    const selectedFile = e.target.files[0];
    setterFunction(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      previewSetterFunction(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 top-0 start-0 flex justify-center items-center bg-blue-200 bg-opacity-30 z-[1000] backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-10/12 shadow p-4 relative">
        <button onClick={handleClose} className="absolute top-2 right-2">
          <CloseIcon />
        </button>
        <div>
          <h2 className="mb-4 text-xl font-bold">Become a Mentor</h2>
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label className="block mb-1">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Keywords:</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value.split(","))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Education:</label>
              <input
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value.split(","))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Experience:</label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Social Links:</label>
              <input
                type="text"
                value={socialLinks}
                onChange={(e) => setSocialLinks(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Interests:</label>
              <input
                type="text"
                value={interests}
                onChange={(e) => setInterests(e.target.value.split(","))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex gap-4">
              <div className="mb-4">
                <label className="block mb-1">Profile Picture:</label>
                <div className="flex rounded-3xl p-2 bg-primary text-white items-center">
                  <label
                    htmlFor="profilePictureInput"
                    className="cursor-pointer mr-2"
                  >
                    <UploadFile />
                  </label>
                  <input
                    id="profilePictureInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileSelect(
                        e,
                        setProfilePicture,
                        setPreviewUrlProfile
                      )
                    }
                    className="hidden"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Cover Picture:</label>
                <div className="flex rounded-3xl p-2 bg-primary text-white items-center">
                  <label
                    htmlFor="coverPictureInput"
                    className="cursor-pointer mr-2"
                  >
                    <UploadFile />
                  </label>
                  <input
                    id="coverPictureInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileSelect(e, setCoverPicture, setPreviewUrlCover)
                    }
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300"
            >
              Become a Mentor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorForm;
