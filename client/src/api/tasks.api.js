import axios from 'axios';

const tasksAPI = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
    })

export const getTask = (id) => {
    return tasksAPI.get(`/${id}/`);
}

export const getAllTasks = () => {
    return tasksAPI.get('/');
        
}

export const createTask = (task) => {
    return tasksAPI.post('/', task);    
}

export const deleteTask = (id) => {
    return tasksAPI.delete(`/${id}/`);

}

export const updateTask = (id, task) => {
    return tasksAPI.put(`/${id}/`, task);
}