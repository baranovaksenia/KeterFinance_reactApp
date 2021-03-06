import React from "react";
//Import Icons
import clock from '../img/clock.svg';
import money from '../img/money.svg';
import diaphragm from '../img/diaphragm.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection =()=> {
    return (
<div className="services">
    <div className="description">
        <div className="cards">
            <div className="card">
                <img src={clock} alt=""/>
                <h3>Efficient</h3>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="card">
                <img src={money} alt="" />
                <h3>Affordable</h3>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="card">
                <img src={diaphragm} alt="" />
                <h3>Pro Grade Gear</h3>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="card">
                <img src={teamwork} alt="" />
                <h3>Teamwork</h3>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
        </div>
    </div>
    <div className="image">
        <img src={home2} alt="" />
    </div>
</div>
    )
}


export default ServicesSection;