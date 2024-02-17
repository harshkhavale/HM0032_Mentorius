// CalendarComponent.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  // Sample JSON object representing marked dates and their colors
  const markedDates = [
    { date: "2024-02-10", color: "#FF0000" }, // Red color
    { date: "2024-02-15", color: "#00FF00" }, // Green color
    { date: "2024-02-20", color: "#0000FF" }, // Blue color
  ];

  // Function to render tile content for marked dates
  const tileContent = ({ date, view }) => {
    const formattedDate = date.toISOString().slice(0, 10); // Format date to match JSON date format
    const markedDate = markedDates.find((item) => item.date === formattedDate); // Check if date is marked

    if (view === "month" && markedDate) {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            style={{
              backgroundColor: markedDate.color,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      ); // Render colored circle for marked date
    }
    return null;
  };

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div
      className="mx-auto max-w-md p-4 bg-white shadow-md rounded-md"
      style={{ width: "auto", height: "5rem" }}
    >
      <h2 className="text-lg font-semibold mb-4">Choose a Date</h2>
      <div style={{ width: "100%", height: "100%" }}>
        <Calendar
          onChange={onChange}
          value={date}
          className="border-none text-xs rounded-md shadow-sm"
          tileContent={tileContent} // Pass the tileContent function
          style={{ width: "100%", height: "100%" }} // Ensure Calendar takes up full width and height
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
