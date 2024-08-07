# ToDoList Application

## Overview
React is used in the construction of this ToDoList app. Users are able to add, remove, and mark tasks as finished. The application offers a smooth everyday task management experience because of its straightforward and user-friendly design.

## System Design
The program is divided into multiple essential parts, each in charge of a particular aspect of its functionality:

### Components: 
**App** is the primary component that renders other components and maintains state. It maintains the task list and takes care of the logic for adding, removing, and switching between tasks' completion states.
- **ToDoList**: A component that renders `ToDoItem` components by mapping over the tasks on the list as props. It serves as a holding area for the work items.
- **ToDoItem**: An element that stands in for a particular task. The task description is shown, and buttons to mark the task as done or erase it are provided. It also manages the task's visual completion status depiction.
- **AddToDo**: An element with a button and input field for adding new tasks. To update the task list, it raises the state to the {App} component.

### State Management
React's `useState` hook is used to manage the state. The tasks' state—an array of task objects—is preserved by the `App` component. Every task object has the following attributes:
- {text}: The task description.
- {completed}: A boolean representing the task's completion status.

### Data Flow
1. **Adding a Task**: The task is raised up to the `App` component, which updates the state with the new task, when a user enters it in the `AddToDo} component and clicks the add button.
2. **Deleting a Task**: The `App` component modifies the state by eliminating the task from the list when a user clicks the delete button on a `ToDoItem}.
3. **Toggling Task Completion**: The `App} component modifies the state by toggling the `completed} property of the task when a user clicks the complete button on a `ToDoItem}.

### Fashion
The `app.css` file contains CSS, which is used to style the application. With distinct styles for the layout, buttons, and task items, the styles guarantee a simple and responsive design.

## Implementation
### App Component
The root component of the application is the `App` component. It keeps the tasks in their current state and transfers the required props to the child components. The following functions are managed by it:
- **Adding a Task**: To add a new task to the state, use the `addTask` function. Every job is assigned a distinct ID, and the `completed` field is automatically set to `false`.
- **Deleting a Task**: A task can be eliminated from the state by using its ID and the `deleteTask` function.
- **Toggling Task Completion**: A task's `completed` property can be toggled depending on its ID using the `toggleTaskCompletion` function.

### To-Do List Item
The tasks list is given to the `ToDoList` component as props, which it then maps over to create `ToDoItem` components. It holds the task items and provides each {ToDoItem} with the relevant props.

### ToDoItem Component
The single job is represented by the `ToDoItem` component. The task description is shown, and buttons to mark the task as done or erase it are provided. It uses several CSS classes depending on the {completed} attribute to handle the task's visual representation of completion state.

### AddToDo Component
A button to add new tasks and an input field are both present in the `AddToDo` component. To update the task list, it raises the state to the {App} component. The `addTask` function in the `App} component is called by the `handleSubmit` function, which also handles form submissions.

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


