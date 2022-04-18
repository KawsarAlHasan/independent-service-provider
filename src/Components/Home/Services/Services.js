import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const ComponentName = (props) => {
    
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id='#serv'>
            <h1 className='text-center py-4'>OUR <span className='text-danger'>SERVICES</span></h1>
            <div className="services-container container">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default ComponentName;