import React from 'react';
import bulb from "../assets/bulb.jpg"
import solution from "../assets/solution.jpg"
import { useNavigate } from 'react-router-dom';

function Main(props) {
    const navigate = useNavigate();
    return (
        <main>
        <div className="hero"  data-aos="zoom-in" data-aos-duration="1000">
            <h1>
                <span>AI-Powered Energy Hero.</span>
                Forecasting Efficiency.
            </h1>
            <p>
                Using Machine Learning to Predict Energy Consumption of Apartments and Promote
                 Sustainable Living through AI-Enabled Solutions
            </p>
            <div className="cta">
                <button className="main__btn" onClick={()=>navigate("/predictor")}>Try our App</button>
            </div>

        </div>

        <section className="section1" >
            <div className="container">
                <div className="container-left" data-aos="fade-left" data-aos-duration="1000">
                    <div className="numbering">
                        <span>1</span>
                        <span>&mdash;</span>
                        <span>8</span>
                    </div>
    
                    <h3> The Problem</h3>
                    <p>
                    Challenges with High Energy Consumption in Apartments and the Need for Sustainable Solutions
                    </p>
                    <ul>
                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Rising energy costs</span>
                                <p>
                                    Unaffordable utility bills                                
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Environmental impact</span>
                                <p>
                                    Harmful greenhouse gas emissions.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Lack of awareness</span>
                                <p>
                                   Wasteful consumption habits.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container-right" data-aos="fade-right" data-aos-duration="1000">
                    {/* <div className="container-bg">

                    </div> */}
                    <img src={bulb} alt="" />

                </div>
            </div>
        </section>

        <section className="section2">
            <div className="container">
                <div className="container-left" data-aos="fade-left" data-aos-duration="1000">
                    <div className="numbering">
                        <span>2</span>
                        <span>&mdash;</span>
                        <span>8</span>
                    </div>
    
                    <h3> What We Offer</h3>
                    <p>
                    AI-Powered Solutions for Real Estate Management: Reducing Energy Costs and Promoting Sustainable Living
                    </p>

                    <div className='solutions'>
                        <div className="solution">
                                <i className="fas fa-ruler"></i>
                                <div>
                                    <span>Shape and size recommendations</span>
                                    <p>
                                    Our machine learning algorithm generates insights on the optimal shapes and sizes
                                     of houses for sustainable living.                              
                                    </p>
                                </div>
                        </div>
                        <div className="solution">
                                <i className="fas fa-bolt"></i>
                                <div>
                                    <span>Smart building technology</span>
                                    <p>
                                    Our technology monitors and controls energy-consuming devices
                                     to optimize energy use and reduce waste.                     
                                    </p>
                                </div>
                        </div>
                        
                    </div>


                    
                </div>
                <div className="container-right" data-aos="fade-right" data-aos-duration="1000">
                    {/* <div className="container-bg">

                    </div> */}
                    <img src={solution} alt="" />

                </div>
            </div>
        </section>

        <section className='section3'>
            <div className="container">
                <div className="numbering">
                        <span>3</span>
                        <span>&mdash;</span>
                        <span>8</span>
                </div>

                <div className="flex flex-col timeline mx-auto w-1/2 py-3">
                    <div className="mb-3">
                        <h3 className="text-center mb-1">How it works</h3>
                        <p className="text-center">From Data Input to Personalized Energy-Saving Recommendations. Optimizing Sustainable Housing with AI: A Three-Step User Experience</p>
                    </div>
                    <div className="flex gap-1">
                        <div className="flex flex-col items-center timeline-left">
                            <div className="round-icon flex items-center justify-center text-xl rounded-full bg-white ">
                                <span>01</span>
                            </div>
                            
                            <div className="h-auto border"></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="pt-1 text-xl timeline-element">Data Input and Analysis</div>
                            <div className="mt-1 pb-2">
                            Our AI-powered system analyzes apartment shape and feature data
                             inputted by users to generate personalized energy consumption predictions.
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        <div className="flex flex-col items-center timeline-left">
                            <div className="round-icon flex items-center justify-center text-xl rounded-full bg-white ">
                                <span>02</span>
                            </div>
                            
                            <div className="h-auto border"></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="pt-1 text-xl timeline-element">Personalized Optimization Recommendations</div>
                            <div className="mt-1 pb-2">
                                Users receive customized recommendations on how to optimize energy use, 
                                including eco-friendly habits and energy-efficient upgrades.
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        <div className="flex flex-col items-center timeline-left">
                            <div className="round-icon flex items-center justify-center text-xl rounded-full bg-white ">
                                <span>03</span>
                            </div>
                            
                            <div className="h-auto border"></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="pt-1 text-xl timeline-element">Ongoing Energy Monitoring and Optimization</div>
                            <div className="mt-1 pb-2">
                                Our smart building technology continuously monitors and controls energy 
                                usage, while also providing ongoing optimization recommendations based on data analysis.
                            </div>
                        </div>
                    </div>


                    </div>


            </div>

        </section>

        <section className='section-cta' data-aos="zoom-in" data-aos-duration="1000">
            <div className="container">
                <h4>Ready to Optimize Your Energy Use?</h4>
                <p>
                Get personalized recommendations and insights to reduce energy consumption 
                and live sustainably with our AI-powered sustainable housing app.
                </p>

                <button onClick={()=>navigate("/predictor")}>Try It Now</button>
            </div>
        </section>
    </main>
    );
}

export default Main;