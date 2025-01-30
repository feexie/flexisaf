import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onRemove, onToggle }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <Task key={task.id} task={task} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TaskList;
