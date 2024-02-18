import React, { useState } from "react";
import logo from "../assets/logo-2.png";

const FindMentor = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    learningStyle: "",
    assistance: "",
    communicationPreference: "",
    academicGoals: "",
    sessionTime: "",
    learningPace: "",
    learningPreference: "",
    academicLevel: "",
    feedbackPreference: "",
    timeOfDay: "",
    groupSessions: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Thank you for filling your preferences, our system will suggest you the best mentors!"
    );
    // Submit form data
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8 w-[100vw] h-[90vh] flex items-center">
        <div className="bg-white shadow-md rounded px-8 py-6">
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                1. What are your preferred learning styles?
              </h2>
              <select
                id="learningStyle"
                value={formData.learningStyle}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="visual">Visual</option>
                <option value="auditory">Auditory</option>
                <option value="kinesthetic">Kinesthetic</option>
              </select>
              <button
                onClick={handleNext}
                disabled={!formData.learningStyle}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                2. What subjects do you need assistance with?
              </h2>
              <select
                id="assistance"
                value={formData.assistance}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Mathematics">Mathematics</option>
                <option value="History">History</option>
                <option value="Science">Science</option>
                <option value="Physics">Physics</option>
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Sociology">Sociology</option>
                <option value="Economics">Economics</option>
                <option value="Political Science">Political Science</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Environment">Environment</option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.assistance}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                3. How do you prefer to communicate with your mentor?
              </h2>
              <select
                id="communicationPreference"
                value={formData.communicationPreference}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="In-person meetings">In-person meetings</option>
                <option value="Video calls">Video calls</option>
                <option value="Text messaging">Text messaging</option>
                <option value="Email">Email</option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.communicationPreference}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                4. What are your academic goals?
              </h2>
              <select
                id="academicGoals"
                value={formData.academicGoals}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Improve grades">Improve grades</option>
                <option value="Gain deeper understanding">
                  Gain deeper understanding
                </option>
                <option value="Prepare for standardized tests">
                  Prepare for standardized tests
                </option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.academicGoals}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 5 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                5. How much time can you dedicate to tutoring sessions each
                week?
              </h2>
              <select
                id="sessionTime"
                value={formData.sessionTime}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="1-2 hours">1-2 hours</option>
                <option value="3-5 hours">3-5 hours</option>
                <option value="6-8 hours">6-8 hours</option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.sessionTime}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 6 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                6. What is your preferred pace of learning?
              </h2>
              <select
                id="learningPace"
                value={formData.learningPace}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Fast">Fast</option>
                <option value="Moderate">Moderate</option>
                <option value="Slow">Slow</option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.learningPace}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 7 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                7. Any specific learning preferences or requirements?
              </h2>
              <select
                id="learningPreference"
                value={formData.learningPreference}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Teaching experience with learning disabilities">
                  Teaching experience with learning disabilities
                </option>
                <option value="Specialization in exam preparation">
                  Specialization in exam preparation
                </option>
                <option value="Providing real-life examples">
                  Providing real-life examples
                </option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.learningPreference}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 8 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                8. What is your current academic level?
              </h2>
              <select
                id="academicLevel"
                value={formData.academicLevel}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Elementary school">Elementary school</option>
                <option value="Middle school">Middle school</option>
                <option value="High school">High school</option>
                <option value="College">College</option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.academicLevel}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 9 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                9. How do you prefer to receive feedback?
              </h2>
              <select
                id="feedbackPreference"
                value={formData.feedbackPreference}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Elementary school">
                  Positive reinforcement
                </option>
                <option value="Middle school">Constructive criticism</option>
                <option value="High school">High school</option>
                <option value="College">College</option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.feedbackPreference}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
          {step === 10 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                10. Preferred time of day for tutoring sessions?
              </h2>
              <select
                id="timeOfDay"
                value={formData.timeOfDay}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={!formData.timeOfDay}
              >
                Next
              </button>
            </>
          )}
          {step === 11 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                11. How do you feel about group tutoring sessions?
              </h2>
              <select
                id="groupSessions"
                value={formData.groupSessions}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              >
                <option value="">Select one</option>
                <option value="Prefer one-on-one sessions">
                  Prefer one-on-one sessions
                </option>
                <option value="Open to group sessions">
                  Open to group sessions
                </option>
              </select>
              <button
                onClick={handleBack}
                className="mr-2 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.groupSessions}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FindMentor;
