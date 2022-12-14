
import { toast } from 'react-toastify';

const OptionShow = ({ option, correctAnswer }) => {
   
    const compereAnswer = (event) => {
       
        if (event === correctAnswer) {
            
           
           return toast.success('Correct Answer')
        } else {
           
            
            return toast.error('Wrong Answer')
        }
       
    }
 
    return (
        <div className='border-2 border-gray-500 w-[40%] mx-auto m-4 text-center'>
             
            <button onClick={(event)=>compereAnswer(option)} className='p-3'>{option }</button>
            
        </div>
    );
};

export default OptionShow;