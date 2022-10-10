import React from 'react';

const Quiz = ({ quiz }) => {
    const { name, logo } = quiz;
    return (
        
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-44' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{name }</h2>
                    
                    <div className="card-actions justify-end">
                    <button className="btn btn-active btn-secondary">Start Practice</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Quiz;