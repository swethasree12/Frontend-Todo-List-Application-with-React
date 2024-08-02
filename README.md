# ToDoList Application

## Overview
This ToDoList application is built using React. It allows users to add, delete, and mark tasks as completed. The application is designed to be simple and user-friendly, providing a seamless experience for managing daily tasks.

## System Design
The application is structured into several key components, each responsible for a specific part of the functionality:

### Components
- **App**: The main component that holds the state and renders other components. It manages the list of tasks and handles the logic for adding, deleting, and toggling the completion status of tasks.
- **ToDoList**: A component that receives the list of tasks as props and maps over them to render `ToDoItem` components. It acts as a container for the task items.
- **ToDoItem**: A component that represents a single task. It displays the task description and provides buttons to delete the task or mark it as completed. It also handles the visual representation of the task's completion status.
- **AddToDo**: A component that provides an input field and a button to add new tasks. It lifts the state up to the `App` component to update the task list.

### State Management
The state management is handled using React's `useState` hook. The `App` component maintains the state of the tasks, which is an array of task objects. Each task object contains the following properties:
- `text`: The description of the task.
- `completed`: A boolean indicating whether the task is completed.

### Data Flow
1. **Adding a Task**: When a user enters a task in the `AddToDo` component and clicks the add button, the task is lifted up to the `App` component, which updates the state with the new task.
2. **Deleting a Task**: When a user clicks the delete button on a `ToDoItem`, the `App` component updates the state by removing the task from the list.
3. **Toggling Task Completion**: When a user clicks the complete button on a `ToDoItem`, the `App` component updates the state by toggling the `completed` property of the task.

### Styling
The application is styled using CSS, which is contained in the `app.css` file. The styles ensure a clean and responsive design, with specific styles for the layout, buttons, and task items.

## Implementation
### App Component
The `App` component is the root component of the application. It maintains the state of the tasks and passes down necessary props to child components. It handles the following functionalities:
- **Adding a Task**: The `addTask` function is used to add a new task to the state. It generates a unique ID for each task and sets the `completed` property to `false` by default.
- **Deleting a Task**: The `deleteTask` function is used to remove a task from the state based on its ID.
- **Toggling Task Completion**: The `toggleTaskCompletion` function is used to toggle the `completed` property of a task based on its ID.

### ToDoList Component
The `ToDoList` component receives the list of tasks as props and maps over them to render `ToDoItem` components. It acts as a container for the task items and passes down necessary props to each `ToDoItem`.

### ToDoItem Component
The `ToDoItem` component represents a single task. It displays the task description and provides buttons to delete the task or mark it as completed. It handles the visual representation of the task's completion status by applying different CSS classes based on the `completed` property.

### AddToDo Component
The `AddToDo` component contains an input field and a button to add new tasks. It lifts the state up to the `App` component to update the task list. The `handleSubmit` function is used to handle the form submission and call the `addTask` function in the `App` component.

## Setup and Run
### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application
1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building for Production
1. Build the application:
    ```bash
    npm run build
    ```

2. The production-ready files will be in the `build` directory.

## Styling
The CSS styling for the application is contained in the `app.css` file. It includes styles for the layout, buttons, and task items to ensure a clean and responsive design.


