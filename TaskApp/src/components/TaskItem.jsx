import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
