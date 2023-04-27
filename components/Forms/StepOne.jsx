import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
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
      validator.isEmpty(values.wall_area)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Relative Compactness</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="compactness"
                defaultValue={values.compactness}
                type="number"
                placeholder="Relative Compactness"
                onChange={handleFormData("compactness")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Surface Area</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="surface_area"
                defaultValue={values.surface_area}
                type="number"
                placeholder="Surface Area"
                onChange={handleFormData("surface_area")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Wall Area</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="wall_area"
                defaultValue={values.wall_area}
                type="number"
                placeholder="Wall Area"
                onChange={handleFormData("wall_area")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Roof Area</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="roof_area"
                defaultValue={values.roof_area}
                type="number"
                placeholder="Roof Area"
                onChange={handleFormData("roof_area")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;