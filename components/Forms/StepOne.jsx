import React, { useState } from "react";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = () => {

    if (
      validator.isEmpty(values.relative_compactness) ||
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
        <div className="form">
          <div>
            <label>Relative Compactness</label>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Relative Compactness"
              onChange={handleFormData("relative_compactness")}
              value={values["relative_compactness"]}
              min={0.68}
              max={0.98}
              step={0.01}
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
              value={values["surface_area"]}
              min={0}
              step={1}
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
              value={values["wall_area"]}
              min={0}
              step={1}
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
              value={values["roof_area"]}
              min={0}
              step={1}
            />
            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <button className="next" onClick={submitFormData}>Next</button>
        </div>


  );
};

export default StepOne;