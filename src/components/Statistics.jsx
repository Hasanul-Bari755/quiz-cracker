import React, { useContext } from 'react';
import { QuizContext } from './Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


const Statistics = () => {
    const quizs = useContext(QuizContext);
   
    return (
        <div className='mt-11 grid lg:grid-cols-2 grid-cols-1'>
           <div>
        <ResponsiveContainer width="100%" height='100%'>
        <div>
        <LineChart
      width={500}
      height={300}
      data={quizs}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="total"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                </LineChart>
                </div>
    </ResponsiveContainer>
            </div>

          
            <div>
                <ResponsiveContainer width='100%' height='100%'>
                    <div>
                    <BarChart width={500} height={300} data={quizs}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                    <Bar dataKey="name" fill="#82ca9d" />
                  </BarChart>
                 </div>
                </ResponsiveContainer>
              
            </div>
        </div>
    );
};

export default Statistics;