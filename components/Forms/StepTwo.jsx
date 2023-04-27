import React, { useState } from "react";
import validator from "validator";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.overall_height) || validator.isEmpty(values.orientation)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (

        <div className="form">
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
                    <option selected value="2">Select</option>
                    <option value="2">2</option>
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
            <div className="actions">
                <button className="back" onClick={prevStep}>Back</button>
                <button className="next" onClick={submitFormData}>Next</button>                    
            </div>
        </div>
       
  );
};

export default StepTwo;