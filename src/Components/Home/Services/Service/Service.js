import React from 'react';
import './Service.css';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, img, price, description} = service;

    const navigate = useNavigate();

    const navigateCheckout = evant => {
        navigate('/checkout');
    }

    return (
        <div className='service text-center pb-3'>
            <img className='img-fluid imgc' src={img} alt="" />
            <h2>{name}</h2>
            <h6>Price: $ {price}</h6>
            <p>{description}</p>
            <button className='btn btn-primary'><Link to="/checkout" className='text-light text-decoration-none' onClick={navigateCheckout}>Checkout {name}</Link></button>
        </div>
    );
};

export default Service;