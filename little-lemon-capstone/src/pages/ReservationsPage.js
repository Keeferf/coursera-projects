// src/pages/ReservationsPage.js
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import DateTimeSelection from "../components/reservations/DateTimeSelection";
// import GuestDetails from "../components/GuestDetails";
// import Confirmation from "../components/Confirmation";
import "./ReservationsPage.css";

const ReservationsPage = () => {
  const [step, setStep] = useState(1); // 1: Date/Time, 2: Guest Details, 3: Confirmation
  const [reservationData, setReservationData] = useState({});

  const handleDateTimeContinue = (dateTime) => {
    setReservationData(dateTime);
    setStep(2);
  };

  const handleGuestDetailsBack = () => {
    setStep(1);
  };

  const handleGuestDetailsSubmit = (guestData) => {
    const fullReservation = { ...reservationData, ...guestData };
    setReservationData(fullReservation);
    // Here you would typically send data to backend
    console.log("Reservation submitted:", fullReservation);
    setStep(3);
  };

  const handleNewReservation = () => {
    setReservationData({});
    setStep(1);
  };

  return (
    <section className="reservations-page">
      {/* Header Section */}
      <HeroSection title="Little Lemon" subtitle="Reserve Your Table" />

      {/* Form Section */}
      <div className="reservations-content">
        {step === 1 && (
          <DateTimeSelection onContinue={handleDateTimeContinue} />
        )}

        {/* {step === 2 && (
          <GuestDetails
            dateTime={reservationData}
            onBack={handleGuestDetailsBack}
            onSubmit={handleGuestDetailsSubmit}
          />
        )}

        {step === 3 && (
          <Confirmation
            reservation={reservationData}
            onNewReservation={handleNewReservation}
          />
        )} */}
      </div>
    </section>
  );
};

export default ReservationsPage;
