import React from 'react';
import './About.css';
import img from '../images/kawsar.jpg';

const componentName = (props) => {
    return (
        <div className='container d-flex justify-content-center row'>
            <div className='col-md-6'>
                <img src={img} className='img-fluid w-100' alt="" />
            </div>
            <div className='col-md-6'>
                <h4>Name: Kawsar Al Hasan</h4>
                <p className='h4 my-text'>I started working hard to achieve my goal. I have been learning programming for the last 2 years. But I could not learn well. But I learned a lot from the programming hero last January. I am still learning to work. I want to see myself in a much bigger place. So I am working hard.</p>
            </div>
        </div>
    );
};

export default componentName;