import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const QuizContext = createContext([]);

const Root = () => {
    const quizData = useLoaderData();
    const quizs = quizData.data;
    return (
        <QuizContext.Provider value={quizs}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
       </QuizContext.Provider>
    );
};

export default Root;