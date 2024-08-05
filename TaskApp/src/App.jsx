import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const allTasks = () => tasks;
  const completedTasks = () => tasks.filter(task => task.completed);
  const pendingTasks = () => tasks.filter(task => !task.completed);

  return (
    <Router>
      <div>
        <h1>Gestión de Tareas</h1>
        <nav>
          <Link to="/">Todas</Link>
          <Link to="/completed">Completadas</Link>
          <Link to="/pending">Pendientes</Link>
        </nav>
        <TaskForm addTask={addTask} />
        <Routes>
          <Route path="/" element={<TaskList tasks={allTasks()} toggleComplete={toggleComplete} deleteTask={deleteTask} />} />
          <Route path="/completed" element={<TaskList tasks={completedTasks()} toggleComplete={toggleComplete} deleteTask={deleteTask} />} />
          <Route path="/pending" element={<TaskList tasks={pendingTasks()} toggleComplete={toggleComplete} deleteTask={deleteTask} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
