import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { userRequest, publicRequest } from "../../redux/requestMethods";
import { useSelector } from "react-redux";
import { CloudUpload } from "@mui/icons-material"; // Importing Material-UI icon
import { IconButton } from "@mui/material"; // Importing Material-UI IconButton
import { toast } from "react-hot-toast";
const CreateSubject = ({ onClose }) => {
  const [subjectName, setSubjectName] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.user.user);
  const [thumbnail, setThumbnail] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const generateLink = () => {
    const uniqueId = uuidv4();
    return `https://example.com/classroom/${uniqueId}`;
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setThumbnail(selectedFile);

    // Generate preview URL for selected file
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleCreateSubject = async () => {
    // Function to handle file input change
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setThumbnail(selectedFile);

      // Generate preview URL for selected file
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    };
    const link = generateLink();

    try {
      // Make an API call to the backend to create a new subject

      const formData = new FormData();
      formData.append("name", subjectName);
      formData.append("description", description);
      formData.append("thumbnail", thumbnail);
      formData.append("uuid", link);
      formData.append("teacher_id", user.id);

      const response = await publicRequest.post("/subjects", formData);

      console.log("Subject created:", response.data);
      toast.success("Classroom has been created successfully!");

      onClose();
    } catch (error) {
      console.error("Error creating subject:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center fixed inset-0 z-[1000] bg-blue-300 bg-opacity-30 backdrop-blur-sm">
        <div className="bg-white rounded-2xl w-96 h-auto shadow p-4 relative">
          <button onClick={onClose} className="absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#7959FD"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="">
            <p className=" font-semibold text-2xl flex justify-center my-4">
              Create Classroom
            </p>
            <form className="flex-1 mt-10">
              <input
                type="text"
                placeholder="Subject Name"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                className="block w-full border border-black rounded-lg p-2 my-5 text-sm"
              />
              <textarea
                type="text"
                placeholder="Description"
                value={description}
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full border border-black rounded-lg p-2 my-5 text-sm"
              />
              <div className="relative">
                {/* Custom file input */}
                <div className="absolute top-0 z-50">
                  <input
                    type="file"
                    id="file-input" // Set id for the input
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                  />
                  {/* Button to trigger file input */}
                  <label htmlFor="file-input">
                    <IconButton
                      component="span"
                      className={`border border-black rounded-lg p-2 my-5 text-sm ${
                        thumbnail ? "bg-green-500 text-white" : "bg-white"
                      }`}
                    >
                      {/* Material-UI CloudUpload icon */}
                      <CloudUpload />
                    </IconButton>
                    thumbnail
                  </label>
                </div>

                {/* Image preview */}
                {previewUrl && (
                  <div className="mt-2">
                    <img
                      src={previewUrl}
                      alt="Thumbnail Preview"
                      className="w-full absolute top-0 h-52 rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
            </form>
            <div className="flex mt-72 justify-center">
              <button
                onClick={handleCreateSubject}
                className="bg-primary text-white shadow-lg p-3 flex items-center gap-2 rounded-2xl hover:bg-sky-400"
              >
                Create Classroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSubject;
