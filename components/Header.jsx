import React from 'react';

function Header(props) {
    
    return (
        <header>
            <a href="/" class="logo"><span>C</span>yrrus</a>

            <nav>
                <ul>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Terms</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                </ul>
                <div class="socials">
                    <a href=""><i class="fab fa-github"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-discord"></i></a>
    
                </div>
            </nav>

        </header>
    );
}

export default Header;