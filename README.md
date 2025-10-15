# TaskFlow - Task Management Application

A simple, responsive Task Management Application built with React Functional Components, React Hooks, React Router, and Bootstrap.

## Features

- **Add Tasks**: Create new tasks with title, description, and priority level
- **View Tasks**: Display all tasks in a responsive card layout
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Priority Management**: Visual priority indicators (High, Medium, Low)
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Navigation**: Easy navigation between Home and Add Task views

## Technical Requirements Met

✅ **Functional Components**: All components use React Functional Components (no Class Components)  
✅ **State Management**: Uses `useState` and other React Hooks for state management  
✅ **Routing**: Implements `react-router-dom` for navigation between views  
✅ **Styling**: Uses Bootstrap and React-Bootstrap for responsive styling  
✅ **GitHub Integration**: Ready for version control and collaborative development  

## Project Structure

```
src/
├── App.js                 # Main application component with global state
├── App.css               # Custom styles
├── components/
│   ├── Navbar.js         # Navigation component
│   ├── TaskListView.js   # Task list display component
│   └── AddTaskView.js    # Add task form component
└── index.js              # Application entry point
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TaskFlow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Dependencies

- **React**: ^19.1.1
- **React Router DOM**: For navigation
- **Bootstrap**: ^5.x for styling
- **React Bootstrap**: For Bootstrap components
- **React Router Bootstrap**: For Bootstrap navigation components

## Task Breakdown (5 Tasks Completed)

### Task 1: Project Setup & Bootstrap Integration ✅
- Initialized React project
- Integrated Bootstrap and React-Bootstrap
- Created responsive Header/Navbar with navigation links
- Set up project structure

### Task 2: Routing & Application Shell ✅
- Implemented `react-router-dom` for navigation
- Created routes for `/` (Home) and `/add` (Add Task)
- Built shell components for TaskListView and AddTaskView

### Task 3: Global State Management ✅
- Implemented global task state using `useState` in App.js
- Created `addTask()` and `deleteTask()` functions
- Passed functions to components via props

### Task 4: Add Task Form Component ✅
- Built AddTaskView component with Bootstrap form
- Captures Task Title, Description, and Priority
- Handles form submission and navigation
- Includes form validation and error handling

### Task 5: Task List Component ✅
- Created TaskListView component with responsive Bootstrap cards
- Displays tasks with priority indicators
- Implements delete functionality with confirmation
- Shows empty state when no tasks exist

## Usage

1. **View Tasks**: Navigate to the home page to see all your tasks
2. **Add Task**: Click "Add New Task" button or navigate to `/add`
3. **Fill Form**: Enter task title (required), description (optional), and select priority
4. **Submit**: Click "Add Task" to save and return to home
5. **Delete Task**: Click the "Delete" button on any task card

## Features in Detail

### Task Properties
- **ID**: Auto-generated unique identifier
- **Title**: Required task title
- **Description**: Optional task description
- **Priority**: High (red), Medium (yellow), Low (green)
- **Created Date**: Automatic timestamp

### Responsive Design
- Mobile-first approach
- Responsive grid layout
- Bootstrap components for consistent styling
- Priority color coding with visual indicators

### State Management
- Global state in App.js using `useState`
- Props drilling for component communication
- Immutable state updates
- Local component state for forms

## Development Notes

- All components are functional components using React Hooks
- No class components used anywhere in the codebase
- Bootstrap classes used for responsive design
- React Router for client-side navigation
- Form validation and error handling implemented
- Confirmation dialogs for destructive actions

## Future Enhancements

- Edit task functionality
- Task filtering and sorting
- Local storage persistence
- Task categories/tags
- Due dates and reminders
- User authentication
- Task sharing and collaboration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).