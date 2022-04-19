import React from 'react';
import './Service.css';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, img, price, description} = service;

    const navigate = useNavigate();

    const navigateRegister = evant => {
        navigate('/register');
    }

    return (
        <div className='service text-center pb-3'>
            <img className='img-fluid imgc' src={img} alt="" />
            <h2>{name}</h2>
            <h6>Price: $ {price}</h6>
            <p>{description}</p>
            <button className='btn btn-primary'><Link to="/register" className='text-light text-decoration-none' onClick={navigateRegister}>Checkout</Link> {name}</button>
        </div>
    );
};

export default Service;