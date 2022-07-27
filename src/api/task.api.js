import axios from "axios";
const API_URL = "http://localhost:4000/api"

export const fetchTasks = async () => {
    try {
        const tasks = await axios.get(`${API_URL}/tasks`);  
        
        const { data } = tasks.data;

        return data;
    } catch (error) {
        console.error({
            error: true,
            message: `Error fetching tasks - ${error.message}`
        });
    }
}

export const createTask = async (task) => {
    try {
        const newTask = await axios.post(`${API_URL}/tasks/create`, task);

        const { data } = newTask.data;

        return data;
    } catch (error) {
        console.error({
            error: true,
            message: `Error creating task - ${error.message}`
        });
    }
}

export const updateTask = async (task) => {
    try {
        const updatedTask = await axios.post(`${API_URL}/tasks/update`, task);

        const { data } = updatedTask.data;

        return data;
    } catch (error) {
        console.error({
            error: true,
            message: `Error updating task - ${error.message}`
        });
    }
}

export const deleteTask = async (task) => {
    try {
        const deletedTask = await axios.post(`${API_URL}/tasks/delete`, task);

        const { data } = deletedTask.data;

        return data; 
    } catch (error) {
        console.error({
            error: true,
            message: `Error deleting task - ${error.message}`
        });
    }
}

export const fetchOneTask = async (task) => {
    try {
        const task = await axios.get(`${API_URL}/tasks/${task.id}`);

        const { data } = task.data;

        return data;
    } catch (error) {
        console.error({
            error: true,
            message: `Error fetching one task - ${error.message}`
        });
    }
}