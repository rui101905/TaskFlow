import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

function App() {
  // Global state for tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskDetails) => {
    const newTask = {
      id: Date.now(), // Simple ID generation
      title: taskDetails.title,
      description: taskDetails.description,
      priority: taskDetails.priority,
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container-fluid mt-4">
          <Routes>
            <Route 
              path="/" 
              element={
                <TaskListView 
                  tasks={tasks} 
                  deleteTask={deleteTask} 
                />
              } 
            />
            <Route 
              path="/add" 
              element={
                <AddTaskView 
                  addTask={addTask} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;