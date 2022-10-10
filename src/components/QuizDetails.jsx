import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetailsShow from './QuizDetailsShow';


const QuizDetails = () => {
    
    const quizDetailsData = useLoaderData();
    const quizDetails = quizDetailsData.data;
    const {name,questions } = quizDetails;
   
 
    return (
        <div className='mt-20'>
            <h2 className='text-center font-bold text-4xl'>Quiz of {name}</h2>
            {
                questions.map(question => <QuizDetailsShow key={question.id} singleQuestion={question}></QuizDetailsShow>)
            }
        </div>
    );
};

export default QuizDetails;