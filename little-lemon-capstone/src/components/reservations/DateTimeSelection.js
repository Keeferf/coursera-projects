// src/components/DateTimeSelection.js
import React, { useState } from "react";
import "./DateTimeSelection.css";

const DateTimeSelection = ({ onContinue }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 21; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  // Available time slots
  const timeSlots = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      onContinue({ date: selectedDate, time: selectedTime });
    }
  };

  return (
    <div className="datetime-selection">
      {/* Select Date Section */}
      <div className="selection-section">
        <h3>Select Date</h3>
        <div className="calendar-grid">
          {dates.map((date, index) => (
            <button
              key={index}
              className={`date-button ${selectedDate?.toDateString() === date.toDateString() ? "selected" : ""}`}
              onClick={() => setSelectedDate(date)}
            >
              <span className="date-day">{date.getDate()}</span>
              <span className="date-weekday">
                {date.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
              <span className="date-month">
                {date.toLocaleDateString("en-US", { month: "short" })}
              </span>
            </button>
          ))}
        </div>
        {selectedDate && (
          <div className="selected-info">
            Selected: {formatDate(selectedDate)}
          </div>
        )}
      </div>

      {/* Select Time Section */}
      <div className="selection-section">
        <h3>Select Time</h3>
        <div className="time-grid">
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`time-button ${selectedTime === time ? "selected" : ""}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <button
        className="continue-button"
        onClick={handleContinue}
        disabled={!selectedDate || !selectedTime}
      >
        Continue to Guest Details
      </button>
    </div>
  );
};

export default DateTimeSelection;
