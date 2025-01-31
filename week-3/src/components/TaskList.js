import React from 'react';

const TaskList = ({ tasks, onRemove, onToggle }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        onClick={() => onToggle(task.id)}
                    >
                        {task.name}
                    </span>
                    <button onClick={() => onRemove(task.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;