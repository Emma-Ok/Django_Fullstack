import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-hot-toast';
export function TasksFormPage() {

  const {register, handleSubmit, formState:{errors}, setValue } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  console.log(params);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
    await updateTask(params.id, data);
    toast.success('Task Updated successfully',{
      position: 'bottom-center',
      style: {
        border: '1px solid green',
        padding: '16px',
        color: 'green',
      }
    });
    } else {
    await createTask(data);
    toast.success('Task created successfully',{
      position: 'bottom-center',
      style: {
        border: '1px solid green',
        padding: '16px',
        color: 'green',
      }
    }
    );
    
    }

    navigate('/tasks');
  });

  useEffect(() => {
   async function loadTask(){
    if (params.id) {
      const res = await getTask(params.id);
      setValue('title', res.data.title);
      setValue('description', res.data.description);
    }
    }
    loadTask();
  }, [ params.id, setValue]);

    return (
      <div className='max-w-xl mx-auto'>

        <form onSubmit={onSubmit}>
          <input className='bg-zinc-800 p-2 block w-full mb-4'
           type="text" placeholder="title"
          {...register('title', {required: true})} />
          {errors.title && <span>This field is required</span>}
          
          <textarea
          className='bg-zinc-800 p-2 block w-full mb-4'
           rows="3" placeholder="Task description"
          {...register('description', {required: true})}>
          </textarea>
          {errors.description && <span>This field is required</span>}
          <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 mt-3 rounded-lg block w-full'
           type="submit">Add task</button> 
          </form> 

          {params.id && (
          <div className='flex justify-end'>
          <h1>Editing task with id: {params.id} 
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold p-3 mt-3 rounded-lg block w-full'
            onClick ={ async () => {
              const accepted = window.confirm('Are you sure you want to delete this task?');
              if (accepted) {
                await deleteTask(params.id);
                toast.success('Task deleted successfully',{
                  position: 'bottom-center',
                  style: {
                    border: '1px solid green',
                    padding: '16px',
                    color: 'red',
                  }
                }
              );
                navigate('/tasks');
              }
          }}> Delete </button> </h1>
          </div> 
          )}
        </div>
    );
  }