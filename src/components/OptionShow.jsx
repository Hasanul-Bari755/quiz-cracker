import React from 'react';

const OptionShow = ({ option,correctAnswer }) => {
     //console.log(option)
    const comperetAnswer = (event) => {
        if (event === correctAnswer) {
            console.log("correct")
            console.log(event)
        } else {
            console.log("rong")
            console.log(event)
         }
     }
    return (
        <div className='border-2 border-gray-500 w-[40%] mx-auto mt-4 text-center'>
            {/* <p className='text-center p-6'>{option }</p> */}
            <button onClick={(event)=>comperetAnswer(event.target.innerText)} className='p-6'>{option }</button>
            
        </div>
    );
};

export default OptionShow;