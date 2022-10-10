import React from 'react';
import OptionShow from './OptionShow';

const QuizDetailsShow = ({ singleQuestion }) => {
    const {correctAnswer,question,options } = singleQuestion;
    return (
        <div>
            <p className='text-center mt-5 text-2xl  text-green-600'>{question}</p>
            {
                options.map((option,index)=> <OptionShow key={index} option={option} correctAnswer={correctAnswer}></OptionShow> )
            }
        </div>
    );
};

export default QuizDetailsShow;