import React from 'react';
import './Service.css';

const componentName = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='service text-center pb-3'>
            <img className='img-fluid imgc' src={img} alt="" />
            <h2>{name}</h2>
            <h6>Price: $ {price}</h6>
            <p>{description}</p>
            <button className='btn btn-primary'>Checkout {name}</button>
        </div>
    );
};

export default componentName;