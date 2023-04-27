import React, { useEffect } from 'react';
import { useState } from 'react';
import StepOne from './Forms/StepOne';
import StepTwo from './Forms/StepTwo';
import StepThree from './Forms/StepThree';
import PredictionResults from './PredictionResults';



function PredictorForm(props) {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        relative_compactness: "",
        surface_area: "",
        wall_area: "",
        roof_area: "",
        overall_height: "",
        orientation: "",
        glazing_area: "",
        glazing_area_distribution: "" 
    })


    const nextStep = () => {
        setStep(step + 1);
        console.log(formData);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleInputData = input => e => {

        setFormData(prevState => ({
        ...prevState,
        [input]: e.target.value
    }));
    }

    const [isPredictionResult, setIsPredictionResult] = useState(false);

    const [results, setResults] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const predict = async()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        setIsLoading(true)

        fetch('http://localhost:5000/api/predict', requestOptions)
        .then(response => response.json())
        .then(data => {
            setResults(data)
            setIsLoading(false)
        })
        .catch(err=>{
            setIsLoading(false)
        })
    }


    return (    
            <div className="unique-step">
                {!isPredictionResult?
                    <>
                        <h1>Step {step}</h1>
                        {step === 1 && <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />}
                        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />}
                        {step === 3 && <StepThree predict={predict} prevStep={prevStep} handleFormData={handleInputData} values={formData} setIsPredictionResult={setIsPredictionResult}/>}
                    
                    </>
                :

                    <PredictionResults results={results} isLoading={isLoading}/>

                }


            </div>
    )

}

export default PredictorForm;