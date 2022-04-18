import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const componentName = (props) => {
    return (
        <div className="text-center navber">
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/checkout">Checkout</Link>
            </nav>
        </div>
    );
};

export default componentName;