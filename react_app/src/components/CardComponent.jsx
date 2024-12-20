import React from 'react';
import './cardComponent.css';

const CardComponent = () => {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <h2 className='weather-title'>Title</h2>      
            </div>

            <div className='card-footer'>
                <p className='caption'>
                    One, one, one, one, one, one, one, one, one, one
                    Uh!
                    Runnin', runnin', runnin', runnin'
                    </p>
                <p className='weather-value'>70</p>
            </div>
        </div>
    );
};

export default CardComponent;