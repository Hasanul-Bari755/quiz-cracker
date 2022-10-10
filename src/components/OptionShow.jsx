import React from 'react';
import { toast } from 'react-toastify';

const OptionShow = ({ option,correctAnswer }) => {
     //console.log(option)
    const compereAnswer = (event) => {
        if (event === correctAnswer) {
           return toast.success('Correct Answer')
        } else {
            return toast.error('Wrong Answer')
         }
     }
    return (
        <div className='border-2 border-gray-500 w-[40%] mx-auto m-4 text-center'>
             
            <button onClick={(event)=>compereAnswer(event.target.innerText)} className='p-6'>{option }</button>
            
        </div>
    );
};

export default OptionShow;