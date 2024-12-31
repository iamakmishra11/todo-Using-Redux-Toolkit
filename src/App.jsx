import { useSelector } from 'react-redux';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './index.css';

function App() {
    const todos = useSelector(state => state.todos);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Todo App</h1>
            <TodoInput />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
