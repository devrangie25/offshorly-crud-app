import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import taskAction from '../../redux/actions/task.actions'

const Tasks = () => {
    
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const [task, setTask] = useState({
        title: '',
    })

    const handleChange = (event) => {
        setTask({...task, title: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(taskAction.createTask(task))
    }

    useEffect(() => {
        dispatch(taskAction.fetchTasks())
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>This is Tasks Page</h1>
                <input name="title" type="text" value={task.title} onChange={handleChange} />
                <input type='submit' value="Add" />
                <div>
                    {
                        tasks && tasks.map((task, index) => {
                            return <div key={index}>{task.title}</div>
                        })
                    }
                </div>
            </form>

        </div>
    );
};

export default Tasks;