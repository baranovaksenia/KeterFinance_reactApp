import React from 'react';
import home1 from '../img/home1.png';


const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>We are working for you to make your dreams are true.</p>

                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="desct"/>
            </div>
        </div>
    )
}

export default AboutSection;