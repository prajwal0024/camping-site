import React from "react";
import "./FormInput.scss";
import { countryList, genderList } from "./data";

export const FormInput = ({
  refrence,
  isLabel,
  handleChange,
  state,
  isDropdown,
  ...rest
}) => {
  return (
    <>
      {isDropdown ? (
        <label>
          {isLabel && <p className="form-label">{isLabel}</p>}
          <select
            {...rest}
            value={state}
            onChange={handleChange}
            className="form-input form-input--dropdown"
          >
            {(isDropdown === "gender" ? genderList : countryList).map(
              (country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              )
            )}
          </select>
        </label>
      ) : (
        <label>
          {isLabel && <p className="form-label">{isLabel}</p>}
          <input
            className="form-input"
            ref={refrence}
            {...rest}
            value={state}
            onChange={handleChange}
          />
        </label>
      )}
    </>
  );
};
