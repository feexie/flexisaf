import React from 'react';

const Task = ({ task, onRemove, onToggle }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <span>{task.name}</span>
            <button onClick={() => onToggle(task.id)}>Toggle</button>
            <button onClick={() => onRemove(task.id)}>Remove</button>
        </div>
    );
};

export default Task;
