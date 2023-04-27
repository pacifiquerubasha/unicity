import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
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
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Glazing Area</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="Glazing Area"
                onChange={handleFormData("glazing_area")}
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
                <Form.Label>Glazing Area Distribution</Form.Label>
                <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    type="number"
                    placeholder="Glazing Area Distribution"
                    onChange={handleFormData("glazing_area_distribution")}
                />
                {error ? (
                    <Form.Text style={{ color: "red" }}>
                        This is a required field
                    </Form.Text>
                ) : (
                    ""
                )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;