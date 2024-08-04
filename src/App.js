import React, { useState } from 'react';
import './App.css';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

// Main App Component
function App() {
  // State variables
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');
  const [currentTab, setCurrentTab] = useState('todo'); // State for tab

  // Add a new task
  const addTask = () => {
    if (title && description) {
      setTasks([...tasks, { title, description, completed: false, timestamp: new Date().toLocaleString() }]);
      setTitle('');
      setDescription('');
    }
  };

  // Update an existing task
  const updateTask = (originalIndex, newTitle, newDescription) => {
    const newTasks = tasks.slice();
    newTasks[originalIndex] = { ...newTasks[originalIndex], title: newTitle, description: newDescription, timestamp: new Date().toLocaleString() };
    setTasks(newTasks);
  };

  // Toggle task completion status
  const markAsDone = (index) => {
    const newTasks = tasks.slice();
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.slice();
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Filter tasks based on current tab and search query
  const filteredTasks = tasks.filter(task => 
    (currentTab === 'todo' ? !task.completed : task.completed) &&
    (task.title.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className='todoapp'><TaskInput title={title} setTitle={setTitle} description={description} setDescription={setDescription} addTask={addTask} />
      <SearchBar search={search} setSearch={setSearch} />
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TaskList tasks={tasks} filteredTasks={filteredTasks} markAsDone={markAsDone} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
      
    </div>
  );
}

// Task Input Component
const TaskInput = ({ title, setTitle, description, setDescription, addTask }) => (
  <div className="input-container">
    <div className='input-container-item'>
      <label>Title</label>
      <input 
      type="text"
      placeholder="What's the title of your Todo?"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div className='input-container-item'>
    <label>Description</label>
    <input
      type="text"
      placeholder="What's the description of your Todo?"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    </div>
    
    <div className="input-container-item">
    <button onClick={addTask}>ADD</button>
    </div>
    
  </div>
);

// Search Bar Component
const SearchBar = ({ search, setSearch }) => (
  <div className='alltabs'>
  <div className="search-container">
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
  </div>
);

// Tabs Component
const Tabs = ({ currentTab, setCurrentTab }) => (
  <div className='alltabs'>
  <div className="tabs">
    <button 
      className='secondaryBtn'
      onClick={() => setCurrentTab('todo')} 
      style={{ backgroundColor: currentTab === 'todo' ? 'blueviolet' : 'gray' }}
    >
      Todo
    </button>
    <button 
      className='secondaryBtn'
      onClick={() => setCurrentTab('completed')} 
      style={{ backgroundColor: currentTab === 'completed' ? 'blueviolet' : 'gray' }}
    >
      Completed
    </button>
  </div>
  </div>
);

// Task List Component
const TaskList = ({ tasks, filteredTasks, markAsDone, updateTask, deleteTask }) => {
  const [expandedTaskIndex, setExpandedTaskIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedTaskIndex(expandedTaskIndex === index ? null : index);
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {filteredTasks.map((task, index) => {
          const originalIndex = tasks.findIndex(t => t === task);
          const isExpanded = expandedTaskIndex === index;
          return (
            <li key={index} className={`todo-list-item ${task.completed ? 'completed' : ''}`}>
              <div onClick={() => toggleExpand(index)}>
                <h3>{task.title}</h3>
                {isExpanded && (
                  <>
                    <p>{task.description}</p>
                    <p className="timestamp">Last updated: {task.timestamp}</p>
                  </>
                )}
              </div>
              <div className="actions">
                <button className='checkBtn' onClick={() => markAsDone(originalIndex)}>
                  <FaCheck title='Check?' />
                </button>
                <button className='EditBtn' onClick={() => updateTask(originalIndex, prompt('New title:', task.title), prompt('New description:', task.description))}>
                  <FaEdit title='Edit?' />
                </button>
                <button className='deleteBtn' onClick={() => deleteTask(originalIndex)}>
                  <FaTrash title='Delete?' />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
