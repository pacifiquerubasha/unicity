import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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

    // switch case for step
    switch(step) {
        case 1:
            return (
                <Container>
                    <Row>
                        <Col md={{ span: 12, offset: 3 }} className="custom-margin">
                            <h1 className="text-center">Step 1</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="compactness">Compactness</label>
                                    <input type="text" className="form-control" id="compactness" name="compactness" value={formData.compactness} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surface_area">Surface Area</label>
                                    <input type="text" className="form-control" id="surface_area" name="surface_area" value={formData.surface_area} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="wall_area">Wall Area</label>
                                    <input type="text" className="form-control" id="wall_area" name="wall_area" value={formData.wall_area} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="roof_area">Roof Area</label>
                                    <input type="text" className="form-control" id="roof_area" name="roof_area" value={formData.roof_area} onChange={handleChange} />
                                </div>  
                            </form>
                            <button onClick={nextStep}>Next</button>
                        </Col>
                    </Row>
                </Container>
            );
            break;
        case 2:
            return (
                <Container>
                    <Row>
                        <Col md={{ span: 12, offset: 3 }} className="custom-margin">
                            <h1 className="text-center">Step 2</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="overall_height">Overall Height</label>
                                    <input type="text" className="form-control" id="overall_height" name="overall_height" value={formData.overall_height} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="orientation">Orientation</label>
                                    <input type="text" className="form-control" id="orientation" name="orientation" value={formData.orientation} onChange={handleChange} />
                                </div>
                            </form>
                            <button onClick={prevStep}>Previous</button>
                            <button onClick={nextStep}>Next</button>
                        </Col>
                    </Row>
                </Container>
            );
            break;
        case 3:
            return (
                <Container>
                    <Row>
                        <Col md={{ span: 12, offset: 3 }} className="custom-margin">
                            <h1 className="text-center">Step 3</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="glazing_area">Glazing Area</label>
                                    <input type="text" className="form-control" id="glazing_area" name="glazing_area" value={formData.glazing_area} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="glazing_area_distribution">Glazing Area Distribution</label>
                                    <input type="text" className="form-control" id="glazing_area_distribution" name="glazing_area_distribution" value={formData.glazing_area_distribution} onChange={handleChange} />
                                </div>
                            </form>
                            <button onClick={prevStep}>Previous</button>
                            <button onClick={nextStep}>Next</button>
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