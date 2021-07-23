import React from 'react'

function ServicesSection(props) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={props.image} alt="" className="service-image" />
                    <h5 className="service-title">{props.title}</h5>
                    <p className="service-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
