import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskListView from './TaskListView';
import AddTaskView from './AddTaskView';

function AppRoutes({ tasks, addTask, deleteTask, toggleTaskCompletion }) {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <TaskListView 
            tasks={tasks} 
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        } 
      />
      <Route 
        path="/add" 
        element={<AddTaskView addTask={addTask} />} 
      />
    </Routes>
  );
}

export default AppRoutes;