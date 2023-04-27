import React, {useState} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StrategiesModal from './StrategiesModal';

function PredictionResults({isLoading, results}) {

    const [isBad, setIsBad] = useState(true);

    const normal_cooling = 12.5;
    const normal_heating = 15.3;

    const getData = (results)=>{

        return [
            {
              name: 'Cooling',
              optimal: normal_cooling,
              user: results.cl_prediction,
              amt: 2400,
            },
            {
              name: 'Heating',
              optimal: normal_heating,
              user: results.hl_prediction,
              amt: 2210,
            },
            
        ];
    }

    const calculateDifference = (cooling, heating)=>{
        const coolDiff = ((cooling - normal_cooling)/38)
        const heatDiff = ((heating - normal_heating)/37)

        return ((coolDiff + heatDiff)/2).toFixed(1)
    }

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = ()=>setIsOpen(false)

    return (
        <>

        {isLoading ? 
            
            <div className='loading-container'>
                <div className="loader"></div>
            </div>

            :

            <div className="prediction-results">
                <h2>Your Evaluation Results Are Out</h2>
                <p>
                    Discover How Your Building Performs: Understanding Your Energy Consumption with Our Evaluation Results                
                </p>

                <div className="comparisons">
                    <div className="comparison-left">
                        <h4>Your Consumption</h4>
                        <p>See How Your Building Uses Energy</p>
                        <span className={`difference ${calculateDifference(results.cl_prediction, results.hl_prediction) > 1 && "bad"} `}>{calculateDifference(results.cl_prediction, results.hl_prediction)}</span>
                       
                        <div className="comparison">
                            <span>Cooling</span>
                            <span className={` ${results.cl_prediction > normal_cooling && "bad"}`}>{results.cl_prediction.toFixed(2)}</span>
                        </div>
                        <div className="comparison">
                            <span>Heating</span>
                            <span className={` ${results.hl_prediction > normal_heating && "bad"}`}>{results.hl_prediction.toFixed(2)}</span>
                        </div>

                    </div>
                    <div className="comparison-right">
                        <h4>Optimal Consumption</h4>
                        <p>Explore Energy-Saving Strategies</p>
                        <span className="difference">Normal</span>
                        <div className="comparison">
                            <span>Cooling</span>
                            <span>12.5</span>
                        </div>
                        <div className="comparison">
                            <span>Heating</span>
                            <span>15.3</span>
                        </div>
                    </div>
                </div>

                    <BarChart
                        width={500}
                        height={300}
                        data={getData(results)}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <XAxis tick={false} dataKey="name" />
                        <YAxis axisLine={false} tick={false}/>
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor:"black"}} />
                        <Legend />
                        <Bar dataKey="user" fill="#FF1CF7" />
                        <Bar dataKey="optimal" fill="#00F0FF" />
                    </BarChart>

                    <button className='main__btn result_cta' onClick={()=>setIsOpen(true)}> Explore Strategies</button>

                    <StrategiesModal isOpen={isOpen} closeModal={closeModal}/>

            </div>

            

        }
        
        
        </>
    );
}

export default PredictionResults;