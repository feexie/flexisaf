// filepath: /home/yusuf/flexisaf/week-3/src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import './styles.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (name) => {
        const newTask = { id: Date.now(), name, completed: false };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true; // all tasks
    });

    return (
        <div className="app">
            <Header />
            <TaskForm onAdd={addTask} />
            <Filter filter={filter} setFilter={setFilter} />
            <TaskList tasks={filteredTasks} onRemove={removeTask} onToggle={toggleTask} />
        </div>
    );
};

export default App;