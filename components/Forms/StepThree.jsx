import React, { useState } from "react";
import validator from "validator";

const StepThree = ({handleFormData, prevStep, values, setIsPredictionResult, predict }) => {

  const [error, setError] = useState(false);

  const submitFormData = () => {

    if (validator.isEmpty(values.glazing_area) || validator.isEmpty(values.glazing_area_distribution)) {
      setError(true);
    } else {
      setIsPredictionResult(true);
      predict();
    }
  };


  return (

        <div className="form">
          <div>
            <label>Glazing Area</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Glazing Area"
              onChange={handleFormData("glazing_area")}
              min={0}
              max={0.4}
              step={0.1}
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
              min={0}
              max={5}
              step={0.5}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
            </div>
          <div className="actions">
            <button className="back" onClick={prevStep}>Back</button>
            <button className="next" onClick={submitFormData}>EVALUATE</button>
          </div>
        </div>
   
  );
};

export default StepThree;