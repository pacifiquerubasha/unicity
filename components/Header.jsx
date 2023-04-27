import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();

    return (
        <header>
            <a href="/" className="logo"><span>C</span>yrrus</a>

            <nav>
                <ul>
                    <li>
                        <a href="">Problem</a>
                    </li>
                    <li>
                        <a href="">Solution</a>
                    </li>
                    <li>
                        <a href="">Steps</a>
                    </li>
                    <li>
                        <a onClick={()=>navigate("/predictor")}>Predictor</a>
                    </li>
                
                </ul>
                <div className="socials">
                    <a href=""><i className="fab fa-github"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-discord"></i></a>
    
                </div>
            </nav>

        </header>
    );
}

export default Header;