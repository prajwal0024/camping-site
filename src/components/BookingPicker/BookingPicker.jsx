import React, { useState } from "react";
import "./BookingPicker.scss";
import { ReactComponent as PickerTriangle } from "../../img/picker_triangle.svg";
import { ReactComponent as PickerButtonTriangle } from "../../img/picker_button_triangle.svg";
import moment from "moment";

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
  const [dateContent, setDateContent] = useState("day");
  const [date, setDate] = useState({
    day: now.getDate(),
    month: months[now.getMonth()],
    year: now.getFullYear(),
  });

  const checkDate = () => {
    const newDate = moment(
      `${date.year}-${months.indexOf(date.month) + 1}-${date.day}`
    );
    if (!newDate.isValid() || !newDate.isSameOrAfter(moment().startOf("day"))) {
      console.log("inside invalide date");
      setDate({
        day: now.getDate(),
        month: months[now.getMonth()],
        year: now.getFullYear(),
      });
    }
  };

  const activateDatePicker = (date) => {
    if (!toggleDatePicker) setToggleDatePicker(true);
    setDateContent(date);
  };

  const checkInHandler = () => {
    if (!toggle) setToggle(true);
    if (toggleDatePicker) setToggleDatePicker(false);
    checkDate();
  };

  const dateButtonHandler = (type) => {
    let temp;
    switch (dateContent) {
      case "day":
        temp = date.day;
        if (type == "inc") date.day < 31 && setDate({ ...date, day: temp + 1 });
        if (type == "dec") date.day > 1 && setDate({ ...date, day: temp - 1 });
        break;
      case "month":
        temp = months.indexOf(date.month);
        if (type == "inc")
          temp < 11 && setDate({ ...date, month: months[temp + 1] });
        if (type == "dec")
          temp > 0 && setDate({ ...date, month: months[temp - 1] });
        break;
      case "year":
        temp = date.year;
        if (type == "inc")
          temp < now.getFullYear() + 1 && setDate({ ...date, year: temp + 1 });
        if (type == "dec")
          temp > now.getFullYear() && setDate({ ...date, year: temp - 1 });
        break;
    }
  };

  // Return
  return (
    <div className="book-picker">
      {/* People Selector */}
      <div className="book-picker__picker">
        {/* Left Triangle */}
        {people > 0 && (
          <PickerTriangle
            className="book-picker__triangle book-picker__triangle--left"
            onClick={() => setPeople(people - 1)}
          />
        )}
        {/* Text */}
        <p className="book-picker__text">
          <span className={people && "book-picker__fix-span"}>
            {people === 0 ? `No. of` : people}
          </span>{" "}
          {people === 1 ? "Person" : "People"}
        </p>
        {/* Right Triangle */}
        <PickerTriangle
          className="book-picker__triangle book-picker__triangle--right"
          onClick={() => setPeople(people + 1)}
        />
      </div>
      <hr />
      {/* Days Selector */}
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
      {/* Date Selector */}
      <div className="book-picker__picker u-relative">
        {/* Date Picker Start */}
        <div
          className={`book-picker__picker book-picker__date-picker ${
            toggleDatePicker && "book-picker__date-picker--active"
          }`}
        >
          <PickerTriangle
            className="book-picker__triangle book-picker__triangle--left"
            onClick={() => dateButtonHandler("dec")}
          />
          <p className="book-picker__text">
            {dateContent.charAt(0).toUpperCase() + dateContent.slice(1)}:{" "}
            <span className="book-picker__fix-span">{date[dateContent]}</span>
          </p>
          <PickerTriangle
            className="book-picker__triangle book-picker__triangle--right"
            onClick={() => dateButtonHandler("inc")}
          />
        </div>
        {/* Date Picker End */}

        <span className="book-picker__text book-picker__date">
          {toggle ? (
            <>
              <span onClick={() => activateDatePicker("day")}>{date.day}</span>{" "}
              /{" "}
              <span onClick={() => activateDatePicker("month")}>
                {date.month}
              </span>{" "}
              /{" "}
              <span onClick={() => activateDatePicker("year")}>
                {date.year}
              </span>
            </>
          ) : (
            "Check In"
          )}
        </span>
        <PickerTriangle
          className={`book-picker__triangle ${
            toggleDatePicker
              ? "book-picker__triangle--up"
              : "book-picker__triangle--right"
          }`}
          onClick={() => checkInHandler()}
        />
      </div>
      {/* Button */}
      <div className="book-picker__btn">
        <PickerButtonTriangle />
      </div>
    </div>
  );
};
