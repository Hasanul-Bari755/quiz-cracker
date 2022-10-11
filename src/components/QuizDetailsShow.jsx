import React from 'react';
import OptionShow from './OptionShow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

const QuizDetailsShow = ({ singleQuestion }) => {
 const { correctAnswer, question, options } = singleQuestion;
   
    const showAnswer = () => {
       swal({
    title: `Correct Answer: ${correctAnswer}`
   });
    }


    
    return (
        <div className='border-2 border-orange-300 w-[90%] mx-auto mt-3 shadow-lg rounded-md'>
            <div className='flex justify-around items-center p-3'>
                <div>
                     <p className='text-center mt-5 text-2xl  text-green-600'>{question}</p>
               </div>
                <div>
                     <button onClick={showAnswer}><FontAwesomeIcon icon={faEye} /></button>
               </div>
            </div>
            {
                options.map((option,index)=> <OptionShow key={index} option={option} correctAnswer={correctAnswer}></OptionShow> )
            }
        </div>
    );
};

export default QuizDetailsShow;