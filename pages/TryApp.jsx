import React, { useState } from 'react';
import Header from '../components/Header';
import PredictorForm from '../components/PredictorForm';
import Footer from '../components/Footer';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Modal from "react-modal"

function TryApp(props) {
    const [isStart, setIsStart] = useState(true);
    const [isExistingBuilding, setIsExistingBuilding] = useState(0);
    const [animationParent] = useAutoAnimate()



    return (
        <>
            <Header/>

            <div ref={animationParent} className='form-container' data-aos="zoom-in" data-aos-duration="100">
                {isStart ? 
                
                <div className='predict-hero'>
                    <h1>Optimize Your Building's Energy Use</h1>
                    <p>
                        Our AI-powered platform predicts energy consumption 
                        and provides customized advice to optimize both existing and project buildings for sustainability.<br/><br/>
                        Join the sustainable building movement today! Choose the option that applies to your building:
                    </p>
                    <div className='cta-predict'>
                        <button onClick={()=>setIsStart(false)}>Try Now</button>
                    </div>
                </div>
                
                :
                <PredictorForm/>
                
                }

            </div>

            

            <Footer/>
            
        </>
    );
}

export default TryApp;