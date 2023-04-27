import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StepOne from './Forms/StepOne';
import StepTwo from './Forms/StepTwo';
import StepThree from './Forms/StepThree';

function PredictorForm(props) {
    // state for step
    const [step, setStep] = useState(1);

    //state for form data
    const [formData, setFormData] = useState({
        compactness: "",
        surface_area: "",
        wall_area: "",
        roof_area: "",
        overall_height: "",
        orientation: "",
        glazing_area: "",
        glazing_area_distribution: "" 
    })

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setStep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setStep(step - 1);
    };

    // handle change function for updating form data
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // handle submit function for submitting form data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const {value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
        ...prevState,
        [input]: value
    }));
    }

    // switch case for step
    switch(step) {
        case 1:
            return (
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                            <h1>Step 1</h1>
                            <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                        </Col>
                    </Row>
                </Container>
            );
            break;
        case 2:
            return (
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                            <h1>Step 2</h1>
                            <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </Col>
                    </Row>
                </Container>
            );
            break;
        case 3:
            return (
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                            <h1>Step 3</h1>
                            <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </Col>
                    </Row>
                </Container>
            );
            break;
        default:
            return (
                <div>
                    None
                    </div>
            );
    }

}

export default PredictorForm;