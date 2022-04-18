import React from 'react';
import './NotFound';
import img from '../images/not-found.jpg';

const componentName = (props) => {
    return (
        <div>
            <img className='w-100 h-50' src={img} alt="" />
        </div>
    );
};

export default componentName;