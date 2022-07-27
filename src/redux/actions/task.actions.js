import { ActionTypes } from "./action.types"
import * as taskApi from '../../api/task.api'

function createTask(task){
    return {
        type: ActionTypes.CREATE_TASK,
        payload: task
    }   
}

function fetchTasksSuccess(tasks){
    return {
        type: ActionTypes.FETCH_TASKS_SUCCESS,
        payload: tasks
    }
}

function fetchTasks(){
    return async dispatch => {
        try {
            console.log('Fetch Tasks in ACTIONS')
            const tasks = await taskApi.fetchTasks();
            dispatch(fetchTasksSuccess(tasks));
        } catch (error) {
            console.error({
                data: error,
                error: true,
                message: 'Error fetching tasks'
            });
            throw error
        }
    }
}

export default {
    createTask,
    fetchTasks
}