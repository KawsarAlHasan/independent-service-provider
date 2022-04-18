import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const componentName = (props) => {
    return (
        <div className="text-center navber sticky-top">
            <nav className='py-3 bg-light'>
                <Link to="/home">HOME</Link>
                <Link to="/checkout">CHECKOUT</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/about">ABOUT ME</Link>
            </nav>
        </div>
    );
};

export default componentName;