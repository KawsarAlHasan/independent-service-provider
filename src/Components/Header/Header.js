import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const componentName = (props) => {
    return (
        <div className="text-center navber sticky-top">
            <nav className='py-3 bg-light d-flex justify-content-around'>
                <div>
                    <Link to="/home">HOME</Link>
                    <Link to="/checkout">CHECKOUT</Link>
                    <Link to="/blogs">BLOGS</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div>
                <Link to="/login">LOGIN</Link>
                <Link to="/register">REGISTER</Link>
                </div>
            </nav>
        </div>
    );
};

export default componentName;