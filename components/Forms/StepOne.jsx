import React, { useState } from "react";
import validator from "validator";

// creating functional component and getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.compactness) ||
      validator.isEmpty(values.surface_area) ||
      validator.isEmpty(values.wall_area) ||
      validator.isEmpty(values.roof_area)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={submitFormData}>
          <div>
            <label>Relative Compactness</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Relative Compactness"
              onChange={handleFormData("compactness")}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Surface Area</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Surface Area"
              onChange={handleFormData("surface_area")}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Wall Area</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Wall Area"
              onChange={handleFormData("wall_area")}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Roof Area</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Roof Area"
              onChange={handleFormData("roof_area")}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default StepOne;