import React from 'react';

function StrategiesModal({isOpen, closeModal}) {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.5)",
        },
    };


    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='modal-content'>
                    <div className='close-modal' onClick={closeModal}>
                        CLOSE
                    </div>
                    <h3>Energy-Saving Strategies</h3>
                    <p className='modal-intro'>
                        When the predicted heating load and cooling load is too high, it indicates that the building is 
                        consuming more energy than necessary for heating and cooling, which can lead to higher energy
                         bills and increased carbon footprint. Here are some energy efficiency recommendations that
                          can help reduce the heating and cooling load in buildings:
                    </p>

                    <ul>
                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Improve insulation</span>
                                <p>
                                    Ensure that the building's walls, roof, and floor are well-insulated to reduce heat loss in
                                    winter and heat gain in summer. This can be done by adding additional insulation or upgrading
                                    to higher R-value insulation.                                
                                </p>                                
                            </div>
                        </li>

                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Upgrade windows </span>
                                <p>
                                    Replace old, inefficient windows with new, energy-efficient ones that have low-e coatings
                                     and gas fills. This can reduce the amount of heat that enters or leaves the building through the windows.                              
                                </p>                                
                            </div>
                        </li>

                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Use shading devices</span>
                                <p>
                                    Install shading devices such as blinds, shades, or awnings to block the sun's rays during
                                     hot weather and reduce cooling load. This can also help reduce glare and improve comfort.                               
                                </p>                                
                            </div>
                        </li>

                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Optimize ventilation</span>
                                <p>
                                    Ensure that the building's ventilation system is properly designed and maintained to provide
                                     adequate fresh air without overloading the heating or cooling system. Consider installing
                                      a heat recovery ventilator (HRV) or energy recovery ventilator (ERV) to recover heat from 
                                      exhaust air in winter and pre-cool incoming air in summer.                                
                                </p>                                
                            </div>
                        </li>

                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Use energy-efficient HVAC equipment</span>
                                <p>
                                    Replace old, inefficient HVAC equipment with new, energy-efficient models that have high SEER
                                     and EER ratings. This can reduce the amount of energy required for heating and cooling and
                                      lower energy bills                                
                                </p>                                
                            </div>
                        </li>

                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Implement temperature setbacks</span>
                                <p>
                                    Set back the temperature in the building during unoccupied periods, such as at night
                                     or on weekends, to reduce heating or cooling load. Consider using a programmable
                                      thermostat to automate temperature setbacks and optimize energy use.
                                
                                </p>                                
                            </div>
                        </li>

                        <li>
                            <div>
                                <i className="fas fa-check"></i>
                            </div>
                            <div>
                                <span>Conduct regular maintenance</span>
                                <p>
                                    Ensure that the building's HVAC system is properly maintained and serviced on
                                     a regular basis to ensure optimal performance and efficiency. This includes
                                      changing filters, cleaning coils, and checking for leaks or other issues.
                                
                                </p>                                
                            </div>
                        </li>

                    </ul>

                    <p className=''>
                        By implementing these energy efficiency recommendations, you can help reduce the heating and cooling
                        load in buildings and improve energy performance, which can result in lower energy bills and a reduced carbon footprint.

                    </p>

                    
                </div>
                
            </Modal>
    );
}

export default StrategiesModal;