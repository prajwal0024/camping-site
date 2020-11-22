import React, { useState } from "react";
import "./BookingPicker.scss";
import { ReactComponent as PickerTriangle } from "../../img/picker_triangle.svg";
import { ReactComponent as PickerButtonTriangle } from "../../img/picker_button_triangle.svg";

export const BookingPicker = () => {
  const now = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [people, setPeople] = useState(0);
  const [days, setDays] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [toggleDatePicker, setToggleDatePicker] = useState(false);
  const [dateSelector, setDateSelector] = useState(0);
  const [date, setDate] = useState([
    now.getDate(),
    months[now.getMonth()],
    now.getFullYear(),
  ]);

  return (
    <div className="book-picker">
      <div className="book-picker__picker">
        {people > 0 && (
          <PickerTriangle
            className="book-picker__triangle book-picker__triangle--left"
            onClick={() => setPeople(people - 1)}
          />
        )}
        <p className="book-picker__text">
          <span className={people && "book-picker__fix-span"}>
            {people === 0 ? `No. of` : people}
          </span>{" "}
          {people === 1 ? "Person" : "People"}
        </p>
        <PickerTriangle
          className="book-picker__triangle book-picker__triangle--right"
          onClick={() => setPeople(people + 1)}
        />
      </div>

      <hr />

      <div className="book-picker__picker">
        {days > 0 && (
          <PickerTriangle
            className="book-picker__triangle book-picker__triangle--left"
            onClick={() => setDays(days - 1)}
          />
        )}
        <p className="book-picker__text">
          <span className={days && "book-picker__fix-span"}>
            {days === 0 ? `No. of` : days}
          </span>{" "}
          {days === 1 ? "Day" : "Days"}
        </p>
        <PickerTriangle
          className="book-picker__triangle book-picker__triangle--right"
          onClick={() => setDays(days + 1)}
        />
      </div>

      <hr />

      <div className="book-picker__picker">
        <span className="book-picker__text book-picker__date">
          {toggle ? (
            <>
              <span>{date[0]}</span> / <span>{date[1]}</span> /{" "}
              <span>{date[2]}</span>
            </>
          ) : (
            "Check In"
          )}
        </span>
        <PickerTriangle
          className="book-picker__triangle book-picker__triangle--right"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div className="book-picker__btn">
        <PickerButtonTriangle />
      </div>
    </div>
  );
};
