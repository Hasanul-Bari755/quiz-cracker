import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo } = quiz;
    const navigate = useNavigate();
    const handleQuizBtn = (id) => {
        navigate(`quiz/${id}`)
    }
    return (
        
            <div className="card w-full bg-gray-500 shadow-xl">
                <figure><img className='w-44' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{name }</h2>
                    
                    <div className="card-actions justify-end">
                    <button onClick={()=>handleQuizBtn(id)} className="btn btn-active btn-secondary">Start Practice</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Quiz;