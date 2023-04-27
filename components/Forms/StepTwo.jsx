import React, { useState } from "react";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.overall_height) || validator.isEmpty(values.orientation)) {
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
                    <label>Overall Height</label>
                    <input
                        style={{ border: error ? "2px solid red" : "" }}
                        type="number"
                        placeholder="Overall Height"
                        onChange={handleFormData("overall_height")}
                    />
                    {error ? (
                        <p style={{ color: "red" }}>This is a required field</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Orientation</label>
                    <select
                        style={{ border: error ? "2px solid red" : "" }}
                        type="select"
                        onChange={handleFormData("orientation")}
                    >
                        <option selected value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
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

export default StepTwo;