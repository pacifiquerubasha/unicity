import React from 'react';
import bulb from "../assets/bulb.jpg"

function Main(props) {
    return (
        <main>
        <div class="hero">
            <h1>
                <span>AI-Powered Energy Hero.</span>
                Forecasting Efficiency.
            </h1>
            <p>
                Using Machine Learning to Predict Energy Consumption of Apartments and Promote
                 Sustainable Living through AI-Enabled Solutions
            </p>
            <div class="cta">
                <button class="main__btn">Try our App</button>
                <button>More</button>
            </div>

        </div>

        <section class="section1">
            <div class="container">
                <div class="container-left">
                    <div class="numbering">
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
                                <i class="fas fa-check"></i>
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
                                <i class="fas fa-check"></i>
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
                                <i class="fas fa-check"></i>
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
                <div class="container-right">
                    {/* <div class="container-bg">

                    </div> */}
                    <img src={bulb} alt="" />

                </div>
            </div>
        </section>

        <section class="section2">
            <div class="container">
                <div class="container-left">
                    <div class="numbering">
                        <span>2</span>
                        <span>&mdash;</span>
                        <span>8</span>
                    </div>
    
                    <h3> The Solution</h3>
                    <p>
                    Challenges with High Energy Consumption in Apartments and the Need for Sustainable Solutions
                    </p>
                    <ul>
                        <li>
                            <div>
                                <i class="fas fa-check"></i>
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
                                <i class="fas fa-check"></i>
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
                                <i class="fas fa-check"></i>
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
                <div class="container-right">
                    {/* <div class="container-bg">

                    </div> */}
                    <img src={bulb} alt="" />

                </div>
            </div>
        </section>

    </main>
    );
}

export default Main;