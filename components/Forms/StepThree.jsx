import React, { useState } from "react";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.glazing_area) || validator.isEmpty(values.glazing_area_distribution)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <div>
        <form onSubmit={submitFormData}>
          <div>
            <label>Glazing Area</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Glazing Area"
              onChange={handleFormData("glazing_area")}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Glazing Area Distribution</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Glazing Area Distribution"
              onChange={handleFormData("glazing_area_distribution")}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
            </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button onClick={prevStep}>Back</button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    
    </>
  );
};

export default StepThree;