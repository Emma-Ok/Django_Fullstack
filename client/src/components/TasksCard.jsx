/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom';

export function TasksCard({task}) {
  
  const navigate = useNavigate();
 
  return (
    <div className='border bg-zinc-800 p-4 hover:bg-zinc-700 hover:cursor-pointer'
    onClick={() => {
      navigate(`/tasks/${task.id}`);
    } }
    
    >
      <h3 className='font-bold uppercase'>{task.title}</h3>
      <p className='text-slate-400'>{task.description}</p>
      
    </div>
  );
}