import React from "react";
import { BookingPicker } from "../../components/BookingPicker/BookingPicker";
import Navigation from "../../components/Navigation/Navigation";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="header__center-box">
        <h1 className="header__heading">Exprience Camping Like Never Before</h1>
        <p className="header__sub-heading">
          Make lifetime memories, book a unique trip with our custom plans
        </p>
      </div>
      <BookingPicker />
    </header>
  );
};
