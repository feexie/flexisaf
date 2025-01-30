import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName) return;
        onAdd(taskName);
        setTaskName('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;
